<script>
	import { gridDataStore } from "../store/gridDataStore";
	import Column from "./Column.svelte";

</script>

<!-- <slot>
	<h1>EMPTY ROW!!</h1>
</slot>  -->

{#each $gridDataStore.rows as row, rowIndex}

	{#each row.columns as column, columnIndex}
	
		<slot {rowIndex} {columnIndex}>
			<Column {rowIndex} {columnIndex}  height=1 width=1><slot name="column"></slot></Column>
		</slot>
	
	{/each}
{/each}
    
<style>
    h1 {
        color: darkred;
    }
</style>