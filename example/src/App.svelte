
<script>
    import {Grid, Row, Column } from "svelte-layout-editor";
</script>

<main>
    <Grid>
        <Row>
            <Column height=1 width=1><p>Test 1 från App</p></Column>
            <Column height=1 width=1><p>Test 2 från App</p></Column>
            <Column height=1 width=1><p>Test 3 från App</p></Column>
        </Row>
        <Row>
            <Column height=1 width=1><p>Test 4 från App</p></Column>
            <Column height=1 width=1><p>Test 5 från App</p></Column>
            <Column height=1 width=1><p>Test 6 från App</p></Column>
        </Row>
        <Row>
            <Column height=1 width=1><p>Test 7 från App</p></Column>
            <Column height=1 width=1><p>Test 8 från App</p></Column>
            <Column height=1 width=1><p>Test 9 från App</p></Column>
        </Row>
        <!-- <Row height=1></Row> -->
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