<script>
    import { Grid, InnerGrid, Row, Column } from "svelte-layout-editor";
</script>

<main>
    <Grid>
        <Row>
            <Column height="1" width="4"><h1 class="header">header</h1></Column>
        </Row>
        <Row>
            <Column height="2" width="1"><h3 class="menu-header">menu</h3></Column>
            <Column height="4" width="3">
              
                <InnerGrid>
                    <Row>    
                        <Column height="1" width="2"><h2 class="content-header">content</h2></Column>
                    </Row>
                    <Row>
                        <Column height="2" width="1"><h3 class="sub-heading">more content</h3></Column>
                        <Column height="2" width="1"><h3 class="sub-heading">more content</h3></Column>
                    </Row>   
                </InnerGrid>   
            </Column>    
        </Row>
        <Row>
            <Column height="1" width="4"><h4 class="footer">footer</h4></Column>
        </Row>
    </Grid>
</main>

<style>
    .header,
    .footer,
    .content-header{
        text-transform: uppercase;
    }
    .menu-header{
        text-align: left;
        padding: 10px 20px;
        text-transform: uppercase;
    }
    .sub-heading{
        text-align: left;
        padding: 10px 20px;
        text-transform: uppercase;
    }
    .footer{
        font-size: 1rem;
    }
    main {
        width: auto;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
