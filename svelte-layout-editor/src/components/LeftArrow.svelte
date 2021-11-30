<script>
    let src = "images/leftarrow.svg";
</script>

<div class="left-arrow">
    <button><img class="svg" {src} alt="" /></button>
</div>

<style>
.left-arrow {
    /*float: left;
    display: inline-flex;
    justify-content: space-between;
    align-self: center;
    margin: 25% 20px 0 0;
    display: inline-flex;*/
    position: absolute;
    left: 10px;
    top: 90%;
    color:#ccc;
}
@media screen and (min-width: 480px){
.left-arrow {
    left: 10px;
    top: 98%; 
   }
}
@media screen and (min-width: 768px){
.left-arrow {
    left: 10px;
    top: 122%;
   }
}
</style>