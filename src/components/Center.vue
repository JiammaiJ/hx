<template>
    <div class="center">
        <div 
            v-for="(item,index) in list"
            :key="index"
            @click="rotate(item)"
        >
            <transition>
                <div v-if="item.show" enter-active-class="animated rotateIn" leave-active-class=" animated rotateOut">
                    <div><img :src="`${publicPath}${item.src}`"></div>
                    <p>{{item.text}}</p>
                </div>
            </transition>
            <transition enter-active-class="animated rotateIn" leave-active-class=" animated rotateOut">
                <p v-if="!item.show">{{item.content}}</p>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Center',
        data() {
            return {
                publicPath:process.env.BASE_URL,
                list:[{show:true,src:'img/gisdt.png',text:'GIS地图',href:'#gisdt',content:'平台基于现代Web技术栈全新构建，兼容多种GIS标准,框架简便、高性能和可用性好。'},{show:true,src:'img/swjs.png',text:'三维技术',href:'#swjs',content:' 实现室外室内一体化、宏观微观一体化、空天/地表/地下一体化，赋能全空间的三维GIS应用。'},{show:true,src:'img/dsj.png',text:'大数据',href:'#dsj',content:'空间大数据的存储管理、空间分析、流数据处理与可视化等技术,致力于提供全面支持大数据的GIS基础软件与服务。'}],
                text:'',
                show:true
            }
        },
        methods:{
            rotate(item) {
                item.show=!item.show;
            }
        }
    }
</script>

<style scoped lang="less">
    .center{
        width:100%;
        height:auto;
        display:flex;
        justify-content: space-between;
        >div{
            width:30%;
            height:120px;
            position:relative;
            transform-style: preserve-3d;
            -webkit-transform-style: preserve-3d;
            >div:nth-child(1){
                overflow:hidden;
                background-color:#252930;
                img{
                    display:block;
                    width:100%;
                }
                p{
                    color:white;
                }
            }
            >p{
                position:absolute;
                left:0;
                top:0;
                text-align:center;
                width:100%;
                height:100%;
                background-color:#252930;
                color:white;
                // transform:rotateY(180deg);
                // -webkit-transform:rotateY(180deg);
                overflow:hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>