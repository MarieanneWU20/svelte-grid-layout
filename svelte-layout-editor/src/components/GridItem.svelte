<!-- TODO: DELETE ??? -->
<!-- <script>
	import { onMount } from "svelte";
	import ArrowButton from "./ArrowButton.svelte";

	export let gridArea;
	export let id;
	// export let gridItem;
	// export let rows;
	// export let columns;
	export let onClick;

	onMount(function () {

		let gridItems = document.getElementsByClassName("section");

		for (let i = 0; i < gridItems.length; i++) {
			const gridItem = gridItems[i];
			// Listen for mouse-over GridItems to show inner-buttons
			gridItem.addEventListener("mouseover", function () {
				let innerArrowBtns = this.getElementsByClassName("inner");
				for (let i = 0; i < innerArrowBtns.length; i++) {
					let arrowButton = innerArrowBtns[i];
					arrowButton.style = "display: inline-block";
				};
			});
			// Listen for mouse-out GridItems to hide inner-buttons
			gridItem.addEventListener("mouseout", function () {
				let innerArrowBtns = this.getElementsByClassName("inner");
				for (let i = 0; i < innerArrowBtns.length; i++) {
					let arrowButton = innerArrowBtns[i];
					arrowButton.style = "display: none";
				};
			});
		};
	});
	
</script> -->

<!-- <div id={id} class="section" style="grid-area: {gridArea} ;">
	<div class="up-arrow">
		{#if gridItem.gridArea.startRow !== 1}
			<ArrowButton {onClick} itemId={id} placing="inner" id="up" />
		{/if}
	</div>
	<slot />
	<div class="left-arrow">
		{#if gridItem.gridArea.startColumn !== 1}
			<ArrowButton {onClick} itemId={id} placing="inner" id="left" />
		{/if}
	</div>
	<div class="right-arrow">
		{#if gridItem.gridArea.endColumn !== columns + 1}
			<ArrowButton {onClick} itemId={id} placing="inner" id="right" />
		{/if}
	</div>
	<div class="down-arrow">
		{#if gridItem.gridArea.endRow !== rows + 1}
			<ArrowButton {onClick} itemId={id} placing="inner" id="down" />
		{/if}
	</div>
</div> -->

<!-- <style>
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
</style> -->
