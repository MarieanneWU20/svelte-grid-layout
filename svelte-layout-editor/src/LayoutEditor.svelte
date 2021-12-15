<script>
	import { onMount } from "svelte";
	import ArrowButton from "./components/ArrowButton.svelte";
	import { gridDataStore, calculateRows, calculateColumns } from "./store/gridDataStore";

	// onMount(() => {
	// 	$gridDataStore = { rows: [{ columns: [{}, {}] }] };
	// });
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
			<slot ></slot>
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
