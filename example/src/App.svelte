
<script>
    import {Grid, Row, Column } from "svelte-layout-editor";
</script>

<main>
    <Grid>
        <Row height=1>
            <Column width=1><p>Test 1 från App</p></Column>
            <Column width=1><p>Test 2 från App</p></Column>
            <Column width=2><p>Test 3 från App</p></Column>
        </Row>
        <Row height=2>
            <Column width=2><p>Test 4 från App</p></Column>
            <Column width=1><p>Test 5 från App</p></Column>
            <Column width=1><p>Test 6 från App</p></Column>
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