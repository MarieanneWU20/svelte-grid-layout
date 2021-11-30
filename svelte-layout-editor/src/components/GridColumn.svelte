<script>
    import GridItem from "./GridItem.svelte";
</script>

<style>
    div {
        /* display: flex; */
        flex-grow: 1;
        border: gray solid 1px;
        border-radius: 5%;
        background-color: gray;
        color: white;
        margin: 1%;
    }
</style>

<div>
    <h2>Hello from GridColumn!</h2>
    <GridItem/>
</div>
