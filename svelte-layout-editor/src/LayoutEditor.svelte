<script>
    import Grid from './components/Grid.svelte';
    // import GridData from './stores/gridData';
    // //TODO: import object from seperate file
    
    // export let data;

    // $: gridData = data || GridData;

</script>

<main>
    <Grid />
</main>

<style>
	main {
		width: 90%;
		text-align: center;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>