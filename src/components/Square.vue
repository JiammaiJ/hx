<template>
    <div class="container">
        <ul class="box">
            <li class="front"></li>
            <li class="back"></li>
            <li class="left"></li>
            <li class="right"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
    .container{
        width:80px;
        height:80px;
        margin:0 auto;
        .box{
            position:relative;
            transform-style:preserve-3d;
            transform: rotateY(0deg);
            animation:5s rotate linear infinite;
            >li{
                position:absolute;
                left:0;
                top:0;
                width:80px;
                height:80px;
                background-color:aqua;
                background-size:cover;
            }
            .front{
                transform:translateZ(40px);
                background-image: url('/img/q1.png');
            }
            .back{
                transform:translateZ(-40px);
                background-image: url('/img/q2.png');
            }
            .left{
                transform: rotateY(90deg) translateZ(-40px);
                background-image: url('/img/q3.png');
            }
            .right{
                transform: rotateY(90deg) translateZ(40px);
                background-image: url('/img/q4.png');
            }
        }
    }
    @keyframes rotate {
        from{
            transform:rotateY(0deg);
        }
        to{
            transform:rotateY(360deg);
        }
    }
</style>