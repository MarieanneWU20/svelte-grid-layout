<script>
   import ArrowButton from './ArrowButton.svelte';
</script>

<div class="up-arrow">
    <ArrowButton><svg viewBox="0 0 256 256">
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
    width: 50px;
    height: 50px;
    }   
.up-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 10px 0;
}
</style>