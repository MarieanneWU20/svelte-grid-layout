<script>
    import GridColumn from "./GridColumn.svelte";
    import GridItem from "./GridItem.svelte";
</script>

<style>
    div {
    display: flex;
    border: green solid 1px;
    border-radius: 5%;
    background-color: whitesmoke;
    color: green;
    margin: 1%;
    }
</style>
<div>
    <h2>Hello from GridRow!</h2>
    <GridColumn/>
    <GridColumn/>
    <!-- <div>
        <GridItem/>
        <GridItem/>
        <GridItem/>
        <GridItem/>
    </div>
    <GridColumn/>
    <div>
        <GridItem/>
        <GridItem/>
        <GridItem/>
        <GridItem/>
    </div> -->
</div>