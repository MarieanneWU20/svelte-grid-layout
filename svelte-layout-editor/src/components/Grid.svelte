<script>
  // TODO: remove import when not console logging?
  // import { get } from "svelte/store";

  import ArrowButton from "./ArrowButton.svelte";
  import GridItem from "./GridItem.svelte";
  import { gridDataStore, increaseRowHeight, decreaseRowHeight, calculateRows, calculateColumns, generateGridArea } from "../store/gridDataStore";
  
  // TODO: remove when not console log not needed
  // let dataStore= get(gridDataStore)
  // console.log("IN Grid FROM store: ", dataStore);

  // console.log("increaseRowHeight: ", increaseRowHeight(0));
  // console.log("decreaseRowHeight: ", decreaseRowHeight(1));

  // console.log("calculateRows: ", calculateRows());
  // console.log("calculateColumns: ", calculateColumns());

  // export let gridData;

  function handleClick(id, placing, itemId) {

    if (placing === "outer") {
        if (id === "down" ) {
            addRow();
        }
        else if (id === "up" && calculateRows() > 3) {
            removeRow();
        }
        else if (id === "right") {
            addColumn();
        }
        else if (id === "left" && gridData.columns > 3) {
            removeColumn();
        }
    }
    else {
        console.log('Click on: ', itemId+id)
    }
  };

  function addRow() {
    console.log('Click down: ADD ROW ');
  };

  function removeRow() {
    console.log('Click up: REMOVE ROW ');
  };

  function addColumn() {
    console.log('Click right: ADD COLUMN ');
  };
  
  function removeColumn() {
    console.log('Click left: REMOVE COLUMN');
  };
</script>

<div class="editor">
  <div class="up-arrow">
    {#if calculateRows() > 3}
      <ArrowButton onClick={handleClick} itemId="editor" placing="outer" id="up"/> 
    {/if}
  </div>
  <div class="row">
    <div class="left-arrow">
      {#if calculateColumns() > 3}
        <ArrowButton onClick={handleClick} itemId="editor" placing="outer" id="left"/>
      {/if}
    </div>
    <div class="container">
      <!-- 
      {#each gridData.gridItems as gridItem}
        <GridItem onClick={handleClick} gridItem={gridItem} rows={gridData.rows} columns={gridData.columns} gridArea="{gridItem.gridArea.startRow}/{gridItem.gridArea.startColumn}/{gridItem.gridArea.endRow}/{gridItem.gridArea.endColumn}">ID: {gridItem.id}</GridItem>
      {/each} -->
      {#each $gridDataStore.rows as row, rowIndex}
        {#each row.columns as column, columnIndex}
          <GridItem onClick={handleClick} id={column.id} gridArea={ generateGridArea(rowIndex, columnIndex) }>ID: {column.id}</GridItem>
        {/each}
      {/each}
    </div>
    <div class="right-arrow">
      {#if calculateRows() < 5}
        <ArrowButton onClick={handleClick} itemId="editor" placing="outer" id="right"/>
      {/if}
    </div>
  </div>
	<div class="down-arrow">
    {#if calculateColumns() < 5}
  	  <ArrowButton onClick={handleClick} itemId="editor" placing="outer" id="down"/>
	  {/if}
  </div>
</div>

<style>
  .editor {
    width: 100%;
    height: auto;
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
    position: fixed;
    left: -15px;
    top: 25%;
    padding-left: 10px;
	}
  .container {
    padding: 10px;
    background-color: #edf1f7;
    border: 1px solid #3d5f99;
    min-height: 50vh;
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    gap: 0.6rem 0.6rem;
  }
  .right-arrow {
    position: fixed;
    right: 0;
    top: 25%;
	}
	.down-arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px 0 30px 0;
	}
  @media screen and (min-width: 480px) {
    .container {
      padding: 15px;
      gap: 0.8rem 0.8rem;
      min-height: 75vh;
    }
    .left-arrow,
    .right-arrow {
      top: 35%;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      padding: 18px;
      gap: 1rem 1rem;
      min-height: 100vh;
    }
    .left-arrow,
    .right-arrow {
      top: 37%;
    }
  }
  @media screen and (min-width: 1024px) {
    .left-arrow,
    .right-arrow {
      top: 40%;
  }
}
</style>
