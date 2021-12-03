<script>
    export let style='arrow-button';
    export let disabled = false;
</script>

<button on:click class={style} {disabled}> 
    <slot />
</button>

<style>
   .arrow-button { 
        border: none;
        background-color: #fff;
	    cursor: pointer;
    }
    .arrow-button:disabled {
        background-color: #333;
        cursor: auto;
    }
</style>

