<script>
  // TODO: remove import when not console logging?
  import { get } from "svelte/store";

  import ArrowButton from "./ArrowButton.svelte";
  import GridItem from "./GridItem.svelte";
  import { gridDataStore, increaseRowHeight, decreaseRowHeight, calculateRows, calculateColumns } from "../store/gridDataStore";

  let dataStore= get(gridDataStore)
  console.log("IN Grid FROM store: ", dataStore);

  console.log("increaseRowHeight: ", increaseRowHeight(0));
  console.log("decreaseRowHeight: ", decreaseRowHeight(1));

  console.log("calculateRows: ", calculateRows(dataStore));
  console.log("calculateColumns: ", calculateColumns(dataStore));

  export let gridData;

  function handleClick(id, placing, itemId) {

    if (placing === "outer") {
        if (id === "down" ) {
            addRow();
        }
        else if (id === "up" && gridData.rows > 3) {
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
    for (let i = 0; i < gridData.columns; i++) {
      let newGridItem = {
        id: "",
        gridArea:{
          startRow: gridData.rows + 1,
          startColumn: i + 1,
          endRow: gridData.rows + 2,
          endColumn: i + 2
        }
      };
      newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
      gridData.gridItems.push(newGridItem); 
    };
    gridData.rows++;
    console.log('AFTER down: ', gridData);
  };

  function removeRow() {
    let rowToDelete = gridData.rows;
    let deleteIndex = gridData.gridItems.findIndex(e => e.gridArea.startRow === rowToDelete);

    gridData.gridItems.splice(deleteIndex, gridData.columns);
    gridData.rows--;
    console.log('AFTER up: ', gridData); 
  };

  function addColumn() {
    for (let i = 0; i < gridData.rows; i++) {
      let newGridItem = {
        id: "",
        gridArea:{
          startRow: i + 1,
          startColumn: gridData.columns + 1,
          endRow: i + 2,
          endColumn: gridData.columns + 2
        }
      };
      newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
      gridData.gridItems.push(newGridItem);
    }
    gridData.columns++;
    console.log('AFTER right: ', gridData);
  };
  
  function removeColumn() {
    let columnToDelete = gridData.columns;
    for (let i = 0; i < gridData.rows; i++) {
        let start = gridData.gridItems.findIndex(element => element.gridArea.startColumn === columnToDelete);
        gridData.gridItems.splice(start, 1);
    };
    gridData.columns--;
    console.log('AFTER left: ', gridData);
  };
</script>

<div class="editor">
  <div class="up-arrow">
    {#if gridData.rows > 3}
      <ArrowButton onClick={handleClick} itemId="editor" placing="outer" id="up"/> 
    {/if}
  </div>
  <div class="row">
    <div class="left-arrow">
      {#if gridData.columns > 3}
        <ArrowButton onClick={handleClick} itemId="editor" placing="outer" id="left"/>
      {/if}
    </div>
    <div class="container">
      {#each gridData.gridItems as gridItem}
        <GridItem onClick={handleClick} gridItem={gridItem} rows={gridData.rows} columns={gridData.columns} gridArea="{gridItem.gridArea.startRow}/{gridItem.gridArea.startColumn}/{gridItem.gridArea.endRow}/{gridItem.gridArea.endColumn}">ID: {gridItem.id}</GridItem>
      {/each}
    </div>
    <div class="right-arrow">
      {#if gridData.columns < 5}
      <ArrowButton onClick={handleClick} itemId="editor" placing="outer" id="right"/>
      {/if}
    </div>
  </div>
	<div class="down-arrow">
    {#if gridData.rows < 5}
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
