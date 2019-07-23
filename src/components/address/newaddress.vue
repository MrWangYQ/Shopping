<template>
    <div class="address">
        <div class="address-header">
            <p class="aheader-al" @click='goHome'>
                <img src="../../assets/image/product/return.png">
                <span>返回</span>
            </p>
            <p class="aheader-ac"><span>收货人</span></p>
            <p class="aheader-ar">
                <router-link :to='{name: "main"}'>
                    <img src="../../assets/image/product/index.png">
                </router-link>
            </p>
        </div>
        <form action="" class="addressform">
            <p>
                <input type="text" v-model='Consignee' placeholder="收货人姓名">
            </p>
            <p>
                <input type="text" v-model='phoneNumber' placeholder="手机号">
            </p>
            <p class="city">
                <select name="请选择省" id="" v-model='province' @change='addprovince'>
                    <option value="">请选择省</option>
                    <option :value="item.name" v-for='(item, idx) in proData' :key='idx'>{{item.name}}</option>
                </select>
                <select v-model='city' @click='cityBtn'>
                    <option value="">{{selectCity}}</option>
                    <option  :value="item.name" v-for='(item, idx) in citydata' :key='idx'>{{item.name}}</option>
                </select>
            </p>
            <p class="area">
                <select v-model='area' @click='areaBtn'>
                    <option value="">{{selectArea}}</option>
                    <option :value="item"  v-for='(item, idx) in areaData' :key='idx'>{{item}}</option>
                </select>
            </p>
            <p>
                <input type="text" v-model='detilsAddress' placeholder="请输入详情地址">
            </p>
        </form>
        <p class="settingAddress"><span :class="{all_check_active: active}" @click='activeBtn'></span>设置默认地址</p>
        <div class="saveAdress">
            <span @click='Addressbtn'>保存</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'newAddress',
        data () {
            return {
                Consignee: '',
                phoneNumber: '',
                detilsAddress: '',
                proData: [],
                citydata: [],
                areaData:[],
                province: '',
                city: '',
                selectCity: '请选择市',
                area:'',
                selectArea: '请选择区',
                active: false
            }
        },
        created () {
            if (this.$route.params.item) {
                var routeParam = this.$route.params.item;
                this.Consignee = routeParam.Consignee;
                this.phoneNumber = routeParam.phoneNumber;
                this.detilsAddress = routeParam.detilsAddress;
                this.active = routeParam.active;
                this.province = routeParam.province;
                this.city = routeParam.city;
                this.area = routeParam.area;
            }
            fetch('@/../server/data/cityList/city.json').then((result) => {
                return result.json();
            }).then((result) => {
                this.proData = result;
            });
            console.log(this.$route.params);
        },
        methods: {
            goHome() {
                this.$router.go(-1);
            },
            newAddress () {
                this.$router.push({name: 'newaddress'});
            },
            addprovince () {
                this.proData.forEach((item, idx) => {
                    if (item.name == this.province) {
                        this.citydata = item.city;
                    }
                })
                this.selectCity = '请选择市';
                this.selectArea = '请选择区';
            },
            cityBtn () {
                this.citydata.forEach((item, idx) => {
                    if (item.name == this.city) {
                        this.areaData = item.area;
                    }
                })
                this.selectArea = '请选择区';
            },
            areaBtn () {
                console.log('area')
            },
            activeBtn () {
                if (this.active) {
                    this.active = !this.active
                } else {
                    this.active = !this.active;
                }
            },
            Addressbtn () {
                let id = 0;
                ++id;
                this.$store.commit('newAddrFn', {
                    id: id,
                    Consignee: this.Consignee,
                    phoneNumber: this.phoneNumber,
                    province: this.province,
                    city: this.city,
                    area: this.area,
                    detilsAddress: this.detilsAddress,
                    active: this.active
                })
                this.$router.push({name: 'address'});
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
    /*addressform*/
    .addressform {
        width: 92%;
        margin: 0 4%;

    }
    .addressform p {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        margin: 0.3rem 0;
    }
     .addressform p input{
        width: 100%;
        height: .8rem;
        padding-left: .1rem;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: .1rem;
    }
    /*city*/
    .city {
        width: 100%;
        height: .8rem;
        text-align: center; 
    }
    .addressform .city select {
        outline: none;
        border-radius: .1rem;
        width: 49%;
        height: 90%;
    }
    .addressform .city select option {
        width: 100%;
        height: 1rem;
        border-radius: .1rem;
    }
    .settingAddress {
        width: 92%;
        padding: 0 4%;
        line-height: 1rem;
    }
    .settingAddress span {
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

    .saveAdress {
        width: 92%;
        height: 1rem;
        line-height: 1rem;
        padding: 0 4%;
        margin: 4% 0;
        text-align: center;
    }
    .saveAdress span {
        display: inline-block;
        width: 70%;
        height: 1rem;
        color: #fff;
        background: #fc4141;
        border-radius: .6rem;
    }
    .area select{
        width: 100%;
        height: 90%;
        outline: none;
        border-radius: .1rem;
    }
    
</style>