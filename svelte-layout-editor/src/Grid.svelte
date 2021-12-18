<script>
	import { setContext } from "svelte";
	
	setContext("grid", {
		rowIndex: -1,
		columnIndex: 0,
		blocks: [] 
	});
 </script>

 <div class="editor">
	<div class="row">
	  	<div class="container">
			<slot ></slot>
	  	</div>
	</div>
 </div>

 <style>
	.editor {
	  width: 100%;
	  height: auto;
	}
	.row {
	  padding: 0 20px;
	}
	.container {
	  padding: 10px;
	  background-color: #edf1f7;
	  /* TODO: Remove border? It's not nice if Grid is nested inside of column... */
	  border: 1px solid #3d5f99;
	  min-height: 50vh;
	  display: grid;
	  grid-auto-columns: 1fr 1fr;
	  grid-auto-rows: 1fr 1fr;
	  gap: 0.6rem 0.6rem;
	}
	@media screen and (min-width: 480px) {
	  	.container {
		 padding: 15px;
		 gap: 0.8rem 0.8rem;
		 min-height: 75vh;
		}
	}
	@media screen and (min-width: 768px) {
	  	.container {
		 padding: 18px;
		 gap: 1rem 1rem;
		 min-height: 100vh;
		}
	}
 </style>
