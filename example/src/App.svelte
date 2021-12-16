
<script>
    import {Grid, Row, Column } from "svelte-layout-editor";
</script>

<main>
    <Grid>
        <Row>
            <p slot="column">Test 1 från App</p>
            <!-- <Column height=1 width=1><p>Test 2 från App</p></Column>
            <Column height=1 width=1><p>Test 3 från App</p></Column> -->
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