<template>
    <div class="head-box">
        <div class="logo">
            <img src="../assets/image/homelo.gif">
        </div>
        <p><i class="icon iconfont icon-sousuo search"></i><input type="text" placeholder="请输入您要购买的商品" @click='search'></p>
        <dl class="shop">
            <dt><img src="../assets/image/shoping.png"></dt>
            <dd>我的店铺</dd>
        </dl>
    </div>
</template>
<script>
    export default {
        data (){
            return {
            }
        },
        methods: {
            search () {
                this.$router.push({name: 'search'});
            }
        }
    }
</script>
<style scoped>
    .head-box {
        display: -webkit-flex;
        box-sizing: border-box;
    }
    .logo>img {
        padding: 0 .1rem;
    }
    .logo>img, .shop>dt>img{
        height: .44rem;
        vertical-align: middle;
    }
    .head-box p {
        width: 63%;
        margin: 0 2%;
        position: relative;
    }
    .head-box p input {
        width: 100%;
        height: .72rem;
        background: #f5f5f5;
        padding-left: .5rem;
        border-radius: .1rem;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
    .head-box .shop{
        margin-top: .1rem;
        line-height: .44rem;
        text-align: center;
    }
    .shop dd {
        font-size: .26rem;
        color: #fd4848;
    }
    .search {
        position: absolute;
        left: 0.15rem;
        top: 0;
    }
</style>