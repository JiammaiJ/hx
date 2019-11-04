<template>
    <div class="home">
        <div>
            <Header />
        </div>
        <div>
            <Banner :banner="homeBanner" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
    export default {
        name:'Home',
        data() {
            return {
                homeBanner:[
                    require('../../public/img/q6.png'),require('../../public/img/q7.png'),
                    require('../../public/img/q8.png'),require('../../public/img/q9.png')
                ]
            }
        },
        components:{
            Header,
            Banner,
            Footer
        },
        methods:{}
    }
</script>

<style lang="less" scoped>
    .home{
        >div:nth-cihld(1){
            position:fixed;
            left:0;
            top:0;
            width:100%;
            height:50px;
        }
        >div:nth-child(2){

        }
    }
</style>