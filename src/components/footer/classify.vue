<template>
    <div class="classify-box">
        <div class="classify-header">
            <p>
                <input type="text" placeholder="请输入你要购买的商品">
                <img src="../../assets/image/serach.png">
            </p>
        </div>
        <div class="classify">
            <div class="classify-con">
                <ul class="con-left">
                    <li v-for='(item, idx) in list' :key='idx' :class='{"li-active": borderLeft}' @click='classifyActive(idx)'>{{item.name}}</li>
                </ul>
                <div class="con-right">
                    <div class="con-sub" v-for='(item, idx) in rightList' :key='idx'>
                        <dl>
                            <dt>
                                <img :src='"http://www.lb717.com"+item.cate_icon'>
                            </dt>
                            <dd>{{item.cate_name}}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                list: [
                    {
                        name: '家乡味道'
                    },
                    {
                        name: '进口食品'
                    },
                    {
                        name: '牛奶乳品'
                    },
                    {
                        name: '休闲零食'
                    },
                    {
                        name: '生鲜果蔬'
                    },
                    {
                        name: '米面粮油'
                    },
                    {
                        name: '调味调料'
                    },
                    {
                        name: '酒水饮料'
                    }
                ],
                rightList: [],
                borderLeft: false
            }
        },
        created () {
    // [{"cate_id":"16","cate_name":"液态奶","cate_icon":"\/static\/mobile\/images\/category\/niu1@2x.png","parent_id":"4"},{"cate_id":"19","cate_name":"蜂蜜","cate_icon":"\/static\/mobile\/images\/category\/niu4@2x.png","parent_id":"4"}]
            //   /mobile/Category/categorySon?sonid=3

            // this.$http.post('/mall/category/topCategory').then(result => {
            //     console.log(result);
            // })

            this.$http.get('/mobile/Category/categorySon?sonid=3').then(result => {
                console.log(result);
                this.rightList = result;
            })
        },
        methods: {
            classifyActive (id){
                this.borderLeft = true;
                fetch('../../../server/data/classify/classify.json').then(res => {
                    return res.json();
                }).then(res => {
                    // console.log(res);
                    // this.rightList = res;
                    res.forEach((result, idx) => {
                        if (idx == id) {
                            this.rightList = result.milklist;
                        }
                    })
                })
            }
        }
    }
</script>
<style scoped>
    .classify-box {
        width: 100%;
        position: absolute;
        top: 0;
        overflow-y: scroll;
    }
    .classify-header {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #ccc;
        display: -webkit-flex;
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 10;
    }
    .classify-header p {
        flex: 1;
        position: relative;
    }
    .classify-header p input {
        width: 70%;
        height: .53rem;
        background: #eee;
        border-radius: .2rem;
        padding-left: .7rem;
        border: 1px solid #ccc;
    }
    .classify-header p img {
        position: absolute;
        left: 1rem;
        top: 0.35rem;
        width: 4%;
    }
    .classify {
        /* height: 11rem; */
    }
    .classify-con {
        width: 100%;
        display: -webkit-flex;
        overflow-y: scroll;
    }
    .con-left {
        width: 30%;
        height: 100%;
        text-align: center;
        background: red;
    }
    .con-left li {
        color: #333;
        background: #f0eced;
        height: 1rem;
        line-height: 1rem;
    }
    .con-left .li-active {
        padding-left: 2px solid red;
    }
    .con-right{
        flex: 1;
        height: 100%;
        display: -webkit-flex; 
        flex-wrap: wrap; 
    }
    .con-sub {
        width: 1.6rem;
        height: 2.6rem; 
        margin-left: .1rem;
        margin-top: .1rem;
        background: #f7f7f7;
    }
    .con-sub dl {
        text-align: center;
    }
    .con-sub img {
        width: 100%;
    }
</style>