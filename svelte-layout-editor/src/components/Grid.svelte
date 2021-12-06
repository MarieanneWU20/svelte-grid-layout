<script>
  import UpArrow from './UpArrow.svelte';
  import LeftArrow from './LeftArrow.svelte';
  import RightArrow from './RightArrow.svelte';
  import DownArrow from './DownArrow.svelte';
  import GridItem from "./GridItem.svelte";
</script>

<div class="test-editor">
  <UpArrow /> 
  <div class="row">
    <LeftArrow />
    <div class="container">
      <GridItem gridArea="1 / 1 / 2 / 2">1</GridItem>
      <GridItem gridArea="1 / 2 / 2 / 3">2</GridItem>
      <GridItem gridArea="2 / 1 / 3 / 2">3</GridItem>
      <GridItem gridArea="2 / 2 / 3 / 3">4</GridItem>
    </div>
    <RightArrow on:right-arrow/>
  </div>
  <DownArrow on:down-arrow />
</div>

<style>
  .test-editor {
    width: 100%;
    height: 90%;
  }
  .row {
    padding: 0 20px;
  }
  .container {
    padding: 10px;
    background-color: #edf1f7;
    border: 1px solid #3d5f99;
    height: 50vh;
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    gap: 0.6rem 0.6rem;
  }
  @media screen and (min-width: 480px) {
    .container {
      padding: 20px;
      gap: 1rem 1rem;
      height: 75vh;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      height: 100vh;
    }
  }
</style>
