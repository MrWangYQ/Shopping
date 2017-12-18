<template>
    <div class="mine-box">
        <div class="mine-header">
            <p class="mine-complie-p">
               <img id="avatar" src="../../assets/image/mine/my1.png">
            </p>
            <p>我的717商城</p>
        </div>
        <div class="mine-content">
            <div class="mine-information">
                <img id="avatar" src="../../assets/image/mine/default_avatar.png">
                <p id="nickname">71712423437</p>
            </div>
            <div class="mine-paymentBox">
                <h3><p><img src="../../assets/image/mine/my9.png"><span>我的店铺</span></p><img src="../../assets/image/mine/my14.png"></h3>
                <ul>
                    <li>
                        <i><img src="../../assets/image/mine/my4.png"></i>
                        <span>待付款</span>
                    </li>
                    <li>
                        <i><img src="../../assets/image/mine/my5.png"></i>
                        <span>待发货</span>
                    </li>
                    <li>
                        <i><img src="../../assets/image/mine/my6.png"></i>
                        <span>待收货</span>
                    </li>
                    <li>
                        <i><img src="../../assets/image/mine/my7.png"></i>
                        <span>售后</span>
                    </li>
                    <li id="imgLi">
                        <i><img src="../../assets/image/mine/my8.png"></i>
                        <span>我的订单<img src="../../assets/image/mine/my15.png" id="dianImg"></span>
                    </li>
                </ul>
            </div>
            <div class="mine-manageBox">
                <ol>
                    <li id="my_t">
                        <router-link to='community'>
                            <p><img src="../../assets/image/mine/myhome.png">我的社区</p><i><img src="../../assets/image/mine/my15.png"></i>
                        </router-link>
                    </li>
                    <li id="money">
                        <a href="javascript:;">
                        <p><img src="../../assets/image/mine/my10.png">账户余额</p><i><img src="../../assets/image/mine/my15.png"></i>
                        </a>
                    </li>
                    <li id="address" @click='goAddress'>
                        <a href="javascript:;">
                            <p><img src="../../assets/image/mine/my12.png">地址管理</p><i><img src="../../assets/image/mine/my15.png"></i>
                        </a>
                    </li>
                </ol>
            </div> 
            <div class="recommendList">
                <div class="recommend-title">
                    <img src="../../assets/image/mine/my16.png">
                    <span>热门推荐</span>
                    <img src="../../assets/image/mine/my16.png">
                </div>
                <product-box :productlist='productlist'></product-box>
            </div>
            <div class="remind">我是有底线的~</div>
        </div>
    </div>
</template>
<script>
  import ProductBox from '@/components/MainContent/Product/Product'
  export default {
    data () {
      return {
        productlist: []
      }
    },
    components: {
        productBox: ProductBox
    },
    created () {
        this.$http.post('/mall/goods/recommendgoods', {key_code: 273556257925089069}).then((res) => {
            this.productlist = res.data.data
        })
    },
    methods: {
        goAddress () {
            this.$router.push({'name': 'address'})
        }
    }
  }
</script>
<style scoped>
    .mine-box {
        width: 100%;
        background: #eee;
        height: 100%;
        bottom: 1rem;
        overflow: scroll;
    }
    .mine-box::-webkit-scrollbar {
        display: none;
    }
    .banner {
        height: 2rem;
    }
    /* 头部 */
    .mine-header {
        width: 96%;
        line-height: 1rem;
        padding: 0 2%;
        background: #fafafa;
        box-shadow: 0 0 2px #ccc;
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 1;
    }
    .mine-header p {
        font-size: .4rem;
    }
    .mine-header .mine-complie-p{
        
    }
    .mine-complie-p {
        position: absolute;
        left: 2%;
        top: .07rem;
        text-align: right;
    }
    .mine-complie-p img {
        width: .4rem;        
    }
    /* 主体*/
    .mine-content {
        
    }
    /*我的 */
    .mine-information {
        width: 100%;
        height: 1.97rem;
        background: url(../../assets/image/mine/phpot.png) no-repeat; 
    }
    .mine-information img {
        width: 1.23rem;
        height: 1.24rem;
        margin: 0.14rem 0 0 3.15rem;
    }
    .mine-information p {
        text-align: center;
        color: #fff;
        font-size: 0.3rem;
        line-height: .5rem;
        font-weight: normal;
    }
    /* 我的店铺*/
    .mine-paymentBox h3 {
        width: 100%;
        height: 1.32rem;
        color: #fc4141;
        position: relative;
        border-bottom: 1px solid #eeeeee;
    }
    .mine-paymentBox h3 p {
        margin: 6% 0 0 15%;
        font-size: .34rem;
        display: inline-block;
    }
    .mine-paymentBox p span {
        font-weight: normal;
    }
    .mine-paymentBox h3 img {
        position: absolute;
        top: 40%;
        right: 5%;
        width: 0.17rem;
        height: 0.35rem;
    }
    .mine-paymentBox h3 p img {
        position: absolute;
        top: 25%;
        left: .3rem;
        width: 0.7rem;
        height: 0.63rem;
    }
    /* 列表付款*/
    .mine-paymentBox {
        background: #fff;
        margin-bottom: 0.2rem;
    }
    .mine-paymentBox ul {
        width: 100%;
        height: 1.47rem;
        display: -webkit-flex;
    }
    .mine-paymentBox ul li {
        width: 100%;
        height: 1.47rem;
    }
    
    .mine-paymentBox ul li {
        width: 100%;
        height: 1.47rem;
        -webkit-flex-grow: 1;
    }
    .mine-paymentBox ul li span:last-child {
        padding-right: .2rem;
        color: #333;
    }
    .mine-paymentBox ul li img {
        width: 30%;
        margin: 0.35rem 0 0.1rem .4rem;;
    }
    .mine-paymentBox ul li span {
        display: block;
        text-align: center;
        font-size: 0.26rem;
    }
    #imgLi {
        position: relative;
        border-left: 1px solid #e5e5e5;
    }
    #dianImg {
        position: absolute;
        right: .1rem;
        bottom: 0.02rem;
        width: 0.11rem;
        height: 0.24rem;
    }
    /* 社区列表*/
    .mine-manageBox {
        background: #fff;
    }
    .mine-manageBox ol li {
        width: 100%;
        height: 1.03rem;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
    }
    .mine-manageBox ol li p {
        color: #333;
        margin-top: .3rem;
        margin-left: 1.1rem;
        font-size: .32rem;
        display: inline-block;
    }
    .mine-manageBox ol li i {
        width: 0.11rem;
        height: 0.24rem;
        display: inline-block;
        position: absolute;
        top: 29%;
        right: 5%;
    }
    .mine-manageBox ol li p img {
        width: 0.4rem;
        height: 0.36rem;
        position: absolute;
        left: 8%;
        top: 28%;
    }
    /* 推荐商品*/
    .recommendList {
        width: 100%;
    }
    .recommendList img {
        width: 100%;
    }
    .recommend-title {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: #fff;
        margin: .15rem 0;
    }
    .recommend-title img {
        width: 5%;
    }
    /*有底线*/
    .remind {
        text-align: center;
    }
</style>