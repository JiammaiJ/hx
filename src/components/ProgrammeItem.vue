<template>
    <div class="container">
        <h1>{{test.tit}}</h1>
        <div class="imgbox">
            <img :src="test.src">
        </div>
        <div class="describe">
            <van-tabs type="card">
                <van-tab title="亮点">
                    <div class="info">
                        <h1>亮点</h1>
                        <Square />
                        <p
                            v-for="(item,index) in test.des"
                            :key="index"
                        >
                            {{item}}
                        </p>
                    </div>
                </van-tab>
                <van-tab title="功能">
                    <div class="info">
                        <h1>功能</h1>
                        <p
                            v-for="(item,index) in test.func"
                            :key="index"
                        >
                            {{item}}
                        </p>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Square from '@/components/Square'
    export default {
        name:'ProgrammeItem',
        data() {
            return {
                item:this.$route.params,
                test:{
                        tit:'智慧旅游三维可视化',
                        text:'Smart Travel',
                        src:'/img/q1.png',
                        des:['多源异构实时数据一张图呈现','语音视频实时在线传输','基于移动信令及位置数据的游客群体大数据分析'],
                        func:['游客消费及行为习惯分析','游客及车辆流量统计','三维模型辅助规划布局','景区内部流程管理','景区应急指挥调度及安全疏导路线规划']
                }
            }
        },
        components:{
            Square
        },
        mounted() {
            console.log(this.item);
        },
        methods:{}
    }
</script>

<style  lang="less">
.van-tabs__nav--card{
    border:1px solid #ffffff;
    color:#ffffff;
    margin:0;
}
.van-tabs__nav--card .van-tab.van-tab--active{
    background-color:black;
}
.van-tabs__nav--card .van-tab{
    color:black;
}
    .container{
        position:fixed;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background-image:url('../../public/img/prog3.jpg');
        background-size:cover;
        >h1{
            color:white;
            margin-top:10px;
        }
        >.imgbox{
            width:90%;
            height:auto;
            margin:0 auto;
            margin-top:10px;
            >img{
                display:block;
                width:100%;     
            }
        }
        >.describe{
            width:90%;
            height:100px;
            margin:0 auto;
            padding-top:10px;
        }
    }
    .info{
        width:100%;
        background-color:rgba(255,255,255,.5);
        margin-top:10px;
        border-radius:5px;
        >h1{
            color:white;
        }
        >p{
            color:white;
            font-size:15px;
        }
    }
</style>