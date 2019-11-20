<template>
    <div>
        <div class="vlist">
            <div v-for="(item,index) in list"
                :key="index"
                @click="videoPlay(item)"
            >
                <div>
                    <img :src="`${publicPath}${item.img}`">
                    <span>{{item.tit}}</span>
                </div>
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="video" v-if="show">
            <Video :src="videoSrc" controls :poster="videoPoster"></Video>
            <van-icon name="cross" @click="closeVideo" />
        </div>
        <van-overlay :show="show" />
    </div>
</template>

<script>
    export default {
        name:'VideoList',
        data(){
            return{
                list:[
                    {img:'img/hx01.jpg',videoSrc:'media/hx01.mp4',tit:'自主知识产权的GIS系统',text:'自主知识产权的GIS平台，支持所有OGC标准。动态发图，矢量切片，渲染速度快，可以对实景三维模型进行单体化、人工矿坑分析、模型裁剪、可视域分析等。'},
                    {img:'img/hx02.jpg',videoSrc:'media/hx02.mp4',tit:'基于三维WebGIS的多源异构数据整合技术',text:'对数据量大、结构多样化、数据离散、质量参差不齐的各类数据，进行统一的整合、管理，最终以可视化的方式展示在三维WebGIS平台。'},
                    {img:'img/hx03.jpg',videoSrc:'media/hx03.mp4',tit:'基于三维WebGIS的地表和地下一体化技术',text:'通过地质勘探、工程设计的原始资料，生成地下岩层、地下管网等三维模型，可进行岩层分布分析、钻孔辅助分析、地下管网铺设及辅助维修等。'},
                    {img:'img/hx04.jpg',videoSrc:'media/hx04.mp4',tit:'基于三维WebGIS的高精度模型融合技术',text:'高效渲染倾斜摄影三维实景模型的基础上，融合smart3D等高精度模型的无缝叠加，实现三维模型上的电子沙盘，方便快捷、直观精准地辅助设计、规划等工作。'},
                    {img:'img/hx05.jpg',videoSrc:'media/hx05.mp4',tit:'基于实时数据通信传输的软件平台融合技术',text:'将各种实时通讯技术融合于三维WebGIS平台，在一个平台上实现与手机端进行视频通话、语音通话、手机上报、专业监测设备数据实时上传展现、查看实时监控视频等。'},
                    {img:'img/hx06.jpg',videoSrc:'media/hx06.mp4',tit:'基于WebGIS的TB级倾斜摄影模型秒级加载技术',text:'TB级数据量大小的实景三维模型，也可在平台实现一键服务发布、快速服务调用、web端高效渲染。'}
                ],
                show:false,
                videoSrc:'',
                videoPoster:'',
                publicPath:process.env.BASE_URL
            }
        },
        methods:{
            videoPlay(item){
                this.show=true;
                this.videoSrc=this.publicPath+item.videoSrc;
                this.videoPoster=this.publicPath+item.img;
            },
            closeVideo(){
                this.show=false;
            }
        }
    }
</script>

<style scoped lang="less">
    .vlist{
        width:100%;
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
        >div{
            width:40%;
            margin-bottom:10px;
            box-shadow:0 0 10px white;
            >div:nth-child(1){
                position:relative;
                img{
                    display:block;
                    width:100%;
                }
                span{
                    position:absolute;
                    left:0;
                    bottom:0;
                    width:80%;
                    margin:0 auto;
                    color:black;
                    overflow:hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap;
                    color:white;
                    font-size:14px;
                }
            }
            >p{
                width:100%;
                text-align:left;
                color:white;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-indent:1em;
                overflow:hidden;
                font-size:16px;
            }
        }
    }
    .video{
        position:fixed;
        left:0;
        top:50%;
        right:0;
        transform:translateY(-50%);
        z-index:5555;
        >video{
           width:100%;
        }
        .van-icon{
            position:absolute;
            right:0;
            top:0;
            font-size:25px;
            color:white;
            font-weight:bolder;
        }
    }
</style>