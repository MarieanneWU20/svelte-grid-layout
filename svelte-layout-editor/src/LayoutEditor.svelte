<script>
    import Grid from "./components/Grid.svelte";
    //TODO: import object from seperate file
    $: gridData = {
        rows: 3,
        columns: 3,
        gridItems: [
            {
                id: "r1c1",
                gridArea: {
                    startRow: 1,
                    startColumn: 1,
                    endRow: 2,
                    endColumn: 2,
                },
            },
           {
                id: "r1c2",
                gridArea: {
                    startRow: 1,
                    startColumn: 2,
                    endRow: 2,
                    endColumn: 3,
                },
            },
            {
                id: "r1c3",
                gridArea: {
                    startRow: 1,
                    startColumn: 3,
                    endRow: 2,
                    endColumn: 4,
                },
            },
            {
                id: "r2c1",
                gridArea: {
                    startRow: 2,
                    startColumn: 1,
                    endRow: 3,
                    endColumn: 2,
                },
            },
            {
                id: "r2c2",
                gridArea: {
                    startRow: 2,
                    startColumn: 2,
                    endRow: 3,
                    endColumn: 3,
                },
            },
            {
                id: "r2c3",
                gridArea: {
                    startRow: 2,
                    startColumn: 3,
                    endRow: 3,
                    endColumn: 4,
                },
            },
            {
                id: "r3c1",
                gridArea: {
                    startRow: 3,
                    startColumn: 1,
                    endRow: 4,
                    endColumn: 2,
                },
            },
            {
                id: "r3c2",
                gridArea: {
                    startRow: 3,
                    startColumn: 2,
                    endRow: 4,
                    endColumn: 3,
                },
            },
            {
                id: "r3c3",
                gridArea: {
                    startRow: 3,
                    startColumn: 3,
                    endRow: 4,
                    endColumn: 4,
                },
            },
        ],
    };

    function handleClick(id, placing, itemId) {
        if (placing === "outer") {
            if (id === "down") {
                addRow();
            } else if (id === "up" && gridData.rows > 3) {
                removeRow();
            } else if (id === "right") {
                addColumn();
            } else if (id === "left" && gridData.columns > 3) {
                removeColumn();
            }
        } else {
            console.log('Click on: ', itemId+id) 
        }
    }

   
    //TODO: import function from seperate file
    function addRow() {
        if (gridData.rows !== 7) {
        for (let i = 0; i < gridData.columns; i++) {
            let newGridItem = {
                id: "",
                gridArea: {
                    startRow: gridData.rows + 1,
                    startColumn: i + 1,
                    endRow: gridData.rows + 2,
                    endColumn: i + 2,
                },
            };
            newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
            gridData.gridItems.push(newGridItem);
        }
        gridData.rows++;
        console.log("AFTER down: ", gridData);
    }
    }
    //TODO: import function from seperate file
    function removeRow() {
        let rowToDelete = gridData.rows;
        let deleteIndex = gridData.gridItems.findIndex(
            (e) => e.gridArea.startRow === rowToDelete
        );

        gridData.gridItems.splice(deleteIndex, gridData.columns);
        gridData.rows--;
        console.log("AFTER up: ", gridData);
    }
    //TODO: import function from seperate file
    function addColumn() {
        if ((window.matchMedia('(min-width: 300px)').matches) && (window.matchMedia('(max-width: 600px)').matches) && gridData.columns !==3) {
        for (let i = 0; i < gridData.rows; i++) {
            let newGridItem = {
                id: "",
                gridArea: {
                    startRow: i + 1,
                    startColumn: gridData.columns + 1,
                    endRow: i + 2,
                    endColumn: gridData.columns + 2,
                },
            };
            newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
            gridData.gridItems.push(newGridItem);
        }
        gridData.columns++;
        console.log("AFTER right: ", gridData);
        } 
        else if ((window.matchMedia('(min-width: 601px)').matches) && (window.matchMedia('(max-width: 768px)').matches) && gridData.columns !==4) {
        for (let i = 0; i < gridData.rows; i++) {
            let newGridItem = {
                id: "",
                gridArea: {
                    startRow: i + 1,
                    startColumn: gridData.columns + 1,
                    endRow: i + 2,
                    endColumn: gridData.columns + 2,
                },
            };
            newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
            gridData.gridItems.push(newGridItem);
        }
        gridData.columns++;
        console.log("AFTER right: ", gridData);
        } 
        else if ((window.matchMedia('(min-width: 769px)').matches) && (window.matchMedia('(max-width: 1024px)').matches) && gridData.columns !==6){
        for (let i = 0; i < gridData.rows; i++) {
            let newGridItem = {
                id: "",
                gridArea: {
                    startRow: i + 1,
                    startColumn: gridData.columns + 1,
                    endRow: i + 2,
                    endColumn: gridData.columns + 2,
                },
            };
            newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
            gridData.gridItems.push(newGridItem);
        }
        gridData.columns++;
        console.log("AFTER right: ", gridData);
        } 
        else if ((window.matchMedia('(min-width: 1025px)').matches) && (window.matchMedia('(max-width: 1200px)').matches) && gridData.columns !==8){
        for (let i = 0; i < gridData.rows; i++) {
            let newGridItem = {
                id: "",
                gridArea: {
                    startRow: i + 1,
                    startColumn: gridData.columns + 1,
                    endRow: i + 2,
                    endColumn: gridData.columns + 2,
                },
            };
            newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
            gridData.gridItems.push(newGridItem);
        }
        gridData.columns++;
        console.log("AFTER right: ", gridData);
        } 
        else if ((window.matchMedia('(min-width: 1201px)').matches) && (window.matchMedia('(max-width: 1600px)').matches) && gridData.columns !==10){
        for (let i = 0; i < gridData.rows; i++) {
            let newGridItem = {
                id: "",
                gridArea: {
                    startRow: i + 1,
                    startColumn: gridData.columns + 1,
                    endRow: i + 2,
                    endColumn: gridData.columns + 2,
                },
            };
            newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
            gridData.gridItems.push(newGridItem);
        }
        gridData.columns++;
        console.log("AFTER right: ", gridData);
        } 
        else if ((window.matchMedia('(min-width: 1601px)').matches) && (window.matchMedia('(max-width: 1900px)').matches) && gridData.columns !==12){
        for (let i = 0; i < gridData.rows; i++) {
            let newGridItem = {
                id: "",
                gridArea: {
                    startRow: i + 1,
                    startColumn: gridData.columns + 1,
                    endRow: i + 2,
                    endColumn: gridData.columns + 2,
                },
            };
            newGridItem.id = `r${newGridItem.gridArea.startRow}c${newGridItem.gridArea.startColumn}`;
            gridData.gridItems.push(newGridItem);
        }
        gridData.columns++;
        console.log("AFTER right: ", gridData);
        } 
    }
    
    //TODO: import function from seperate file
    function removeColumn() {
        let columnToDelete = gridData.columns;
        for (let i = 0; i < gridData.rows; i++) {
            let start = gridData.gridItems.findIndex(
                (element) => element.gridArea.startColumn === columnToDelete
            );
            gridData.gridItems.splice(start, 1);
        }
        gridData.columns--;
        console.log("AFTER left: ", gridData);
    }
</script>

<main>
    <Grid onClick={handleClick} bind:gridData />
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
