import { writable, get } from "svelte/store";

let defaultGridData = {
    rows: [
        { height: 1, columns: [{id: "r1c1", width: 1}, {id: "r1c2", width: 1}, {id: "r1c3", width: 1}]},
        { height: 1, columns: [{id: "r2c1", width: 1}, {id: "r2c2", width: 1}, {id: "r2c3", width: 1}]},
        { height: 1, columns: [{id: "r3c1", width: 1}, {id: "r3c2", width: 1}, {id: "r3c3", width: 1}]}
    ]
}

export const gridDataStore = writable(defaultGridData);

export function increaseRowHeight(rowIndex) {
    let gridData = get(gridDataStore);

    gridData.rows[rowIndex].height++;

    gridDataStore.set(gridData);
}

export function decreaseRowHeight(rowIndex) {
    let gridData = get(gridDataStore);
    let newHeight = gridData.rows[rowIndex].height-1;

    gridData.rows[rowIndex].height = Math.max(1, newHeight);

    gridDataStore.set(gridData);
}

export function calculateRows() {
	let gridData = get(gridDataStore);
	let rowCount = 0;
	
	gridData.rows.forEach(row => {
		rowCount += row.height;
	});
	
	return rowCount;
}

export function calculateColumns() {
	let gridData = get(gridDataStore);
	let columns = 0;
	gridData.rows.forEach(row => {
		let rowColumns = 0;
		row.columns.forEach(column => {
			rowColumns += column.width;
		});
		columns = Math.max(columns, rowColumns);
	});
	return columns;
}

export function generateGridArea(rowIndex, columnIndex) {

	let gridData = get(gridDataStore);
	let height = gridData.rows[rowIndex].height;
	let width = gridData.rows[rowIndex].columns[columnIndex].width;

	let gridArea = `${rowIndex + 1}/${columnIndex + 1}/${rowIndex+1+height}/${columnIndex+1+width}`

	return gridArea;
}