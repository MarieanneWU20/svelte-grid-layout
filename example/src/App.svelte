
<script>
    import {LayoutEditor, LayoutItem } from "svelte-layout-editor";
</script>

<h1>Cool App</h1>
<main>
    <LayoutEditor pics={[
        ["https://gillas.nu/wp-content/uploads/2016/06/roliga-bilder-om-datorn-tar-en-bild-efter-tre-felaktiga-inloggningsforsok-01.jpg", "https://gillas.nu/wp-content/uploads/2016/06/roliga-bilder-om-datorn-tar-en-bild-efter-tre-felaktiga-inloggningsforsok-01.jpg"],
        ["https://gillas.nu/wp-content/uploads/2016/06/roliga-bilder-om-datorn-tar-en-bild-efter-tre-felaktiga-inloggningsforsok-01.jpg"],
        ["https://gillas.nu/wp-content/uploads/2016/06/roliga-bilder-om-datorn-tar-en-bild-efter-tre-felaktiga-inloggningsforsok-01.jpg"]
        ]} />
    <LayoutEditor pics={{
        "r0c1": "test",
        "r1c0": "test2",
    }} />

    <Grid>
        <Row>
            <Column><p>Test1</p></Column>
            <Column><p>Test2</p></Column>
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