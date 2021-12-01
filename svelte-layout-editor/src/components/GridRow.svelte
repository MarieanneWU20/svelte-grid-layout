<script>
    import GridColumn from "./GridColumn.svelte";
    import GridItem from "./GridItem.svelte";

</script>

<style>
    div {
    display: flex;
    border: black solid 1px;
    border-radius: 5%;
    background-color: whitesmoke;
    color: black;
    margin: 1%;
    padding: 0.4em;
    }
</style>
<div>
    <h2>Hello from GridRow!</h2>
    <GridColumn/>
    <GridColumn/>
</div>