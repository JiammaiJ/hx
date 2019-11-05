<template>
    <div>
        <span></span>
        <span>{{text}}</span>
        <span></span>
    </div>
</template>

<script>
    export default {
        name:'LineColor',
        data() {
            return {}
        },
        props:{
            text:{
                type:String,
                default:'gis'
            }
        },
        methods:{}
    }
</script>

<style lang="less" scoped>
    div{
        height:50px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        >span{
            flex:1;
        }
        >span:nth-child(2){
            font-size:22px;
            color:white;
        }
        >span:nth-child(1){
            height:3px;
            background:linear-gradient(90deg,#ffffff,#07079f);
        }
        >span:nth-child(3){
            height:3px;
            background:linear-gradient(90deg,#ffffff,#07079f);
        }
    }
</style>