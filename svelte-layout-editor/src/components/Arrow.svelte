<script>
    let upArrow;
    let leftArrow;
    let rightArrow;
    let downArrow;
  </script>
  
 
  {#if upArrow}
       <!--Up-arrow-->
      <svg class="inner" viewBox="0 0 256 256">
          <polyline
              fill="none" 
              stroke="#3d5f99"  
              stroke-width="20" 
              stroke-linejoin="round" 
              stroke-linecap="round" 
              points="16,184 128,72 240,184" 
          />
      </svg>
  {:else if leftArrow}
      <!--Left-arrow-->
      <svg class="inner" viewBox="0 0 256 256">
          <polyline
              fill="none"
              stroke="#3d5f99"
              stroke-width="20"
              stroke-linejoin="round"
              stroke-linecap="round"
              points="184,16 72,128 184,240"
          />
      </svg>
      {:else if rightArrow}
          <!--Right-arrow-->
          <svg class="inner" viewBox="0 0 256 256">
              <polyline
                  fill="none"
                  stroke="#3d5f99"
                  stroke-width="20"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  points="72,16 184,128 72,240"
              />
          </svg>
      {:else if downArrow}
         <!--Right-arrow-->
         <svg viewBox="0 0 256 256">
          <polyline
              fill="none"
              stroke="#3d5f99"
              stroke-width="20"
              stroke-linejoin="round"
              stroke-linecap="round"
              points="16,72 128,184 240,72"
          />
      </svg>
      {/if}
  
  <style>
  /*.inner{
      width: 25px;
      height: 25px;
  }
  .outer{
      width: 45px;
      height: 45px;
  }
   @media screen and (min-width: 768px) {
  .outer{
      width: 50px;
      height: 50px;
     }
  }*/
  </style>
      
      
  