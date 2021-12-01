<script>
    import ArrowButton from './ArrowButton.svelte';
</script>

<div class="right-arrow">
    <ArrowButton>
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
    width: 50px;
    height: 50px;
    }   
    .right-arrow {
        float: right;
        /*display: inline-flex;
        justify-content: end;
        align-self: center;
        margin: 0 20px 0 0;
        display: inline-block;*/
        position: absolute;
        left: 90%;
        padding-left: 10px;
        top: 90%;
    }
    @media screen and (min-width: 480px) {
        .right-arrow {
            left: 90%;
            top: 98%;
        }
    }

    @media screen and (min-width: 768px) {
        .right-arrow {
            left: 98%;
            top: 122%;
        }
    }
</style>
