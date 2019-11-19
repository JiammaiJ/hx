<template>
    <div class="footer">
        <el-menu
            :default-active="activeIndex"
            @select="handleSelect"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#252B3A"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="2">
                <template slot="title">产品</template>
                <el-menu-item index="product">三维地球</el-menu-item>
            </el-submenu>
            <el-menu-item index="programme" >解决方案</el-menu-item>
            <el-menu-item index="about" >关于我们</el-menu-item>
            <el-submenu index="3">
                <template slot="title">演示</template>
                <el-menu-item index="a">三维地球</el-menu-item>
                <el-menu-item index="b">全景漫游</el-menu-item>
            </el-submenu>
            <el-menu-item index="shop">产品购买</el-menu-item>
    </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex:''
            }
        },
        methods:{
            handleSelect(key,keypath){
                if(key==='a'){
                    window.open('http://202.98.97.241:8081/opw/cesium-docs/examples.html#baselayer');
                }else if(key==='b'){
                    window.open('http://202.98.97.241:8081/opw/krpano-example');
                }else{
                    this.$router.push('/'+key)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .footer{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:45px;
    }
</style>