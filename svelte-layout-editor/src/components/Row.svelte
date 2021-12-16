<script>
	import { getContext, setContext } from 'svelte';
	import { gridDataStore } from "../store/gridDataStore";
	export let name;
	const grid = getContext("grid");
	grid.rowIndex = grid.rowIndex+1;
	grid.columnIndex = 0;
	// setContext("grid", {
	// 	...grid,
	// 	rowIndex: grid.rowIndex+1
	// });
	console.log(name, grid);

	// export let height;
	// console.log('Row: height: ',height);
</script>

<slot><h1>ROW</h1></slot>

	<!-- {#each $gridDataStore.rows as row, rowIndex} 
		{#each row.columns as column, columnIndex}
			<div id={column.id} class="section" style="grid-area: { `${rowIndex + 1}/${columnIndex + 1}/${rowIndex+1+row.height}/${columnIndex+1+column.width}` } ;"></div>
	{/each}
{/each} -->
    
<style>
    h1 {
        color: darkred;
    }
</style>