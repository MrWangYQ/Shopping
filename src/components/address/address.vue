<template>
    <div class="address">
        <div class="address-header">
            <p class="aheader-al" @click='goHome'>
                <img src="../../assets/image/product/return.png">
                <span>返回</span>
            </p>
            <p class="aheader-ac"><span>收货</span><span>地址</span></p>
            <p class="aheader-ar">
                <router-link :to='{name: "main"}'>
                    <img src="../../assets/image/product/index.png">
                </router-link>
            </p>
        </div>
        <div 
        class="address-box" 
        v-if='$store.state.newAddressList.length > 0'
        v-for='(item, idx) in $store.state.newAddressList' :key='idx'>
            <!-- {{$store.state.newAddressList}} -->
            <ul class="address-ul">
                <li><span>{{item.Consignee}}</span><span>{{item.phoneNumber}}</span></li>
                <li><span>{{item.province}}</span><span>{{item.city}}</span><span>{{item.area}}</span><span>{{item.detilsAddress}}</span></li>
            </ul>
            <div class="compile"><p><span :class="{all_check_active: item.active}" @click='isDefault'></span><small>设为默认</small></p><p class="compile-p"><router-link :to='{name: "newaddress", params: {item}}'><img src="../../assets/image/edit.png"><span>编辑</span></router-link><img src="../../assets/image/rem.png"><span>删除</span></p></div>
        </div>
        <div class="newaddress">
            <p>
                <img src="../../assets/image/add.png">
                <span @click='newAddress'>新增加地址</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'address',
        props: {
            
        },
        data () {
            return {
                active: false
            }
        },
        created () {
            
        },
        methods: {
            goHome() {
                this.$router.go(-1);
            },
            newAddress () {
                this.$router.push({name: 'newaddress'});
            },
            isDefault () {
                if (this.active) {
                    this.active = false;
                } else {
                    this.active = true;
                }
            }
        }
    }
</script>
<style scoped>
    /*头部*/
    .address-header {
        width: 96%;
        line-height: 1rem;
        padding: 0 2%;
        background: #fafafa;
        box-shadow: 0 0 2px #ccc;
        text-align: center;
        display: -webkit-flex;
        position: relative;
    }
     .address-header p{
         flex: 1; 
    } 
    .aheader-al {
        width: 20%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .aheader-ac {
        font-size: .4rem;
    }
    .aheader-ar {
        width: 10%;
        position: absolute;
        right: .3rem;
        top: 0;
    }
    .aheader-al img{
        width: 35%;
        vertical-align: middle;
    }
    .aheader-ar img {
        width: 100%;
        vertical-align: middle;
    }
    .newaddress {
        width: 100%;
    }
    .newaddress p {
        background: #fc4141;
        width: 4.66rem;
        height: 0.98rem;
        text-align: center;
        line-height: 1rem;
        border-radius: 0.48rem;
        margin-top: .8rem;
        margin-left: 1.42rem;
        color: #fff;
        font-size: 0.32rem;
    }
    .newaddress p img {
        width: 7%;
    }
    .newaddress p span{
        font-size: .33rem;
    }
    /* address-box-list*/
    .address-box {
        width: 92%;
        padding: 0 4%;
    }
    .compile p:first-child span {
        display: inline-block;
        width: .4rem;
        height: .4rem;
        margin: 0 .1rem;
        vertical-align: middle;
        border-radius: 50%;
        border: 1px solid #ccc;
        position: relative;
    }
    /* 选中*/
    .all_check_active::after {
        content: "";
        position: absolute;
        left: 0.075rem;
        top: 0.075rem;
        width: .25rem;
        height: .25rem;
        border-radius: 50%;
        background: #414141;
    }
    .address-ul {
        width: 100%;
        display: -webkit-flex;
        flex-direction: column;
    }
    .address-ul li {
        height: .7rem;
        line-height: .7rem;
        flex: 1;
    }
    .address-ul li span {
        padding:  0 .2rem;
    }
    .compile {
        width: 100%;
        line-height: .7rem;
        display: -webkit-flex;
    }
    .compile p {
        flex: 1;
    }
    .compile img {
        width: 10%;
        vertical-align: middle;
    }
    .compile-p {
        text-align: right;  
    }
    .compile-p span {
        padding: 0 .1rem;
    }
</style>