<script>
	import { onMount } from 'svelte';
    import Grid from './components/Grid.svelte';

    $: gridData = {
        rows: 3,
        columns: 3,
        gridItems:[
            {
                id: "r1c1",
                gridArea:{
                    startRow: 1,
                    startColumn: 1,
                    endRow: 2,
                    endColumn: 2
                }
            },{
                id: "r1c2",
                gridArea:{
                    startRow: 1,
                    startColumn: 2,
                    endRow: 2,
                    endColumn: 3
                }
            },{
                id: "r1c3",
                gridArea:{
                    startRow: 1,
                    startColumn: 3,
                    endRow: 2,
                    endColumn: 4
                }
            },{
                id: "r2c1",
                gridArea:{
                    startRow: 2,
                    startColumn: 1,
                    endRow: 3,
                    endColumn: 2
                }
            },{
                id: "r2c2",
                gridArea:{
                    startRow: 2,
                    startColumn: 2,
                    endRow: 3,
                    endColumn: 3
                }
            },{
                id: "r2c3",
                gridArea:{
                    startRow: 2,
                    startColumn: 3,
                    endRow: 3,
                    endColumn: 4
                }
            },{
                id: "r3c1",
                gridArea:{
                    startRow: 3,
                    startColumn: 1,
                    endRow: 4,
                    endColumn: 2
                }
            },{
                id: "r3c2",
                gridArea:{
                    startRow: 3,
                    startColumn: 2,
                    endRow: 4,
                    endColumn: 3
                }
            },{
                id: "r3c3",
                gridArea:{
                    startRow: 3,
                    startColumn: 3,
                    endRow: 4,
                    endColumn: 4
                }
            }
        ]
    };
	onMount( function() {
        console.log(gridData);
        //TODO: move to GridItem
        let gridItems = document.getElementsByClassName("section");

        for (let i = 0; i < gridItems.length; i++) {
            const gridItem = gridItems[i];
            
            gridItem.addEventListener("mouseover", function() {
                // display arrows and listen for click
                console.log("mouseOVER", i + 1);
            });

            gridItem.addEventListener("mouseout", function() {
                //hide arrows
                console.log("mouseOUT", i + 1);
            });
        };
    });//TODO: move to GridItem

// listening on:click on ArrowButton for upcomming event
    // const addColumn = (e) => {
    //     console.log('right', e.detail);
    //     //const itemId = e.detail
    // };

    // const addRow = (e) => {
    //     console.log('down', e.detail);
    //     //const gridId = e.detail
    // };
    function handleClick() {
        console.log('Click');
    }

</script>

<main>
    <!-- on:right-arrow={addColumn} on:down-arrow={addRow} -->
    <Grid onClick={handleClick} bind:gridData={gridData}  />
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