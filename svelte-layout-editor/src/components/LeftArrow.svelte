<script>
   import ArrowButton from './ArrowButton.svelte';
</script>

<div class="left-arrow">
    <ArrowButton>
        <svg viewBox="0 0 256 256">
        <polyline
              fill="none" 
              stroke="#3d5f99" 
              stroke-width="20" 
              stroke-linejoin="round" 
              stroke-linecap="round" 
              points="184,16 72,128 184,240" 
        />
      </svg>
    </ArrowButton>
</div>

<style>
svg {
    width: 50px;
    height: 50px;
}  
.left-arrow {
    /*float: left;
    display: inline-flex;
    justify-content: start;
    align-self: center;
    margin: 25% 20px 0 0;
    display: inline-flex;*/
    position: absolute;
    left: 10px;
    top: 90%;
    color:#ccc;
}
@media screen and (min-width: 480px){
.left-arrow {
    left: 10px;
    top: 98%; 
   }
}
@media screen and (min-width: 768px){
.left-arrow {
    left: 10px;
    top: 122%;
   }
}
</style>