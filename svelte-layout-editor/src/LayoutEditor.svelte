<script>
	import { onMount } from "svelte";
	import ArrowButton from "./components/ArrowButton.svelte";
	import Row from "./components/Row.svelte";
	import Column from "./components/Column.svelte";
	import { gridDataStore, calculateRows, calculateColumns } from "./store/gridDataStore";

	// export let pics
	 // matrix of urls to pictures [[pic1, pic3], [pic2, pic4]];

	onMount(() => {
		$gridDataStore = { rows: [{ columns: [{}, {}] }] };
	});
 </script>

 <div class="editor">
	<div class="up-arrow">
	  <!-- {#if calculateRows() > 3} -->
		 <ArrowButton index=N/A placing="outer" id="up"/>
	  <!-- {/if} -->
	</div>
	<div class="row">
	  <div class="left-arrow">
		 <!-- {#if calculateColumns() > 3} -->
			<ArrowButton index=N/A placing="outer" id="left"/>
		 <!-- {/if} -->
	  </div>
	  <div class="container">
		 {#each $gridDataStore.rows as row, rowIndex} 
		 <Row>
			{#each row.columns as column, columnIndex}
			<div id={column.id} class="section" style="grid-area: { `${rowIndex + 1}/${columnIndex + 1}/${rowIndex+1+row.height}/${columnIndex+1+column.width}` } ;">
				<Column>
					<div class="up-arrow">
						{#if row.height > 1 && columnIndex !== 0 && columnIndex + 1 !== calculateColumns()}
						  <ArrowButton placing="inner" index={rowIndex} id="up" />
						{/if}
					 </div>
					 <div class="left-arrow">
						{#if column.width > 1}
						  <ArrowButton placing="inner" index={columnIndex} id="left" />
						{/if}
					 </div>
					 <div class="right-arrow">
						<ArrowButton placing="inner" index={columnIndex} id="right" />
					 </div>
					 <div class="down-arrow">
						{#if columnIndex !== 0 && columnIndex + 1 !== calculateColumns()}
						  <ArrowButton placing="inner" index={rowIndex}  id="down" />
						{/if}
					 </div>
				</Column>
			</div>
			
			  <!-- <div id={column.id} class="section" style="grid-area: { `${rowIndex + 1}/${columnIndex + 1}/${rowIndex+1+row.height}/${columnIndex+1+column.width}` } ;">
				 <div class="up-arrow">
					{#if row.height > 1 && columnIndex !== 0 && columnIndex + 1 !== calculateColumns()}
					  <ArrowButton placing="inner" index={rowIndex} id="up" />
					{/if}
				 </div>
				 {#if (rowIndex < pics.length && columnIndex < pics[rowIndex].length)}
				 	<img src={pics[rowIndex][columnIndex]} alt="bild" />
				 {/if}
				 <div class="left-arrow">
					{#if column.width > 1}
					  <ArrowButton placing="inner" index={columnIndex} id="left" />
					{/if}
				 </div>
				 <div class="right-arrow">
					<ArrowButton placing="inner" index={columnIndex} id="right" />
				 </div>
				 <div class="down-arrow">
					{#if columnIndex !== 0 && columnIndex + 1 !== calculateColumns()}
					  <ArrowButton placing="inner" index={rowIndex}  id="down" />
					{/if}
				 </div>
			  </div> -->
			{/each}
			</Row>
		 {/each}
	  </div>
	  <div class="right-arrow">
		 {#if calculateRows() < 5}
			<ArrowButton index=N/A placing="outer" id="right"/>
		 {/if}
	  </div>
	</div>
	 <div class="down-arrow">
	  {#if calculateColumns() < 5}
		  <ArrowButton index=N/A placing="outer" id="down"/>
		{/if}
	</div>
 </div>

 <style>
	.editor {
	  width: 100%;
	  height: auto;
	}
	.editor>.up-arrow {
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 margin: 30px 0 10px 0;
	 }
	.row {
	  padding: 0 20px;
	}
	.row>.left-arrow {
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
	.row>.right-arrow {
	  position: fixed;
	  right: 0;
	  top: 25%;
	 }
	 .editor>.down-arrow {
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 margin: 10px 0 30px 0;
	 }
	.section {
		 width: auto;
		 height: auto;
		 border-radius: 20px;
		 background-color: #ffffff;
		 text-align: center;
		 vertical-align: middle;
	 }
	 .section>.up-arrow {
		 justify-content: center;
		 height: 25px;
	 }
	 .section>.left-arrow {
		 float: left;
		 width: 25px;
		 height: 25px;
	 }
	 .section>.right-arrow {
		 float: right;
		 width: 25px;
		 height: 45px;
	 }
	 .section>.down-arrow {
		 justify-content: center;
		 height: 25px;
		 margin-top: 20%;
	 }

	@media screen and (min-width: 480px) {
	  .container {
		 padding: 15px;
		 gap: 0.8rem 0.8rem;
		 min-height: 75vh;
	  }
	  .section{
		 border-radius: 25px;
		 padding: 15px;
	 }
	.container .left-arrow,
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
	  .section{
		 border-radius: 30px;
		 padding: 20px;
		 }
	  .container .left-arrow,
	  .right-arrow {
		 top: 37%;
	  }
	}
	@media screen and (min-width: 1024px) {
	  .container .left-arrow,
	  .right-arrow {
		 top: 40%;
	}
 }
 </style>
