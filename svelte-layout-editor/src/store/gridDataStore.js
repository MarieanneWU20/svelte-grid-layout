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

export function calculateRows(gridData) {

	console.log(gridData.rows);
	let rowCount = 0;
	
	gridData.rows.forEach(row => {
		rowCount +=
		 row.height;
	});
	return rowCount;
}

export function calculateColumns(gridData) {
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