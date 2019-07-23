<template>
    <div class="shopcar-box">
         <div class="shopcar-list">
            <div class="shop-left">
                <span class="list_check" :class='{list_check_active: item.shopchecked}' @click='check'></span>
            </div> 
            <div class="shop-center">
                <span><img :src="item.shopsrc"></span>
            </div> 
            <div class="shop-right">
                 <div class="shop-right-title">
                     <p>{{item.shopname}}</p>
                </div> 
                 <div class="shop-right-sub">
                    <p class="right-sub-left">
                        <span>X{{item.shopcount}}</span>
                        <span>￥{{item.shopprice}}</span>
                    </p>
                    <p class="right-sub-right">
                        <span @click='reduceInput(item)'>-</span>
                        <span><input type="text" v-model='item.shopcount'></span>
                        <span @click='addInput(item.shopcount)'>+</span>
                    </p>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            allsum: {
                required: true,
                type: String
            },
            item: {
                required: true,
                type: Object
            }
        },
        data () {
            return {
            }
        },
        created () {
            
        },
        methods: {
            check () {
                this.$store.commit('checkList', this.item.id);
                this.$store.commit('total');
            },
            reduceInput (val) {
                if (this.item.shopcount == 1) {
                    this.$message('最少选中1个商品');
                    return;
                }
                this.$store.commit('isCount', {
                    id: val.id,
                    shopcount: --this.item.shopcount
                });
                this.$store.commit('total');
            },
            addInput (val) {
                this.$store.commit('isCount', {
                    id: val.id,
                    shopcount: ++this.item.shopcount
                });
                this.$store.commit('total');
            }
        }
    }
</script>
<style scoped>
    .shopcar-box {
        background: #eee;
    }
    .shopcar-list {
        display: -webkit-flex;
        height: 2.6rem;
        margin-bottom: .1rem;
        background: #fff;
    }
    .shop-left {
        width: 12%;
        text-align: center;
        vertical-align: middle;
    }
    /*按钮 */
    .list_check {
        display: block;
        width: .5rem;
        height: .5rem;
        margin: 1rem .2rem;
        border: 1px solid #ccc;
        border-radius: 50%;
        position: relative;
    }
    .list_check_active::after {
        content: "";
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: #414141;
    } 
    .shop-center {
        width: 30%;
    }
    .shop-center img {
        width: 100%;
        margin-top: .2rem;
    }
    .shop-right {
        flex: 1;
        padding: 0 .1rem;
        display: -webkit-flex;
        flex-direction: column;
    }
    .shop-right-title {
        line-height: .3rem;
        padding-top: .3rem;
        height: .7rem;
        
    }
    .shop-right-title p {
        width: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shop-right-sub {
        display: -webkit-flex;
        height: 1rem;
        line-height: .7rem;
        margin-top: .2rem;
    }
    .right-sub-left, .right-sub-right {
        flex: 1;
    }
    .right-sub-left span{
        display: block;
        text-align: left;
    }
    .right-sub-left span:last-child {
        color: #fc4141;
        font-weight: bold;
    }
    .right-sub-right {
        display: -webkit-flex;
        text-align: center;
        height: .7rem;
        padding-right: .3rem;
        margin: .3rem 0;
    }
    .right-sub-right span {
        flex: 1;
        width: 20%;
        line-height: .7rem;
        border: 1px solid #ccc;
    }
    .right-sub-right span input {
        width: 100%;
        height: 80%;
        text-align: center;
        border: none;
    }

    
</style>