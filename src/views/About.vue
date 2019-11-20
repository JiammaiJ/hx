<template>
    <div class="about">
        <div>
            <img src="../../public/img/compony1.jpg" />
            <p>成都弘信科技股份有限公司成立于2009年，坐落于四川省高新技术园区——武侯新城，拥有软硬件设施完备的现代化办公环境，是西南地区综合排名前列的智慧城市融合解决方案和数据运营服务商。公司致力于行业信息化项目的规划设计，软件研发，实施建设，运营服务，拥有多项自主软件系统，通过了ISO9001质量管理体系等国际国内认证。公司秉承“互联网+”运营理念，一直深耕ICT信息化建设市场，构建起完整的ICT服务价值链，现已成功搭建智慧环保、智慧旅游、智慧国土等综合性信息产品服务平台，逐步成长为西南地区有较高市场占有率和知名度的高新技术企业。2016年7月22日公司在全国中小企业股份转让系统正式挂牌，证券简称：弘信科技，股票代码：838063 ，标志着公司正式登陆资本市场。未来，公司将始终坚持 “ 方正、高效、活力、共赢 ”的核心价值，积极顺应“智慧中国、智慧西部”的产业化趋势，强化自主创新，提升核心竞争力，立志做行业领域的佼佼者。</p>
        </div>
        <div class="text">
            <h1>企业风采</h1>
            <div>
                <span></span>
                <span class="center"></span>
                <span></span>
            </div>
        </div>
        <div>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item, index) in swipeimg" :key="index">
                    <div class="banner">
                        <img :src="`${publicPath}${item.src}`" />
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="text">
            <h1>公司荣誉</h1>
            <div>
                <span></span>
                <span class="center"></span>
                <span></span>
            </div>
        </div>
        <div class="honor">
            <div>
                <img @click="show" src="../../public/img/h1.jpg" />
            </div>
            <div>
                <img @click="show" src="../../public/img/h2.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'About',
        data() {
            return {
                publicPath:process.env.BASE_URL,
                swipeimg:[
                    {src:'img/c1.jpg'},{src:'img/c2.png'},{src:'img/c3.jpg'},{src:'img/c4.jpg'},{src:'img/c5.jpg'},{src:'img/c6.png'}
                ]
            }
        },
        methods:{
            show() {
                this.ImagePreview({
                    images: [
                        `${this.publicPath}img/h1.jpg`,
                        `${this.publicPath}img/h2.jpg`,
                        `${this.publicPath}img/h3.jpg`,
                        `${this.publicPath}img/h4.jpg`,
                        `${this.publicPath}img/h5.jpg`,
                        `${this.publicPath}img/h6.jpg`,
                        `${this.publicPath}img/h7.jpg`,
                        `${this.publicPath}img/h8.jpg`,
                        `${this.publicPath}img/h9.jpg`,
                        `${this.publicPath}img/h10.jpg`,
                        `${this.publicPath}img/h11.jpg`,
                        `${this.publicPath}img/h12.jpg`,
                    ],
                    startPosition: 0,
                    onClose() {
                        // do something
                    },
                    lazyLoad:true
                });
            }
        },
    }
</script>

<style scoped lang="less">
    .about{
        >div:nth-child(1){
            >img{
                display:block;
                width:100%;
            }
            >p{
                font-size:14px;
                text-indent:2em;
                padding: 20px;
                text-align:left;
            }
        }
        >div.text{
            >div{
                display:flex;
                width:100%;
                justify-content: center;
                span{
                    width:50px;
                    height:5px;
                    background-color:#ccc;
                    margin:0 5px;
                }
                span.center{
                    background-color:#353e53;
                }
            }
        }
        >div:nth-child(3){
            .banner{
                width:100%;
                >img{
                    display:block;
                    width:100%;
                }
            }
        }
        .honor{
            display:flex;
            justify-content: space-around;
            >div{
                width:45%;
                >img{
                    display:block;
                    width:100%;
                    height:auto;
                }
            }
        }
    }
</style>