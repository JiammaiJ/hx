<template>
    <div class="grid">
        <!-- <div>
            <div
                v-for="(item,index) in list"
                :key="index"
                @click="r(item,index)"
                :class="{'actived':actived===index?true:false}"
            ><img :src="item.src"></div>
            <span class="center">why?</span>
        </div> -->
        <div 
            v-for="(item,index) in list"
            :key="index"
        >
            <div><img :src="`${publicPath}${item.src}`"></div>
            <p>{{item.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Grid',
    data() {
        return {
            publicPath:process.env.BASE_URL,
            list:[
                {
                    text:'弘信科技公司是一家创新型高新技术企业，公司致力于GIS地理信息产业、Web可视化技术领域的发展和技术普惠。',
                    src:'img/ys-1.png'
                },
                {
                    text:'公司面向政府、部队、企业、学校等行业用户，结合行业特点和客户的实际需求，可为客户量身定制应用软件，提供可视化领域全方位的行业解决方案。',
                    src:'img/ys-2.png'
                },
                {
                    text:'我们是一个专注于界面设计、前端开发和体验优化的综合性可视化研发团队。 ',
                    src:'img/ys-3.png'
                },
                {
                    text: '我们开放平台所有源代码的方式，没有任何限制、可多次复用，目前在全国来说也是较少的本着如此开源、开放态度的GIS厂商。',
                    src:'img/ys-4.png'
                },
                {
                    text:'功能上友商拥有的功能我们基本都具备，并且我们示例更加全面，价格更优惠，性价比高。',
                    src:'img/ys-5.png'
                },
                {
                    text:'平台产品应用时间久,服务了全国不同地区、不同行业的大量客户，平台成熟稳定。',
                    src:'img/ys-6.png'
                },
                {
                    text:'公司重视客户服务，本着服务至上的原则，提供线上、电话等多种方式的技术支持服务。',
                    src:'img/ys-7.png'
                }, 
                {
                    text:'我们拥有自主研发的弘信GIS平台，平台功能全面，提供了完整的解决方案，拥有详细教程、功能示例、API文档、教学视频等资料，提供了模板项目，可敏捷开发复用。',
                    src:'img/ys-8.png'
                } 
            ],
        }
    },
    methods:{
        
    }
}
</script>

<style scoped lang="less">
    .grid{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-wrap:wrap;
        >div{
            width:50%;
            height:230px;
            >div:nth-child(1){
                width:100%;
                height:63px;
                img{
                    display:block;
                    width:50px;
                    margin:0 auto;
                }
            }
            p{
                text-indent:2em;
                color:white;
                font-size:14px;
                padding:0 20px;
            }
        }
    }
    
    // .grid{
    //     width:100%;
    //     height:400px;
        
    //     >div:nth-child(1){
    //         width:200px;
    //         height:200px;
    //         margin:0 auto;
    //         position:relative;
    //         overflow:hidden;
    //         border-radius:50%;
    //         border:1px solid white;
    //         transition:1.5s;
    //         >.center{
    //             position:absolute;
    //             left:50%;
    //             top:50%;
    //             transform:translate(-50%,-50%);
    //             width:80px;
    //             height:80px;
    //             background-color:white;
    //             border-radius:50%;
    //             text-align:center;
    //             line-height:80px;
    //             font-size:20px;
    //             font-weight:bold;
    //         }
    //         >div{
    //             position:absolute;
    //             left:50%;
    //             top:50%;
    //             width:100px;
    //             height:100px;
    //             transform-origin:0 0;
    //             border-left:1px solid white;
    //             overflow:hidden;
    //             >img{
    //                 position:absolute;
    //                 left:66%;
    //                 top:30%;
    //                 display:block;
    //                 width:40px;
    //                 transform:translate(-50%,-50%);
    //             }
    //         }
    //         >div:nth-child(1){ 
    //             transform:rotateZ(45deg);
    //         }
    //         >div:nth-child(2){
                
    //             transform:rotateZ(90deg);
    //         }
    //         >div:nth-child(3){
                
    //             transform:rotateZ(135deg)
    //         }
    //         >div:nth-child(4){
                
    //             transform:rotateZ(180deg);
    //         }
    //         >div:nth-child(5){
                
    //             transform:rotateZ(225deg);
    //         }
    //         >div:nth-child(6){
                
    //             transform:rotateZ(270deg);
    //         }
    //         >div:nth-child(7){
                
    //             transform:rotateZ(315deg);
    //         }
    //         >div:nth-child(8){
                
    //             transform:rotateZ(360deg);
    //         }
    //     }
    // }
</style>