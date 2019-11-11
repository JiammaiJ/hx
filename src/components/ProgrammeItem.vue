<template>
    <div class="container">
        
    </div>
</template>

<script>
    export default {
        name:'ProgrammeItem',
        data() {
            return {
                item:this.$route.params
            }
        },
        mounted() {
        },
        methods:{}
    }
</script>

<style scoped lang="less">
    .container{
        position:fixed;
        left:0;
        top:0;
        bottom:0;
        right:0;
        // background-image:url('../../public/img/pro2.jpg');
        // background-size:cover;
    }
</style>