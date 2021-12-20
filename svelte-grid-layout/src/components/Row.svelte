<script>
	import { getContext } from 'svelte';
	
	const grid = getContext("grid");

	grid.rowIndex = grid.rowIndex+1;
	grid.columnIndex = 0;
</script>

<slot/>
    
<style>
</style>