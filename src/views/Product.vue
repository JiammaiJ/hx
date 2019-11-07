<template>
    <div class="product">
        <div>
            <h1>三维地球<p>,</p>让数据说话</h1>
        </div>
        <div>
            <div 
                v-for="(item,index) in list"
                :key="index"
            >
                <div><img :src="item.src"></div>
                <div>
                    <h3>{{item.tit1}},{{item.tit2}}</h3>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
        <div>
            <h1>纵深精耕，功能强大</h1>
            <button>了解详情</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Product',
        data() {
            return{
                list:[
                    {
                        tit1:'基于开源',
                        tit2:'源码可控',
                        text:'无加密混淆的源代码，安全全程可控，可放心使用。 全面对接集成了 常用的地图库或开源库，避免用户的重复学习和成本投入。',
                        src:'/img/virtue_1.png'
                    },{
                        tit1:'设计合理',
                        tit2:'上手容易',
                        text:'平台使用一目了然，容易学习，无论是 API 还是文档，都具有很强的可读性、自学习性。 平台的内部构建适度灵活，适量重复。不过度设计，只预留必要的可扩展接口。不追求代码的零重复，更追求组件的合理解耦。 技术工程师远程支持， 大量的示例演示，组件式开发， 完善的售后保障。',
                        src:'/img/virtue_2.png'
                    },
                    {
                        tit1:'“零”客户端',
                        tit2:'多端支持',
                        text:'是针对Web端的轻量级3D GIS展示端，用户可以不加载任何插件，在浏览器中对高精度的可交互的三维地形场景进行浏览、分析等操作。 支持跨平台和跨浏览器，实现了三维展示、交互的“零”客户端。',
                        src:'/img/virtue_3.png'
                    },
                    {
                        tit1:'敏捷开发',
                        tit2:'可复用',
                        text:'框架对地图的初始化进行了封装，通过传入json配置信息按配置内容对地图进行初始化，大部分项目中，地图初始化都是类似的， 不同的是一些相关参数和图层不同，我们使用时不用关注内部实现，只用按项目需求修改或使用不同的配置信息即可。',
                        src:'/img/virtue_4.png'
                    },
                    {
                        tit1:'功能完善',
                        tit2:'完整解决方案',
                        text:'包含GIS系统常用的基础功能，涵盖200+功能示例，并可扩展。 提供MarsV可视化开发中心网站，包含全面的Cesium学习资料，完整的框架API、示例、说明文档、开发手册。 提供可以直接使用的基础项目，优秀的模块化设计的架构，可节省大量时间、精力。',
                        src:'/img/virtue_5.png'
                    },
                ]
            }
        },
        methods:{}
    }
</script>

<style scoped lang="less">
    .product{
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
            // background-image: url('../../public/img/pro1.jpeg');
            // background-size:cover;
            // background-attachment: fixed;
            // -webkit-background-size:cover;
            // -webkit-background-attachment: fixed; 
            z-index:555;
            >h1{
                color:white;
                width:40px;
                margin:0 auto;
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
            background-image:url('../../public/img/pro1.jpeg');
            background-size:cover;
            z-index:-1;
            animation:filter 10s linear infinite;
        }
        >div:nth-child(2){
            background-color:white;
            >div{
                padding:20px;
                display:flex;
                align-items: center;
                justify-content: center;
                >div:nth-child(1){
                    width:100px;
                    height:auto;
                    >img{
                        display:block;
                        width:100%;
                    }
                }
                >div:nth-child(2){
                    margin-left:10px;
                    flex:1;
                }
            }
        }
        >div:nth-child(3){
            width:100%;
            height:100%;
            >h1{
                color:white;
                padding-top:200px;
            }
            >button{
                display:block;
                width:100px;
                height:40px;
                border:none;
                margin:0 auto;
                border-radius:20px;
                margin-top:30px;
                background:linear-gradient(white,orange);
            }
        }
    }
@keyframes filter {
    from{
        filter:hue-rotate(0deg);
    }
    to{
        filter:hue-rotate(360deg);
    }
}
</style>