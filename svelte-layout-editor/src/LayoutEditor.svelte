<script>
	import { onMount } from 'svelte';
    import Grid from './components/Grid.svelte';

	onMount( function() {
        let gridItems = document.getElementsByClassName("section");

        for (let i = 0; i < gridItems.length; i++) {
            const gridItem = gridItems[i];
            
            gridItem.addEventListener("mouseover", function() {
                //TODO: display arrows and listen for click
                console.log("mouseOVER", i + 1);
            });

            gridItem.addEventListener("mouseout", function() {
                //TODO: hide arrows
                console.log("mouseOUT", i + 1);
            });
        };
    });
</script>

<main>
	<!-- <UpArrow /> -->
    <Grid/>
	<!-- <DownArrow />
	<GridTest /> -->
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