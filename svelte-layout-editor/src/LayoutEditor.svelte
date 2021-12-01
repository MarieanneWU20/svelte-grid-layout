<script>
    import Grid from "./components/Grid.svelte";
	//export let name;
	import UpArrow from "./components/UpArrow.svelte";
	import DownArrow from "./components/DownArrow.svelte";
	import GridTest from "./components/GridTest.svelte";
</script>

<main>
	<UpArrow />
    <Grid/>
	<DownArrow />
	<GridTest />
</main>

<style>
	main {
		width: 90%;
		text-align: center;
		padding: 1em;
		/*max-width: 240px;*/
		margin: 0 auto;
	}

	/*h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}*/

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>