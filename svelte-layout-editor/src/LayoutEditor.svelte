<script>
    import Grid from "./components/Grid.svelte";
</script>

<main>
	<Grid/>
</main>

<style>
	main {
		width: 90%;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>