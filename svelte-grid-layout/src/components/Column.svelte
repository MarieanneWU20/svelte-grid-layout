<script>
	import { getContext } from 'svelte';

	export let width;
	export let height;

	const grid = getContext("grid");

	const checkX = (startColumn, startRow, width) => {
		let run = true;
		while (run) {
			let endColumn = startColumn + width;
			let endRow = startRow+h+1;
			console.log('endColumn: ', endColumn,'endRow: ', endRow)
			run = false;
			for(let block of grid.blocks) {
				
				if ( startRow+1 > block.startRow && block.endRow > startRow ) {
						console.log('1')
						y = block.endRow - 1;
				};
			};
		};
		return startColumn;
	};

	let w = Number(width);
	let h = Number(height);
	let y = Number(grid.rowIndex);
	let x = checkX(Number(grid.columnIndex), y, w,h);
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
	<slot />
</div>

<style>
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