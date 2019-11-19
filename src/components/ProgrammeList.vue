<template>
    <div class="container">
        <h1>智慧城市三维可视化</h1>
        <div>
            <div
                v-for="(item,index) in list"
                :key="index"
                @click="goItem(item)"
            >
                <div>
                    <div><img :src="`${publicPath}${item.src}`"></div>
                    <p>{{item.tit}}</p>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ProgrammeList',
        data() {
            return{
                publicPath:process.env.BASE_URL,
                list:[
                    {
                        tit:'智慧旅游三维可视化',
                        text:'Smart Travel',
                        src:'img/q1.png',
                        des:['多源异构实时数据一张图呈现','语音视频实时在线传输','基于移动信令及位置数据的游客群体大数据分析'],
                        func:['游客消费及行为习惯分析','游客及车辆流量统计','三维模型辅助规划布局','景区内部流程管理','景区应急指挥调度及安全疏导路线规划']
                    },
                    {
                        tit:'智慧环保大数据解决方案',
                        text:'Intelligent Environmental',
                        src:'img/q2.png',
                        des:['区域环保数据的聚合展示','区域环保业务的数字化线上办理','企业数据与监測数据的融合展示','治理措施的全过程监督'],
                        func:['提供基于地理信息空间的可视化工业园区、企业、水系环保监测及数据管理服务，系统实现了环保监測手段与治理服务的有机结合，为政府、企业提供了以环保持续监測与排放合规为目的的高效应用平台。']
                    },
                    {
                        tit:'地质灾害应急指挥平台',
                        text:'EMERGENCY COMMAND',
                        src:'img/q3.png',
                        des:['多源异构实时数据一张图呈现','语音视频实时在线传输','基于移动信令及位置数据的游客群体大数据分析'],
                        func:['灾险情上报，告警提示及信息审批，灾情处置','应急处置任务创建，专家现场调查，隐患点信息填报','任务归档，任务进度详请，应急会商','短信群发，大数据预警，应急调度']
                    },
                    {
                        tit:'地质灾害监测预警平台',
                        text:'GEOLOGICAL HAZARDS',
                        src:'img/q4.png',
                        des:['支持接入主流物联网设备'],
                        func:['监测项目可视化 监测设备管理 实时视频管理 设备预告管理 故障一键报修 实景三维可视化']
                    },
                    {
                        tit:'BIM＋GIS可视化平台',
                        text:'BIM＋GIS',
                        src:'img/q5.jpg',
                        des:['地理信息系统上加载BIM数据','建筑模型建造过程模拟','BIM建筑模型部件分解','BIM模型內部漫游','BIM数据的交互操作','BM与空间数据精确匹配','构件属性查询','管网数据可视化展现与交互','BIM模型剖切'],
                        func:[]
                    },
                    {
                        tit:'智慧市政',
                        text:'SMART CITY',
                        src:'img/q6.png',
                        des:['高精度模型融合技术','三维空间模型交互技术','矩阵化数据融合技术','模块化管理能力叠加技术'],
                        func:['街道地下管网液位、流速、设备异常、设备类型统计','危险源监测','路灯异常监測','三维呈现管网地下分布情况','井盖监测器在安装位置准确呈现反应对应设备基础信息、图片、当前状态及数据']
                    },
                    {
                        tit:'智慧灌溉',
                        text:'SMART IRRIGATION',
                        src:'img/q7.png',
                        des:['可视化灌区管理','基于融合通信技术的设备远程调度与控制','配水与调度的融合管理'],
                        func:['平台实现灌溉水系的全流域数字化管理能力，展示了灌区水系的聚合信息，系统可将放水阐、放水洞等灌溉设施设备进行远程可视化管理，并能通过融合通讯技术将不同设备接入平台进行远程调度与控制，并能将流量流速水质等关键信息进行融合展示。']
                    },
                    {
                        tit:'智慧水务',
                        text:'SMART WATER',
                        src:'img/q8.png',
                        des:['可视化大坝、水库管理','基于先进物联网通信技术的远程调度与控制','应急调度及人员管理'],
                        func:['平台将水库、大坝等监控对象通过三维可视化平台进行聚合展示，能实时监控现场情况，可查看监测点（水库、河道、水渠等）信息并进行人员调度和警情处理。']
                    },
                    {
                        tit:'食品安全追溯云平台',
                        text:'FOOD SAFETY',
                        src:'img/q9.png',
                        des:['落实主体责任，规范经营行为','强调企业自律自查制度','监管关口前移、风险防控','预防为主、高效监管','来源可査、去向可追、责任可究'],
                        func:['实现食品供应商、原料、生产、加工、检测、包装、仓储、销售、运输及消费过程的全生命周期记录与追淵，同时，建立对应产品来源可追，流向可查询，风险可防范，责任可追究系统。']
                    }
                ]
            }
        },
        methods:{
            goItem(item){
                this.$router.push({
                    name:'programmeItem',
                    params:item
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        width:100%;
        height:100%;
        >h1{
            color:white;
            margin-bottom:10px;
        }
        >div{
            display:flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap:wrap;
            >div{
                width:40%;
                >div:nth-child(1){
                    width:100%;
                    >div:nth-child(1){
                        width:100%;
                        img{
                            display:block;
                            width:100%;
                        }
                    }
                    >p{
                        color:white;
                        font-size:16px;
                        white-space:nowrap;
                        text-overflow: ellipsis;
                        width:100%;
                        overflow:hidden;
                    }
                }
            }
        }
    }
</style>