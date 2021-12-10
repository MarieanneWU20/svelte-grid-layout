import { writable, get } from 'svelte/store';


let defaultGridData = {
	rows: [
		{ height: 1, columns: [{ id: "r1c1", width: 3 }, { id: "r1c2", width: 1 }, { id: "r1c3", width: 1 }]},
		{ height: 2, columns: [{ id: "r2c1", width: 3 }]},
	]
}

export const gridDataStore = writable(defaultGridData);

export function increaseHeightOfRow(rowIndex) {
	let $gridData = get(gridDataStore);

	$gridData.rows[rowIndex].height++; 

	gridDataStore.set($gridData);
}

export function decreaseHeightOfRow(rowIndex) {
	let $gridData = get(gridDataStore);
	const nextHeight = $gridData.rows[rowIndex].height-1;

	$gridData.rows[rowIndex].height = Math.max(1, nextHeight); 

	gridDataStore.set($gridData);
}

function calculateNrOfRows(gridData) {
	let rows = 0;
	gridData.rows.forEach(row => {
		rows + row.height;
	});
	return rows;
}

function calculateNrOfColumns(gridData) {
	let columns = 0;
	gridData.rows.forEach(row => {
		let rowColumns = 0;
		gridData.rows.columns.forEach(column => {
			rowColumns += column.width;
		});
		columns = Max.Max(columns, rowColumns);
	});
	return columns;
}





/*
|<->|<->|<->|
   /\
|<----->|
	\/
|<----->|
*/

// let oldGridData = {
// 	rows: 3,
// 	columns: 3,
// 	gridItems:[
// 		 {
// 			  id: "r1c1",
// 			  gridArea:{
// 					startRow: 1,
// 					startColumn: 1,
// 					endRow: 2,
// 					endColumn: 2
// 			  }
// 		 },{
// 			  id: "r1c2",
// 			  gridArea:{
// 					startRow: 1,
// 					startColumn: 2,
// 					endRow: 2,
// 					endColumn: 3
// 			  }
// 		 },{
// 			  id: "r1c3",
// 			  gridArea:{
// 					startRow: 1,
// 					startColumn: 3,
// 					endRow: 2,
// 					endColumn: 4
// 			  }
// 		 },{
// 			  id: "r2c1",
// 			  gridArea:{
// 					startRow: 2,
// 					startColumn: 1,
// 					endRow: 3,
// 					endColumn: 2
// 			  }
// 		 },{
// 			  id: "r2c2",
// 			  gridArea:{
// 					startRow: 2,
// 					startColumn: 2,
// 					endRow: 3,
// 					endColumn: 3
// 			  }
// 		 },{
// 			  id: "r2c3",
// 			  gridArea:{
// 					startRow: 2,
// 					startColumn: 3,
// 					endRow: 3,
// 					endColumn: 4
// 			  }
// 		 },{
// 			  id: "r3c1",
// 			  gridArea:{
// 					startRow: 3,
// 					startColumn: 1,
// 					endRow: 4,
// 					endColumn: 2
// 			  }
// 		 },{
// 			  id: "r3c2",
// 			  gridArea:{
// 					startRow: 3,
// 					startColumn: 2,
// 					endRow: 4,
// 					endColumn: 3
// 			  }
// 		 },{
// 			  id: "r3c3",
// 			  gridArea:{
// 					startRow: 3,
// 					startColumn: 3,
// 					endRow: 4,
// 					endColumn: 4
// 			  }
// 		 }
// 	]
// };