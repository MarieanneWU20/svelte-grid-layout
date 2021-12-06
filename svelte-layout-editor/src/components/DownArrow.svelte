<!--<script>
    import { createEventDispatcher } from 'svelte';
    import ArrowButton from "./ArrowButton.svelte";

    const dispatch = createEventDispatcher();

    const onArrowClick = (gridId) => {
        console.log("Down-arrow selected");
        dispatch('down-arrow', gridId); 
    };
</script>

<div class="down-arrow">
    <ArrowButton on:click={onArrowClick}>
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
        width: 40px;
        height: 40px;
    }
    .down-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 30px 0;
    }
    @media screen and (min-width: 768px) {
        svg {
            width: 50px;
            height: 50px;
        }
    }
</style>-->
