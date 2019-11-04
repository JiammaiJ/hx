<template>
    <div>
        <header>
            <img src="../../public/img/logo.png">
            <p>成都弘信</p>
            <van-icon name="apps-o" @click="showPopup"/>
        </header>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {
                show:false
            }
        },
        methods:{
            showPopup() {
                this.show=true
            }
        }
    }
</script>

<style lang="less" scoped>
    header{
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding:0 20px;
        height:100%;
        background-color:#252b3a;
        >img{
            width:40px;
            height:40px;
        }
        >p{
            flex:1;
            font-size:22px;
            text-align:center;
            color:white;
        }
        >.van-icon{
            font-size:22px;
            color:white;
            font-weight:bold;
        }
    }
</style>