<template>
    <div class="product_list">
        <div class="product-header">
            <p class="pheader-pl" @click='goHome'>
                <img src="../../../assets/image/product/return.png">
                <span>返回</span>
            </p>
            <p class="pheader-pc"><span>商品</span><span>详情</span></p>
            <p class="pheader-pr">
                <router-link :to='{name: "main"}'>
                    <img src="../../../assets/image/product/index.png">
                </router-link>
            </p>
        </div>
        <div class="pro-cont">
            <div class="pro-banner">
                <swiper :options='SwiperOption'>
                    <swiper-slide>
                        <div><img :src="'http://lb717.com'+proData['obj_data']"></div>       
                    </swiper-slide>
                    <swiper-slide>
                        <div><img :src="'http://lb717.com'+proData['obj_data']"></div>       
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <p>{{proData['goods_name']}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'produceList',
        props: {
            
        },
        data () {
            return {
                proData: this.$route.params.data,
                SwiperOption: {
                    notNextTick: true,
                    autoplay: true,
                    delay: 500,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        created () {
            // console.log(this.proData['obj_data']);
        },
        methods: {
            goHome() {
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .product_list {
        
    }
    /*头部*/
    .product-header {
        width: 96%;
        line-height: 1rem;
        padding: 0 2%;
        background: #fafafa;
        box-shadow: 0 0 2px #ccc;
        text-align: center;
        display: -webkit-flex;
        position: relative;
    }
     .product-header p{
         flex: 1; 
    } 
    .pheader-pl {
        width: 20%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .pheader-pc {
        font-size: .4rem;
    }
    .pheader-pr {
        width: 10%;
        position: absolute;
        right: .3rem;
        top: 0;
    }
    .pheader-pl img{
        width: 35%;
        vertical-align: middle;
    }
    .pheader-pr img {
        width: 100%;
        vertical-align: middle;
    }
    /* banner*/
    .pro-banner {
        width: 100%;
        height: 7.5rem;
    }
    .pro-banner img {
        width: 100%;
    }
</style>