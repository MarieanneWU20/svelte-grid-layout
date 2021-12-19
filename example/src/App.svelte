<script>
    import { Grid, Row, Column } from "svelte-layout-editor";
</script>

<main>
    <Grid>
        <Row>
            <Column height="1" width="4"><h1>HEADER</h1></Column>
        </Row>
        <Row>
            <Column height="2" width="1"><h3>MENU</h3></Column>
            <Column height="5" width="3"><h2>CONTENT</h2></Column>    
        </Row>
        <Row>
            <Column height="1" width="4"><p>footer</p></Column>
        </Row>
    </Grid>
</main>

<style>
    main {
        width: auto;
    }
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
