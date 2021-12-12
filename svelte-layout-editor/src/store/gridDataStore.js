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
	let newGridData = { rows: []};

    gridData.rows[rowIndex].height++;
// Insert blank row: 
	//...for every row in gridData...
	for (let i = 0; i < gridData.rows.length; i++) {
		const row = gridData.rows[i];
		//...add row to newGridData...
		newGridData.rows.push(row); 
		//...if current row should increase add an extra row...
		if (i === rowIndex) {
			newGridData.rows.push({ height: 1, columns: []});
		}
	}
	//...set gridDataStore to newGridData
    gridDataStore.set(newGridData);
	console.log('CLICK on increaseRowHeight: ', get(gridDataStore));
}

export function decreaseRowHeight(rowIndex) {
    let gridData = get(gridDataStore);
	let newGridData = { rows: []};

	let newHeight = gridData.rows[rowIndex].height-1;

	gridData.rows[rowIndex].height = Math.max(1, newHeight);
//Remove those blank rows:
	//...for every row in gridData...
	for (let i = 0; i < gridData.rows.length; i++) {
		const row = gridData.rows[i];
		//...if current row isn't the blank row add row to newGridData...
		if (i !== rowIndex + 1) {
			newGridData.rows.push(row); 
		}
	}
	//...set gridDataStore to newGridData
	gridDataStore.set(newGridData);
	console.log('CLICK on decreaseRowHeight: ', get(gridDataStore));
}

export function increaseColmnWidth(columnIndex) {
	let gridData = get(gridDataStore);
	let newGridData = { rows: []};
//TODO: Increaese column width
	//Insert blank column: 
	console.log('Increaese width on column nr:',columnIndex);
}

export function decreaseColmnWidth(columnIndex) {
	let gridData = get(gridDataStore);
	let newGridData = { rows: []};
//TODO: Decreaese column width
	//Remove blank column: 
	console.log('Decreaese width on column nr:',columnIndex);
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
