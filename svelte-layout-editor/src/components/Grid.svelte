<script>
  import UpArrow from './UpArrow.svelte';
  import LeftArrow from './LeftArrow.svelte';
  import RightArrow from './RightArrow.svelte';
  import DownArrow from './DownArrow.svelte';
  import GridItem from "./GridItem.svelte";

  export let gridData;
  export let onClick;
  
</script>

<div class="test-editor">
  	<div class="up-arrow">
    {#if gridData.rows > 3}
      	<UpArrow onClick={onClick}/> 
    {/if}
  	</div>
  	<div class="row">
		<div class="left-arrow">
			{#if gridData.columns > 3}
				<LeftArrow onClick={onClick}/>
			{/if}
		</div>

		<div class="container">
			{#each gridData.gridItems as gridItem}
			<!-- onClick={onClick} rows={gridData.rows.toString()} columns={gridData.columns.toString()} id={gridItem.id} -->
				<GridItem gridArea="{gridItem.gridArea.startRow}/{gridItem.gridArea.startColumn}/{gridItem.gridArea.endRow}/{gridItem.gridArea.endColumn}">ID: {gridItem.id}</GridItem>
			{/each}
		</div>
		<div class="right-arrow">
		<!-- on:right-arrow -->
			<RightArrow onClick={onClick}/>
		</div>
  	</div>
	<div class="down-arrow">
  	<!-- on:down-arrow -->
  		<DownArrow onClick={onClick} />
	</div>
</div>

<style>
  .test-editor {
    width: 100%;
    height: 90%;
  }
  .row {
    padding: 0 20px;
  }
  .container {
    padding: 10px;
    background-color: #edf1f7;
    border: 1px solid #3d5f99;
    height: 50vh;
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    gap: 0.6rem 0.6rem;
  }
  @media screen and (min-width: 480px) {
    .container {
      padding: 20px;
      gap: 1rem 1rem;
      height: 75vh;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      height: 100vh;
    }
  }
</style>
