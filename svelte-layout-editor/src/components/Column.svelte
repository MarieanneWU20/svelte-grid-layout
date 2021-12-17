<script>
	import { getContext } from 'svelte';
	import ArrowButton from "./ArrowButton.svelte";

	export let width;
	export let height;

	const grid = getContext("grid");

	const checkX = (startColumn, startRow, width) => {
		let run = true;
		while (run) {
			let endColumn = startColumn + width;
			// console.log('endColumn: ', endColumn)
			run = false;
			for(let block of grid.blocks) {
				if (block.endRow > startRow && block.startColumn > startColumn) {
					y++;
				};
				
			};
		};
		return startColumn;
	};

	let w = Number(width);
	let h = Number(height);
	let y = Number(grid.rowIndex);
	let x = checkX(Number(grid.columnIndex), y, w);
	const end = x+w;

	grid.columnIndex = grid.columnIndex = end;

	if (h > 1) {
		for(let nextRow=1; nextRow<h; nextRow++) {
			const block = { 
				startRow: y+nextRow,
				endRow: y+nextRow+h,
				startColumn: x,
				endColumn: x+w-1
			 }
			 grid.blocks.push(block);
		}
	}
	console.log("grid-area",y + 1,x + 1,y + h + 1,x + w + 1);

</script>

<div class="section" style="grid-area: { `${y + 1}/${x + 1}/${y + 1 + h}/${x + 1 + w}` } ;">
	<slot>
	<div class="up-arrow">
		<ArrowButton index={y} placing="inner"  id="up" />
	</div>
	<p>Column without content</p>
	<div class="left-arrow">
		<ArrowButton index={x} placing="inner" id="left" />
	</div>
	<div class="right-arrow">
		<ArrowButton index={x} placing="inner" id="right" />
	</div>
	<div class="down-arrow">
		<ArrowButton index={y} placing="inner" id="down" />
	</div>
	</slot>
</div>

<style>
	p {
        color: darkred;
    }
    .section {
		 width: auto;
		 height: auto;
		 border-radius: 20px;
		 background-color: #ffffff;
		 text-align: center;
		 vertical-align: middle;
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