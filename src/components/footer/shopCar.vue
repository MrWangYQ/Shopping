<template>
    <div class="shop-page">
        <div class="shop-header">
            <p>购物车</p>
            <span class="complie-span" v-if='$store.state.checkProduct.length>0' @click='compile'>{{compileText}}</span>
        </div>
        <div class="shop-com" v-if='$store.state.checkProduct.length>0'>
            <shop-list  v-for='(item, idx) in $store.state.checkProduct' :key='idx' :item='item' :allsum='allsum'></shop-list>
            
        </div>
        
        <div class="empty-car-box" v-else>
            <p><img src="../../assets/image/8.png"></p>
            <p>购物车为空</p>
            <p><span @click='goMain'>去逛逛</span></p>
        </div>
        <div class="all-box">
            <div class="all-left">
                <span @click='checkAll' class="all_list_check" :class='{all_check_active: $store.state.checkall}'></span>
                <span>全选</span>
            </div>
            <div class="all-right">
                <div v-if='emptycar'>合计:<b>￥{{$store.state.shopsum}}</b></div>
                <span @click='delBuy'>{{allsum}}</span>
            </div>
        </div>
        <div class="shop-recommend">
            <div class="recommend-title">
                <img src="../../assets/image/mine/my16.png">
                <span>热门推荐</span>
                <img src="../../assets/image/mine/my16.png">
            </div>
            <div class="recommendList">
                <product-box :productlist='productlist'></product-box>
            </div>
            <div class="remind">我是有底线的~</div>
        </div>
    </div>
</template>
<script>
    import shopList from '@/components/ShopCar/ShopCarList';
    import ProductBox from '@/components/MainContent/Product/Product';
    import {getCookie} from '@/utils/utils'
    export default {
        data () {
            return {
                compileText: '编辑',
                allsum: '结算',
                emptycar:true,
                productlist: []
            }
        },
        components: {
            shopList,
            ProductBox
        },
        created () {
            this.$http.post('/mall/goods/recommendgoods', {key_code: 273556257925089069}).then((res) => {
                this.productlist = res.data.data
            })
            // {
            //     id: data.id,
            //     shopsrc: data.shopsrc,
            //     shopname: data.shopname,
            //     shopprice: data.shopprice,
            //     shopcount: data.shopcount,
            //     shopchecked: false
            // }
            console.log(this.$store.state.checkProduct);
            if (this.$store.state.checkProduct.length < 0) {
                this.$http_token.post('/main/addshop').then(result => {
                    console.log(result);
                    this.$store.commit('assign', result.data.data.shopList)
                });   
            }
            
        },
        methods: {
            compile () {
                if (this.compileText == '完成') {
                    this.emptycar = true;
                    this.compileText = '编辑';
                    this.$store.commit('delBuyBtn', this.compileText);
                    this.$store.commit('total');
                    this.allsum = '结算'
                } else {
                    this.emptycar = false;
                    this.compileText = '完成';
                    this.$store.commit('delBuyBtn', this.compileText);
                    this.allsum = '删除'
                }
            },
            delBuy () {
                if (this.allsum == '删除') {
                    this.$store.state.checkProduct.forEach((item, idx) => {
                        if (item.shopchecked) {
                            this.$store.commit('delBuyFn', {id: idx});
                        }
                    });
                } else {
                    if (getCookie('token')) {
                        this.$router.push({name: 'buyGoods'})
                    }else {
                        this.$router.push({name: 'login'})
                    }
                    
                }
            },
            goMain () {
                this.$router.push({name: 'main'});
            },
            checkAll () {
                this.$store.commit('checkedAll');
                this.$store.commit('total');
            }
        }
    }
</script>
<style scoped>
    /*盒子 */
    .shop-page {
        width: 100%;
        background: #eee;
        position: absolute;
        top: 0;
        bottom: 1rem;
        overflow-y: scroll;
    } 
    /* 头部 */
    .shop-header {
        width: 96%;
        line-height: 1rem;
        padding: 0 2%;
        background: #fff;
        box-shadow: 0 0 2px #ccc;
        text-align: center;
        position: sticky;
        top: 0; 
        z-index: 10;
    }
    .shop-header p {
        font-size: .4rem;
    }
    .shop-header span {
        text-align: right;
    }
    .complie-span {
        position: absolute;
        right: 2%;
        top: 0;
    }
    .shop-com {
        overflow: scroll;
    }
    .empty-car-box {
        width: 100%;
        padding: .3rem 0;
        background: #fff;
        text-align: center;
    }
    .empty-car-box p:nth-child(2) {
        font-size: .25rem;
    }
    .empty-car-box p:first-child {
        line-height: 2.5rem;
    } 
    .empty-car-box p img {
        width: 20%;
        vertical-align: middle;
    }
    .empty-car-box p:last-child {
        margin: .5rem 0;
    }
    .empty-car-box p span{
        color: #fc4141;
        padding: .2rem 0.2rem;
        border: 1px solid #fc4141;
        border-radius: .1rem;        
    }
    /* 总计*/
    .all-box {
        position: fixed;
        bottom: 1rem;
        left: 0;
        z-index: 20;
        width: 96%;
        height: 1rem;
        line-height: 1rem;
        background: #fff;
        box-shadow: 0 0 1px #ccc;
        padding-left: 4%;
        display: -webkit-flex;
    }
    .all_list_check {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        margin: 0.2rem 0;
        border: 1px solid #ccc;
        vertical-align: middle;
        border-radius: 50%;
        position: relative;
    }
    .all_check_active::after {
        content: "";
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: #414141;
    } 
    .all-left, .all-right {
        flex: 1;
        /* text-align: right; */
    }
    .all-left {
        text-align: left;
    }
    .all-right div {
        display: inline-block;
        width: 2.21rem;
    }
    .all-right div b {
        color: #fc4141;
    }
    .all-right span {
        display: inline-block;
        width: 1.3rem;
        height: 1rem;
        background: red;
        position: absolute;
        right: 0;
        top: 0;
        color: #fff;
        text-align: center;
    }
    /*商品推荐*/
    .shop-recommend {
        width: 100%;
        margin-bottom: 1rem;
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
    .remind {
        text-align: center;
    }
</style>