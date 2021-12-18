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
            <Column height="5" width="3"><h2>CONTENT</h2>
                <!-- TODO: Remove? I just wanted to illustrate that it's totaly work to nest Grids... :D -->
                <Grid>
                    <Row>
                        <Column height="1" width="1"></Column>
                        <Column height="1" width="1"></Column>
                    </Row>
                    <Row>
                        <Column height="1" width="1"></Column>
                        <Column height="1" width="1"></Column>
                    </Row>
                </Grid>
            </Column>
        </Row>
        <Row>
            <Column height="1" width="4"><p>footer</p></Column>
        </Row>
    </Grid>
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
