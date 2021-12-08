<script>
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
    .inner {
        display:none;
    }
</style>