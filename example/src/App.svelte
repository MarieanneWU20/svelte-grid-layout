<script>
    import { Grid, Row, Column } from "svelte-layout-editor";
</script>

<main>
    <Grid>
        <Row>
            <Column height="1" width="4"><h1>HEADER</h1></Column>
        </Row>
        <Row>
            <Column height="3" width="1"><h3>MENU</h3></Column>
            <Column height="5" width="3"><h2>CONTENT</h2></Column>
        </Row>
        <Row>
            <Column height="1" width="4"><p>footer</p></Column>
        </Row>
    </Grid>
</main>
<!-- <main>
    <Grid>
        <Row>
            <Column height="1" width="7"><h1>TIMEBLOCKING WEEK 1</h1></Column>
        </Row>
        <Row>
            <Column height="1" width="1"><h3>Monday</h3></Column>
            <Column height="1" width="1"><h3>Tuesday</h3></Column>
            <Column height="1" width="1"><h3>Wednesday</h3></Column>
            <Column height="1" width="1"><h3>Thursday</h3></Column>
            <Column height="1" width="1"><h3>Friday</h3></Column>
            <Column height="1" width="1"><h3>Saturday</h3></Column>
            <Column height="1" width="1"><h3>Sunday</h3></Column>
        </Row>
        <Row>
            <Column height="2" width="1"><h5>AM</h5></Column>
            <Column height="2" width="1"><h5>AM</h5></Column>
            <Column height="2" width="1"><h5>AM</h5></Column>
            <Column height="2" width="1"><h5>AM</h5></Column>
            <Column height="2" width="1"><h5>AM</h5></Column>
            <Column height="2" width="1"><h5>AM</h5></Column>
            <Column height="2" width="1"><h5>AM</h5></Column>
        </Row>
        <Row>
            <Column height="2" width="1"><h5>PM</h5></Column>
            <Column height="2" width="1"><h5>PM</h5></Column>
            <Column height="2" width="1"><h5>PM</h5></Column>
            <Column height="2" width="1"><h5>PM</h5></Column>
            <Column height="2" width="1"><h5>PM</h5></Column>
            <Column height="2" width="1"><h5>PM</h5></Column>
            <Column height="2" width="1"><h5>PM</h5></Column>
        </Row>
    </Grid>
</main> -->

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
