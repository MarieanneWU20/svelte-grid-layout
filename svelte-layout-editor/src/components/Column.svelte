<script>
	import { gridDataStore } from "../store/gridDataStore";
	import ArrowButton from "./ArrowButton.svelte";
	
    export let width;
	export let height;
	export let rowIndex;
	export let columnIndex;
	
	console.log('Column width: ', width, 'height: ',height);
</script>

<!-- {#each $gridDataStore.rows as row, rowIndex}  -->
	<!-- {#each $gridDataStore.rows[rowIndex].columns as column, columnIndex} -->
		<!-- id={column.id} -->
		<div  class="section" style="grid-area: { `${Number(rowIndex) + 1}/${Number(columnIndex) + 1}/${Number(rowIndex)+1+Number(height)}/${Number(columnIndex)+1+Number(width)}` } ;">
			<div class="up-arrow">
				<ArrowButton index={rowIndex} placing="inner"  id="up" />
			</div>
			<slot><h1>EMPTY COLUMN!!</h1></slot>
			<div class="left-arrow">
				<ArrowButton index={columnIndex} placing="inner" id="left" />
			</div>
			<div class="right-arrow">
				<ArrowButton index={columnIndex} placing="inner" id="right" />
			</div>
			<div class="down-arrow">
				<ArrowButton index={rowIndex} placing="inner" id="down" />
			</div>
		</div>
	<!-- {/each} -->
<!-- {/each} -->

<style>
    h1 {
        color: darkgreen;
    }
    .section {
		 width: auto;
		 height: auto;
		 border-radius: 20px;
		 background-color: #ffffff;
		 text-align: center;
		 vertical-align: middle;
		 border: darkred solid 2px;
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

	  .section{
		 border-radius: 25px;
		 padding: 15px;
	 }
	}
	@media screen and (min-width: 768px) {
	  .section{
		 border-radius: 30px;
		 padding: 20px;
		 }
	}
</style>