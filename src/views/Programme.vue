<template>
    <div class="programme">
        <div>
            <h1>多行业的解决方案</h1>
        </div>
        <div>
            <div>
                <div>
                    <img src="../../public/img/e.png">
                    <img src="../../public/img/g.png">
                </div>
                <div>
                    <img src="../../public/img/l2.png">
                </div>
            </div>
            <h1>
                解决各类二三维数据的存储、展示、分析、应用等问题，支持针对特定业务场景的功能定制，打造您的专属Web三维GIS解决方案。 已经在智慧城市三维可视化等众多应用场景中实施了大量项目，深的客户好评。
            </h1>
        </div>
        <div>
            <h1>2123132</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Programme',
        data() {
            return{
            }
        },
        methods:{}
    }
</script>

<style scoped lang="less">
    .programme{
        background-color:#252930;
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        z-index:555;
        >div:nth-child(1){
            width:100%;
            height:100%;
            z-index:555;
            >h1{
                color:white;
                width:40px;
                margin-left:83%;
                padding-top:100px;
            }
        }
        >div:nth-child(1):before{
            content:'';
            position:fixed;
            left:0;
            top:0;
            bottom:0;
            right:0;
            background-image:url('../../public/img/pro2.jpg');
            background-size:cover;
            z-index:-1;
            animation:filter 10s linear infinite;
        }
        >div:nth-child(2){
            width:100%;
            height:100%;
            background-color:#0b1014;
            position:relative;
            // display:flex;
            // flex-wrap:wrap;
            // display:-webkit-box;
             
            >div:nth-child(1){
                width:100%;
                height:375px;
                >div:nth-child(1){
                    position:absolute;
                    left:0;
                    top:0;
                    width:200px;
                    margin:0 auto;
                    >img{
                        position:absolute;
                        left:43%;
                        top:77px;
                        width:100%;
                    }
                    >img:nth-child(1){
                        animation:rotate1 linear 30s infinite;
                    }
                    >img:nth-child(2){
                        width:110%;
                        left:37%;
                        top:64px;
                        animation:rotate2 linear 60s infinite;
                    }
                }
                >div:nth-child(2){
                    position:absolute;
                    left:0;
                    top:0;
                    >img{
                        position:absolute;
                        left:0;
                        top:0;
                        width:375px;
                    }    
                }
            }
            h1{
                // -webkit-box-flex:1;
                // flex:1;
                // flex:1;
                height:calc(100% - 375px);
                color:white;
                text-align:left;
                text-indent:2em;
                font-size:16px;
                padding:20px;
            }
        }
        >div:nth-child(3){
            width:100%;
            height:100%;
            background-color:white;
        }
    }
@keyframes rotate1 {
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}
@keyframes rotate2 {
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}
</style>