<script>
    import ArrowButton from "./ArrowButton.svelte";

    const changeHandler = () => {
        console.log("Left-arrow selected");
    };
</script>

<div class="left-arrow">
    <ArrowButton on:click={changeHandler}>
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
        width: 40px;
        height: 40px;
    }
    .left-arrow {
        position: absolute;
        left: -18px;
        padding-left: 10px;
        top: 34%;
        color: #ccc;
    }
    @media screen and (min-width: 480px) {
        .left-arrow {
            left: -20px;
            top: 48%;
        }
    }
    @media screen and (min-width: 768px) {
        .left-arrow {
            left: -20px;
            top: 61%;
        }
        svg {
            width: 50px;
            height: 50px;
        }
    }
</style>
