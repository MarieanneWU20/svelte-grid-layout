<script>
	import { getContext } from 'svelte';
	
	import ArrowButton from "./ArrowButton.svelte";
	export let width;
	export let height;

	const grid = getContext("grid");

	const checkX = (startColumnIndex, rowIndex, width) => {
		let run = true;
		while (run) {
			let endColumnIndex = startColumnIndex + width;
			console.log("tre");
			run = false;
			checkBlock: for(let block of grid.blocks) {
				console.log("here");
				if (block.rowIndex == rowIndex) {
					console.log("there is a block on this row");
					
					if (endColumnIndex > block.startColumnIndex && startColumnIndex <= block.endColumnIndex ) {
						console.log("there is a block on this row and column");
						startColumnIndex++;
						run = true;
					}
				}
			}
		}
		return startColumnIndex;
	}

	export let name;
	let w = Number(width);
	let h = Number(height);
	let y = Number(grid.rowIndex);
	let x = checkX(Number(grid.columnIndex), y, w);
	const end = x+w;

	
	// while (grid.blocks.includes(block => block.rowIndex == y && block.startColumnIndex == x)) {
	// }

	grid.columnIndex = grid.columnIndex = end;

	if (h > 1) {
		for(let nextRow=1; nextRow<h; nextRow++) {
			const block = { 
				rowIndex: y+nextRow,
				startColumnIndex: x,
				endColumnIndex: x+w-1
			 }
			 grid.blocks.push(block);
		}
	}
	console.log(name || "col",x,y,w,h,"\tblocks", grid.blocks);

	//console.log('startRow: ',Number(y) + 1 ,' startColumn: ',Number(x) + 1, ' endRow: ', Number(y)+1+Number(height), ' endColumn: ', Number(x)+1+Number(width) );

</script>

<div class="section" style="grid-area: { `${Number(y) + 1}/${Number(x) + 1}/${Number(y)+1+Number(height)}/${Number(x)+1+Number(width)}` } ;">
	<slot>
	<div class="up-arrow">
		<ArrowButton index={y} placing="inner"  id="up" />
	</div>
	<p>COLUMN</p>
	<p>instruktioner</p>
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
    h1 {
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