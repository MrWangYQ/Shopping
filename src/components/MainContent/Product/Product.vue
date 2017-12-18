<template>
    <div class="product-box">
        <dl class="recommendList-dl"
        v-for='(item, idx) in productlist' 
        :key='idx'
        :id='idx'
        @click='productClick(item, idx)'>
            <dt>
                <img v-lazy="'http://lb717.com'+item.obj_data">
            </dt>
            <dd class="home-dd-p">
                <p>{{item.goods_name}}</p>
            </dd>
            <dd>
                <p><span>￥{{item.discount_price}}</span><span @click.stop='addCart(item,idx)'><img src="../../../assets/image/homeland3.png"></span></p>
            </dd>
        </dl>
    </div>
</template>
<script>
    import {Toast} from '@/../node_modules/mint-ui';
    import { getCookie } from '@/utils/utils';
    export default {
        props: {
            productlist: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                
            }
        },
        methods: {
            productClick (value, index){ // 每个商品列表
                this.$router.push({name: 'productlist', params: {data: value, id: index}})
            },
            addCart (val, id) {
                if (getCookie('token')) {
                    Toast({ // 购物车
                        message: '已成功添加购物车',
                        position: 'middle',
                        duration: 1000
                    });
                    this.$store.commit('ProductFn', {
                        id: val.goods_id,
                        shopsrc: 'http://lb717.com'+val.obj_data,
                        shopname: val.goods_name,
                        shopprice: val.discount_price,
                        shopcount: 1,
                        shopsum: 0,
                        shopchecked: false
                    });
                } else {
                    Toast({ // 购物车
                        message: '登录超时，请重新登录',
                        position: 'middle',
                        duration: 5000
                    });
                    this.$router.push({name: 'login'});
                }
                
            }
        }
    }
</script>
<style scoped>
    .product-box{
        width: 100%;
        margin-top: .1rem;
        display: -webkit-flex;
        flex-wrap: wrap;
        background: #eee;  
        position: relative;
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
    .product-box dl {
        width: 49.2%;
        margin-bottom: .1rem;
        background: #fff;
    }
     .recommendList-dl:nth-child(2n-1) {
        margin-right: .11rem;
    }
    .recommendList-dl dt img{
        width: 100%;
    }
    .recommendList-dl dd {
        height: .9rem;
        padding: 0 .1rem;
    }
    .recommendList-dl dd p{
        line-height: .7rem;  
    }
    .recommendList-dl .home-dd-p p{
        font-size: 0.26rem;
        line-height: .3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .recommendList-dl dd:last-child p {
        display: -webkit-flex;
    }
    .recommendList-dl dd:last-child span {
        text-align: left;
        /* flex: 1; */
        font-size: .35rem;
        font-weight: bold;
        color: #fc4141;
    }
    .recommendList-dl dd:last-child span:first-child {
        width: 80%;
    }
    .recommendList-dl dd:last-child span:last-child {
        width: 20%;
    }
    .recommendList-dl dd img{
        width: 90%;
        vertical-align: middle;
    }
</style>