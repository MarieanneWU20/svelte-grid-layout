<script>
   import ArrowButton from './ArrowButton.svelte';
   
   // funkar inte 
   let buttonDisabled = true;
   //const dispatch = createEventDispatcher();

   const changeHandler = () => {
        console.log('Up-arrow selected');
    };
</script>

<div class="up-arrow">
    <ArrowButton on:click={changeHandler} {buttonDisabled}>
        <svg viewBox="0 0 256 256">
        <polyline
              fill="none" 
              stroke="#3d5f99"  
              stroke-width="20" 
              stroke-linejoin="round" 
              stroke-linecap="round" 
              points="16,184 128,72 240,184" 
        />
      </svg>
    </ArrowButton>
</div>

<style>
svg {
    width: 40px;
    height: 40px;
    }   
.up-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 10px 0;
}
@media screen and (min-width: 768px) {
    svg {
        width: 50px;
        height: 50px;
    }  
}

</style>