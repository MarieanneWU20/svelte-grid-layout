<script>
    import { onMount } from "svelte";
    import { decreaseRowHeight, increaseRowHeight } from "../store/gridDataStore";
    import Arrow from "./Arrow.svelte";

    export let placing;
    export let index;
    export let id;

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
        if (placing === "outer") {
            if (id === "up") {
                console.log('Remove row');
            }
            else if (id === "down") {
                console.log('Add row');
            }
            else if (id === "left") {
                console.log('Remove column');
            }
            else if (id === "right") {
                console.log('Add column');
                
            }
        }
        else {
            if (id === "up") {
                decreaseRowHeight(index);
            }
            else if (id === "down") {
                increaseRowHeight(index);
            }
            else if (id === "left") {
                console.log('Decrease column width');
            }
            else if (id === "right") {
                console.log('Increase column width');
            }
        }
    }
</script>

<button on:click={handleClick} class={placing} > 
    <Arrow {placing} id={id} />
</button>

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