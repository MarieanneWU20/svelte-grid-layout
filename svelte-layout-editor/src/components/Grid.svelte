<script>
  import ArrowButton from "./ArrowButton.svelte";
  import GridItem from "./GridItem.svelte";

  export let gridData;
  export let onClick;
  
</script>

<div class="test-editor">
  	<div class="up-arrow">
    {#if gridData.rows > 3}
      	<ArrowButton onClick={onClick} itemId="editor" placing="outer" id="up"/> 
    {/if}
  	</div>
  	<div class="row">
		<div class="left-arrow">
			{#if gridData.columns > 3}
				<ArrowButton onClick={onClick} itemId="editor" placing="outer" id="left"/>
			{/if}
		</div>

		<div class="container">
			{#each gridData.gridItems as gridItem}
				<GridItem onClick={onClick} rows={gridData.rows.toString()} columns={gridData.columns.toString()} id={gridItem.id} gridArea="{gridItem.gridArea.startRow}/{gridItem.gridArea.startColumn}/{gridItem.gridArea.endRow}/{gridItem.gridArea.endColumn}">ID: {gridItem.id}</GridItem>
			{/each}
		</div>
		<div class="right-arrow">
			<ArrowButton onClick={onClick} itemId="editor" placing="outer" id="right"/>
		</div>
  	</div>
	<div class="down-arrow">
  		<ArrowButton onClick={onClick} itemId="editor" placing="outer" id="down"/>
	</div>
</div>

<style>
  .test-editor {
    width: 100%;
    height: 90%;
  }
  .up-arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px 0 10px 0;
	}
  .row {
    padding: 0 20px;
  }
  .left-arrow {
		position: absolute;
    left: -15px;
    padding-left: 10px;
    top: 34%;
    color: #ccc;
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
  .right-arrow {
		float: right;
        position: absolute;
        right: 3%;
        /* padding-right: 20px; */
        top: 34%;
	}
	.down-arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px 0 30px 0;
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
