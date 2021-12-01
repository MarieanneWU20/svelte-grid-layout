<script>
    import GridRow from "./GridRow.svelte";
</script>

<style>
    div {
        border: black solid 1px;
        border-radius: 5%;
        /* margin: 1%;
        flex-grow: 1; */
        color: whitesmoke;
        background-color: black;
        padding: 0.4em;
    }
</style>

<div>
    <h1>Hello from Grid!</h1>
    <GridRow/>
    <GridRow/>
</div>
