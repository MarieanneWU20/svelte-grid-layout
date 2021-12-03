<script>
    import ArrowButton from "./ArrowButton.svelte";

    const changeHandler = () => {
        console.log("Right-arrow selected");
    };
</script>

<div class="right-arrow">
    <ArrowButton on:click={changeHandler}>
        <svg viewBox="0 0 256 256">
            <polyline
                fill="none"
                stroke="#3d5f99"
                stroke-width="20"
                stroke-linejoin="round"
                stroke-linecap="round"
                points="72,16 184,128 72,240"
            />
        </svg>
    </ArrowButton>
</div>

<style>
    svg {
        width: 40px;
        height: 40px;
    }
    .right-arrow {
        float: right;
        position: absolute;
        left: 90%;
        padding-right: 20px;
        top: 34%;
    }
    @media screen and (min-width: 480px) {
        .right-arrow {
            left: 92%;
            top: 48%;
        }
    }
    @media screen and (min-width: 768px) {
        .right-arrow {
            left: 94%;
            top: 61%;
        }
        svg {
            width: 50px;
            height: 50px;
        }
    }
</style>
