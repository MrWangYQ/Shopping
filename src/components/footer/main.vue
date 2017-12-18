<template>
    <div class="main-box" ref='mainBox' @scroll="scrolldoc">
        <div class="header">
            <head-box></head-box>
        </div>
        <div class="scroll-box" ref='updatascroll'>
            <div class="banner">
                <swiper :options='SwiperOptionBanner'>
                    <swiper-slide>
                        <div><img src="../../assets/image/banner/banner1.png"></div>       
                    </swiper-slide>
                    <swiper-slide>
                        <div><img src="../../assets/image/banner/home.png"></div>       
                    </swiper-slide>
                    <swiper-slide>
                        <div><img src="../../assets/image/banner/video.png"></div>       
                    </swiper-slide>
                    <swiper-slide>
                        <div><img src="../../assets/image/banner/video717.png"></div>       
                    </swiper-slide>
                    <swiper-slide>
                        <div><img src="../../assets/image/banner/banner_activite.jpg"></div>       
                    </swiper-slide>
                </swiper>
            </div>
            <div class="list">
                <ul class="list-ul">
                    <li>
                        <img src="../../assets/image/nav1.png">
                        <small>家乡味道</small>
                    </li>
                    <li>
                        <img src="../../assets/image/nav2.png">
                        <small>进口食品</small>
                    </li>
                    <li>
                        <img src="../../assets/image/nav3.png">
                        <small>牛奶乳品</small>
                    </li>
                    <li>
                        <img src="../../assets/image/nav4.png">
                        <small>休闲零食</small>
                    </li>
                    <li>
                        <img src="../../assets/image/nav5.png">
                        <small>生鲜果蔬</small>
                    </li>
                    <li>
                        <img src="../../assets/image/nav6.png">
                        <small>米面粮油</small>
                    </li>
                    <li>
                        <img src="../../assets/image/nav7.png">
                        <small>调味调料</small>
                    </li>
                    <li>
                        <img src="../../assets/image/nav8.png">
                        <small>酒水饮料</small>
                    </li>
                </ul>
            </div>
            <!-- 商城动态 -->
            <div class="advertise">
                <span>商城动态</span>
                <div class="advertise-banner">
                    <swiper :options='SwiperOption'>
                        <swiper-slide>
                            <div>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</div>       
                        </swiper-slide>
                        <swiper-slide>
                            <div>717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！</div>       
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="preferential">
                <div class="preferential-left">
                    <img src="../../assets/image/todayimg.png">
                    <span>天天特惠</span>
                    <small>每天有惊喜</small>
                </div>
                <p class='preferential-right'>
                    <span>更多</span>
                    <i class="icon iconfont icon-xiangyoujiantou"></i>
                </p>
            </div>
            <div class="coupon">
                <div class="coupon-left">
                    <img src="../../assets/image/home1.png">
                </div>
                <div class="coupon-right">
                    <img src="../../assets/image/ruwei.png">
                    <img src="../../assets/image/ruwei.png">
                </div>
            </div>
            <section class="homelandBox">
                <div class="homeflav">
                    <span>家乡味道</span>
                    <p><small>更多</small><i class="icon iconfont icon-xiangyoujiantou"></i></p>
                </div>
                <div class="recommendList">
                    <product-box :productlist='productlist'></product-box>
                </div>
            </section>
            <div class="remind">{{showText}}</div>
        </div>
    </div>
</template>
<script>
    import headBox from '@/views/header';
    import ProductBox from '@/components/MainContent/Product/Product'
    export default {
        data () {
            return  {
                userScrolling: true,
                showText: '正在拉去数据~~~',
                channel_id: 2,
                productlist: [],
                ClientHeight: document.documentElement.clientHeight,
                stopscroll: true,
                SwiperOptionBanner: {
                    notNextTick: true,
                    autoplay: true,
                    loop: true,
                    delay: 1000
                },
                SwiperOption: {
                    notNextTick: true,
                    loop: true,
                    autoplay: true,
                    delay: 500,
                    direction : 'vertical'
                }
            }
        },
        components: {
            productBox: ProductBox,
            headBox
        },
        created () {
            this.goodsList();
        },
        watch: {
            channel_id () {
                this.goodsList();
            }
        },
        methods: {
            goodsList () {
                this.$http.post('/mall/index/getGoodsChannel', {channel_id: this.channel_id}).then(res=> {
                    this.productlist = this.productlist.concat(res.data.data.data);
                    if (res.data.data.data.length > 0) {
                        this.showText = '正在拉去数据~~~'
                        this.stopscroll = true;
                    } else {
                        this.showText = '我是有底线的~~~';
                    }
                })
            },
            scrolldoc () {
                const upscroll = this.$refs.mainBox.scrollTop;
                const ClienH = this.ClientHeight;
                const mainH = this.$refs.updatascroll.clientHeight;
                if (mainH - ClienH - upscroll < 70) {
                    if (this.stopscroll) {
                        this.stopscroll = false;
                        ++ this.channel_id;
                        
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        width: 98%;
        height: 1rem;
        line-height: 1rem;
        background: #fff;
        padding: 0 1%;
        box-shadow: 0 0 2px #ccc;
        position: sticky;
        top: 0;
        z-index: 10;
    }
    .main-box {
        width: 100%;
        background: #eee;
        position: absolute;
        top: 0;
        bottom: 1rem;
        overflow: scroll;
    }
    .main-box::-webkit-scrollbar {
        display: none;
    }
    .banner {
        width: 100%;
        height: 3.54rem;
    }
    .banner img {
        width: 100%;    
    }
    .list {
        margin-top: .1rem;
        background: #fff;
    }
    .list-ul {
        display: -webkit-flex;
        flex-wrap: wrap;
        text-align: center;
    }
    .list-ul li {
        width: 24%;
        line-height: .7rem;
        margin-top: .2rem;
        text-align: center;
    }
    .list-ul li img {
        width: 50%;
        vertical-align: middle;
    }
    .list-ul li small {
        display: block;
        font-size: .26rem;
        margin: 0.05rem 0;
    }
    /* 商城动态  */
    .advertise {
        width: 92%;
        height: .8rem;
        line-height: .8rem;
        padding: .1rem 4%;
        background: #fff;
        display: -webkit-flex;
    }
    .advertise>span {
        width: 13%;
        font-size: .35rem; 
        line-height: .4rem;
        color: orange;
    }
    .advertise-banner {
        border: 1px solid #ccc;
        border-radius: .1rem;
        flex: 1;
        overflow: hidden;
    }
    .advertise-banner div {
        line-height: .4rem;
        font-size: .25rem;
        padding: 0 .05rem;
    }
/*天天特惠  */
    .preferential {
        width: 92%;
        line-height: .8rem;
        background: #fff;
        padding: 0 4%;
        margin: 0.1rem 0;
        display: -webkit-flex;
    }
    .preferential img {
        width: 6%;
        vertical-align: middle;
    }
    .preferential-left {
        text-align: left;
        color: orange;
        flex: 1;
    }
    .preferential-right {
        text-align: right;
    }
    .preferential-right>span {
        font-size: .25rem;
    }
    /*美食专场  */
    .coupon {
        width: 100%;
        display: -webkit-flex;
        background: #eee;
    }
    .coupon-left {
        width: 49%;
        margin-right: 1%;
    }
    .coupon-left img {
         width: 100%; 
    }
    .coupon-right {
        width: 49.9%;
        display: -webkit-flex;
        flex-direction: column; 
    }
    .coupon-right img {
       width: 100%;
       margin-bottom: .1rem;
    }
    /*家乡味道组件  */
     .homelandBox{
         background: #eee; 
    }
    .homeflav {
        width: 92%;
        height: .7rem;
        line-height: .8rem;
        padding: .1rem 4%;
        background: #fff;
        text-align: center;
        display: -webkit-flex;
    }
    .homeflav span {
        flex: 1;
        color: orange;
        font-size: .35rem;
    }

    .recommendList {
        width: 100%;
        margin-top: .1rem;
    }
    /* 底线*/
    .remind {
        text-align: center;
    }
</style>