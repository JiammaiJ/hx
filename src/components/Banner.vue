<template>
    <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item
                v-for="(item,index) in banner"
                :key="index"
            >
                <img :src="item">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        data() {
            return{}
        },
        props:{
            banner:{
                type:Array,
                default:() => {
                    return [require('../../public/img/q6.png')]
                }
            }
        },
        methods:{}
    }
</script>

<style lang="less" scoped>
    .banner{
        width:100%;
        height:auto;
        img{
            display:block;
            width:100%;
            border-radius:20px;
        }
    }
</style>