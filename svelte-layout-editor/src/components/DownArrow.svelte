<script>
    import ArrowButton from './ArrowButton.svelte';
</script>

<div class="down-arrow">
    <ArrowButton>
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
    </ArrowButton>  
</div>

<style>
svg {
    width: 50px;
    height: 50px;
}  
.down-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 30px 0;
}
</style>