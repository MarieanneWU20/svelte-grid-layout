<script>
	import { onMount } from "svelte";
	import ArrowButton from "./ArrowButton.svelte";

	export let gridArea;
	export let id;
	export let rows;
	export let columns;
	export let onClick;

	let area;
	let startRow;
	let startColumn;

	function extractRowAndColumn(gridArea) {
		area = gridArea.split("/");
		// console.log(area);
		startRow = area[0];
		startColumn = area[1];
	}
	extractRowAndColumn(gridArea);

	onMount(function () {
		let gridItems = document.getElementsByClassName("section");

		for (let i = 0; i < gridItems.length; i++) {
			const gridItem = gridItems[i];

			// Get all inner-buttons and hide them
			let arrowBtns = document.getElementsByClassName("inner");
			for (let i = 0; i < arrowBtns.length; i++) {
				let arrowButton = arrowBtns[i];
				arrowButton.style = "display: none";
			}

			// Listen for mouse-over = show inner-buttons
			gridItem.addEventListener("mouseover", function () {
				let arrowBtns = this.getElementsByClassName("inner");
				for (let i = 0; i < arrowBtns.length; i++) {
					let arrowButton = arrowBtns[i];
					arrowButton.style = "display: inline-block";
				} // console.log("mouseOVER", i + 1);
			});

			// Listen for mouse-out = hide inner-buttons
			gridItem.addEventListener("mouseout", function () {
				let arrowBtns = this.getElementsByClassName("inner");
				for (let i = 0; i < arrowBtns.length; i++) {
					let arrowButton = arrowBtns[i];
					arrowButton.style = "display: none";
				} // console.log("mouseOUT", i + 1);
			});
		}
	});
	//console.log('ROWS: ', rows,'COLUMNS: ', columns);
</script>

<div {id} class="section" style="grid-area: {gridArea} ;">
	<div class="up-arrow">
		{#if startRow !== "1"}
			<ArrowButton {onClick} itemId={id} placing="inner" id="up" />
		{/if}
	</div>
	<slot />
	<div class="left-arrow">
		{#if startColumn !== "1"}
			<ArrowButton {onClick} itemId={id} placing="inner" id="left" />
		{/if}
	</div>
	<div class="right-arrow">
		{#if startColumn !== columns}
			<ArrowButton {onClick} itemId={id} placing="inner" id="right" />
		{/if}
	</div>
	<div class="down-arrow">
		{#if startRow !== rows}
			<ArrowButton {onClick} itemId={id} placing="inner" id="down" />
		{/if}
	</div>
</div>

<style>
	div {
		width: auto;
		height: auto;
		border-radius: 20px;
		background-color: #ffffff;
		text-align: center;
		vertical-align: middle;
	}
	.up-arrow {
		justify-content: center;
		height: 25px;
	}
	.left-arrow {
		float: left;
		width: 25px;
		height: 25px;
	}
	.right-arrow {
		float: right;
		width: 25px;
		height: 45px;
	}
	.down-arrow {
		justify-content: center;
		height: 25px;
		margin-top: 20%;
	}
	@media screen and (min-width: 480px){
	div{
		border-radius: 25px;  
		padding: 15px;
	}
	}
	@media screen and (min-width: 768px){
	div{
		border-radius: 30px;  
		padding: 20px;
		}
	}
</style>
