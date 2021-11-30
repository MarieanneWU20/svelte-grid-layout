<script>
    let src = "images/rightarrow.svg";
</script>

<div class="right-arrow">
    
    <button ><img class="svg" {src} alt="" /></button>
</div>

<style>
.right-arrow {
    float: right;
    /*display: inline-flex;
    justify-content: space-between;
    align-self: center;
    margin: 0 20px 0 0;
    display: inline-block;*/
    position: absolute;
    left: 90%;
    padding-left: 10px;
    top: 90%;
}
@media screen and (min-width: 480px){
.right-arrow {
    left: 90%;
    top: 98%; 
   }
}

@media screen and (min-width: 768px){
.right-arrow {
    left: 98%;
    top: 122%;
   }
}
</style>