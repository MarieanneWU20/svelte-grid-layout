<script>
    // import UpArrow from './UpArrow.svelte';
	// import LeftArrow from './LeftArrow.svelte';
	// import RightArrow from './RightArrow.svelte';
	// import DownArrow from './DownArrow.svelte';
    import Arrow from "./Arrow.svelte";

    export let placing;
    export let id;
    export let itemId;
    export let onClick;

    function handleClick() {
        onClick(id, placing, itemId)
    }
</script>

{#if id === "up"}
    <button on:click={handleClick}  class={placing}> 
        <Arrow placing={placing} id={id} />
    </button>
{:else if id === "left"}
    <button on:click={handleClick} class={placing} > 
        <Arrow placing={placing} id={id} />
    </button>
{:else if id === "down"}
    <button on:click={handleClick} class={placing} > 
        <Arrow placing={placing} id={id}/>
    </button>
{:else if id === "right"}
    <button on:click={handleClick} class={placing} > 
        <Arrow placing={placing} id={id} />
    </button>
{/if}

<style>
    button { 
        display: inline-block;
        border: none;
        background-color: #fff;
	    cursor: pointer;
    }
</style>
    
    
    
    
    
    
    
    
 <!--<script>
   export let style='arrow-button';
   export let disabled = false;>
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
</style>-->

