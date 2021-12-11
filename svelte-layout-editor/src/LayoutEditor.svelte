<script>
    import Grid from './components/Grid.svelte';
    
    // TODO: import object from seperate file

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
    }
</script>

<main>
    <Grid bind:gridData={gridData} />
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
