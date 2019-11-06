<template>
    <div class="b">
        <div><div><h1>1</h1><h1>1</h1><h1>1</h1><h1>1</h1><h1>1</h1></div></div>
        <div><h1>1</h1><h1>1</h1><h1>1</h1><h1>1</h1><h1>1</h1></div>
        <span></span>
    </div>
</template>

<script>
    export default {
        name:'Product'
    }
</script>

<style scoped lang="less">
    .b{
        position:fixed;
        left:0;
        top:0;
        width:400px;
        height:400px;
        border-radius: 50%;
        overflow: hidden;
        >div{
            transform-origin:0 0;
            border-radius: 0 0 200px 0;
        }
        >div:nth-child(1){
            width:200px;
            height:200px;
            background:yellow;
            position:absolute;
            left:50%;
            top:50%;
            transform:skewY(45deg);
            >div{
                transform-origin: center center 0;
                transform: skewY(-45deg) rotate(-22.5deg) translate(-24px, -69px);
            }
        }
        >div:nth-child(2){
            width:200px;
            height:200px;
            background:blue;
            position:absolute;
            left:50%;
            top:50%;
            transform:rotate(45deg) skewY(45deg);
        }
        >span{
            position:absolute;
            left:50%;
            top:50%;
            width:100px;
            height:100px;
            transform:translate(-50%,-50%);
            background-color:green;
            border-radius:50%;
        }
    }
</style>