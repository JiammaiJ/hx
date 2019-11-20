<template>
    <div class="home">
        <div>
            <Header />
        </div>
        <div>
            <Banner :banner="homeBanner" />
            <LineColor text="核心技术"/>
            <!-- <van-grid :border="false" :column-num="3">
                <van-grid-item
                    v-for="(item,index) in dataA"
                    :key="index"
                >
                    <a>
                        <van-image :src="item.src" />
                        {{item.text}}
                    </a>
                </van-grid-item>
            </van-grid> -->
            <Center />
            <LineColor text="视频演示"/>
            <VideoList />
            <LineColor text="选择我们"/>
            <Grid />
        </div>
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import LineColor   from '@/components/LineColor.vue';
import Square from '@/components/Square.vue';
import VideoList from '@/components/VideoList.vue';
import Center from '@/components/Center.vue';
import Grid from '@/components/Grid.vue';
    export default {
        name:'Home',
        data() {
            return {
                publicPath:process.env.BASE_URL,
                homeBanner:[
                    require('../../public/img/q6.png'),require('../../public/img/q7.png'),
                    require('../../public/img/q8.png'),require('../../public/img/q9.png')
                ],
                dataA:[{src:'img/gisdt.png',text:'GIS地图',href:'#gisdt'},{src:'img/swjs.png',text:'三维技术',href:'#swjs'},{src:'img/dsj.png',text:'大数据',href:'#dsj'}]
            }
        },
        components:{
            Header,
            Banner,
            Footer,
            LineColor,
            Square,
            VideoList,
            Center,
            Grid
        },
        methods:{
            scroll(e,href) {
                console.log(e);
                let top=document.querySelector(href).offsetTop;
                console.log(top);
                window.scrollTo({
                    left:0,
                    top:top,
                    behavior:'smooth'
                })
            }
        }
    }
</script>

<style lang="less" >
.van-grid-item__content{
    background-color:#252930;
}
a{
    color:white;
    
}
.footer{
    z-index:5555;
}
    .home{
        background-color:#252930;
        >div:nth-cihld(1){
            // position:fixed;
            // left:0;
            // top:0;
            width:100%;
            height:50px;
        }
        >div:nth-child(2){
            padding-bottom:60px;
        }
    }
</style>