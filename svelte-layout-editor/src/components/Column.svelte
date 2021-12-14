<script>
    // export let gridArea;
</script>
<!-- style="grid-area: { gridArea } ;" -->
<div class="section"  >
    <h1>COLUMN</h1>
    <slot ></slot>
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
</style>