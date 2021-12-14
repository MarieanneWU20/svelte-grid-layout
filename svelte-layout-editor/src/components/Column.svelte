<script>
    import ArrowButton from "./ArrowButton.svelte";
    // export let rowIndex;
    // export let columnIndex;
</script>

<div class="section">
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