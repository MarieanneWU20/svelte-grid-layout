<script>
	import { getContext, setContext } from 'svelte';
	export let name;
	const grid = getContext("grid");
	grid.rowIndex = grid.rowIndex+1;
	grid.columnIndex = 0;
	// setContext("grid", {
	// 	...grid,
	// 	rowIndex: grid.rowIndex+1
	// });
	console.log(name, grid);

</script>

<slot><h1>ROW</h1></slot>
    
<style>
    h1 {
        color: darkred;
    }
</style>