<template>
    <div class="search-page">
        <div class="search-header">
            <span class="search-header-span" @click='back'><i class="icon iconfont icon-xiangzuojiantou"></i></span>
            <p><i class="icon iconfont icon-sousuo search"></i><input type="text" v-model='searchVal' placeholder="请输入您要购买的商品"></p>
            <span class="searchBtn" @click='searchBtnList'>搜索</span>
        </div>
        <div class="lately-box">
            <p class="lately-box-p"><span>最近搜索</span><span @click='delrecordData'>删除</span></p>
            <div v-if='showHistory' class="lately-record">无搜索记录……</div>
            <div class="lately-record" v-else>
                <span v-for='(item, idx) in recordData' :key='idx'>{{item}}</span>
            </div>
            <div class="lately-every">
                <p>大家都在搜</p>
                <span v-for='(item, idx) in everyData' :key='idx'>{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import _ from 'lodash';
    export default {
        data () {
            return {
                searchVal: '',
                showHistory: true,
                recordData: [],
                everyData: ['粽子','锅巴','酱','小吃','零食','干果', '特产', '油', '大米']
            }
        },
        created () {
            this.getlocalHistory();
        },
        methods: {
            searchBtnList () {
                if (this.searchVal !== '') {
                    let ls = localStorage;
                    let getHistroy = ls.getItem('searchHistory')
                    if (!getHistroy) {
                        ls.setItem('searchHistory', JSON.stringify([this.searchVal]))
                    } else {
                        console.log(getHistroy);
                        let newsHistory = JSON.parse(getHistroy)
                        console.log(newsHistory);
                        newsHistory.unshift(this.searchVal);
                        newsHistory = _.uniq(newsHistory);
                        ls.setItem('searchHistory', JSON.stringify(newsHistory))
                    }
                    this.getlocalHistory();
                } else {
                    /*mint-ui 消息提示 */
                    Toast({
                        message: '请输入要搜索产品的名称',
                        position: 'middle',
                        duration: 5000
                    });
                }
                this.showHistory = false;
                this.searchVal = '';
            },
            getlocalHistory () {
                let ls = localStorage;
                this.recordData = JSON.parse(ls.getItem('searchHistory'))
                this.showHistory = false;
            },
            delrecordData () {
                this.showHistory = true;
                localStorage.removeItem('searchHistory')
            },
            back () {
                this.$router.push({name: 'index'});
            }
        }
    }
</script>
<style scoped>
    /*外部div 头部*/
    .search-page {
        width: 100%;
    }
    .search-header {
        width: 100%;
        padding: 0 2%;
        line-height: 1rem;
        display: -webkit-flex;
        box-sizing: border-box;
    }
    .search-header-span {
        padding: 0 .1rem;
        font-size: .35rem;
    }
    .searchBtn {
        width: 15%;
        padding-top: .04rem;
        font-size: .3rem;
        text-align: center;
    }
    .search-header p {
        width: 100%;
        margin: 0 2%;
        position: relative;
    }
    .search-header p input {
        width: 100%;
        height: .72rem;
        background: #f5f5f5;
        padding-left: .6rem;
        border-radius: .1rem;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
    .search {
        position: absolute;
        left: 0.15rem;
        top: 0rem;
    }
    /* 搜索*/
    .lately-box {
        width: 94%;
        padding: 0 3%;
    }
    .lately-box-p {
        display: -webkit-flex;
        height: .95rem;
        line-height: .95rem;
    }
    .lately-box-p span {
        flex: 1;
    }
    .lately-box-p span:last-child {
        text-align: right;
    }
    .lately-record {
        width: 93%;
        padding: .2rem 0;
        font-size: .3rem;
    }
    .lately-record span {

    }
    /* 大家搜*/
    .lately-every {
        width: 90%;
    }
    .lately-every span, .lately-record span{
        line-height: 1rem;
        padding: .1rem .3rem;
        margin-bottom: .3rem;
        margin-right: .3rem;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: .1rem;
    }
</style>