<script>
    import ArrowButton from "./ArrowButton.svelte";
    export let gridArea;
</script>

<style>
    div {
      width: auto;
      border-radius: 20px;
      padding: 5px;
      background-color: #FFFFFF;
      text-align: center;
      vertical-align: middle;
  }
  @media screen and (min-width: 480px){
  div{
      border-radius: 25px;  
      padding: 10px;
    }
  }
  @media screen and (min-width: 768px){
   div{
       border-radius: 30px;  
       padding: 10px;
    }
  }
</style>

<div style="grid-area: {gridArea};">
    <slot/>
    <!-- <ArrowButton/> -->
</div>