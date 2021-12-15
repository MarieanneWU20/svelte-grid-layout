<script>
	import ArrowButton from "./ArrowButton.svelte";
    export let width;
	export let height;
	export let rowIndex;
	export let columnIndex;
	console.log('startRow: ',Number(rowIndex) + 1 ,' startColumn: ',Number(columnIndex) + 1, ' endRow: ', Number(rowIndex)+1+Number(height), ' endColumn: ', Number(columnIndex)+1+Number(width) );

</script>

<div class="section" style="grid-area: { `${Number(rowIndex) + 1}/${Number(columnIndex) + 1}/${Number(rowIndex)+1+Number(height)}/${Number(columnIndex)+1+Number(width)}` } ;">
	<div class="up-arrow">
		<!-- index={rowIndex} -->
		<ArrowButton placing="inner"  id="up" />
	</div>
	<slot><h1>COLUMN</h1></slot>
	<div class="left-arrow">
		<!-- index={columnIndex}  -->
		<ArrowButton placing="inner" id="left" />
	</div>
	<div class="right-arrow">
		<!-- index={columnIndex}  -->
		<ArrowButton placing="inner" id="right" />
	</div>
	<div class="down-arrow">
		<!-- index={rowIndex} -->
		<ArrowButton placing="inner" id="down" />
	</div>
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