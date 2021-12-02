<script>
    import UpArrow from './UpArrow.svelte';
    import LeftArrow from './LeftArrow.svelte';
    import RightArrow from './RightArrow.svelte';
    import DownArrow from './DownArrow.svelte';
  </script>
  
 <div class="test-editor">
  <UpArrow />
  <div class="row">
      <LeftArrow />
      <div class="container">
          <div class="section" style="grid-area: 1 / 1 / 2 / 2;">1</div>
          <div class="section" style="grid-area: 1 / 2 / 2 / 3;">2</div>
          <div class="section" style="grid-area: 2 / 1 / 3 / 2;">3</div>
          <div class="section" style="grid-area: 2 / 2 / 3 / 3;">4</div>
      </div>
      <RightArrow />
    </div>
  <DownArrow />
</div>

  <style>
  .test-editor{
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
      color:#062d70;
  }
  .container div {
      width: auto;
      border-radius: 20px;
      padding: 5px;
      background-color: #FFFFFF;
      text-align: center;
      vertical-align: middle;
  }
  @media screen and (min-width: 480px){
  .container{
      padding: 20px;   
      gap: 1rem 1rem;
      height: 75vh;  
   }
   .container div{
      border-radius: 25px;  
      padding: 10px;
    }
  }
  @media screen and (min-width: 768px){
   .container{
      height: 100vh;  
   }
   .container div{
       border-radius: 30px;  
       padding: 10px;
    }
  }
  </style>