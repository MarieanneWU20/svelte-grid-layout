import { writable, get } from "svelte/store";

let defaultGridData = {
    rows: [
        { height: 1, columns: [{ width: 1}, { width: 1}, { width: 1}]},
        { height: 1, columns: [{ width: 1}, { width: 1}, { width: 1}]},
        { height: 1, columns: [{ width: 1}, { width: 1}, { width: 1}]}
    ]
}

export const gridDataStore = writable(defaultGridData);

export function addRow() {
	let gridData = get(gridDataStore);
	gridData.rows.push({height: 1, columns: [{ width: 1}, { width: 1}, { width: 1}]});
	
	gridDataStore.set(gridData);
	console.log('CLICK on addRow: ', get(gridDataStore));
}

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
// Increaese column width and insert blank column:
	//...for every row in gridData...
	for (let i = 0; i < gridData.rows.length; i++) {
		const row = gridData.rows[i];
		//...for every column in row...
		for (let j = 0; j < row.columns.length; j++) {
			const column = row.columns[j];
			//...if current column should increase: increase width and add an extra column
			if (j === columnIndex ) {
	
				column.width++;
				row.columns.push({ width: 1})
			}
		}
		newGridData.rows.push(row); 
	}
	//...set gridDataStore to newGridData
	gridDataStore.set(newGridData);
	console.log('Increaese width on column nr:', get(gridDataStore));
}

export function decreaseColmnWidth(columnIndex) {
	let gridData = get(gridDataStore);
	let newGridData = { rows: []};
//Decreaese column width and remove blank column: 
	//...for every row in gridData...
	for (let i = 0; i < gridData.rows.length; i++) {
		const row = gridData.rows[i];
		//...for every column in row...
		for (let j = 0; j < row.columns.length; j++) {
			const column = row.columns[j];
			//...if current column should decrease: decrease width and remove a column
			if (j === columnIndex) {
				column.width--;
				row.columns.pop(); 
			}
		}
		newGridData.rows.push(row); 
	}
	gridDataStore.set(newGridData);
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
