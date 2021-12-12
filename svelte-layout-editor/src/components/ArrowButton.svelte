<script>
    import { onMount } from "svelte";
    import Arrow from "./Arrow.svelte";

    export let placing;
    export let id;
    export let itemId;
    export let onClick;

    onMount(function () {

        let gridItems = document.getElementsByClassName("section");

        for (let i = 0; i < gridItems.length; i++) {
            const gridItem = gridItems[i];
            // Listen for mouse-over GridItems to show inner-buttons
            gridItem.addEventListener("mouseover", function () {
                let innerArrowBtns = this.getElementsByClassName("inner");
                for (let i = 0; i < innerArrowBtns.length; i++) {
                    let arrowButton = innerArrowBtns[i];
                    arrowButton.style = "display: inline-block";
                };
            });
            // Listen for mouse-out GridItems to hide inner-buttons
            gridItem.addEventListener("mouseout", function () {
                let innerArrowBtns = this.getElementsByClassName("inner");
                for (let i = 0; i < innerArrowBtns.length; i++) {
                    let arrowButton = innerArrowBtns[i];
                    arrowButton.style = "display: none";
                };
            });
        };
    });

    function handleClick() {
        onClick(id, placing, itemId)
    }
</script>

{#if id === "up"}
    <button on:click={handleClick} class={placing}> 
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