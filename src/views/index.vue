<template>
    <div class="app-box">
        <div class="main">
            <transition>
                 <keep-alive include='main'><router-view></router-view></keep-alive>
            </transition> 
        </div>
        <div class="footer">
             <router-link v-for='(item, idx) in footerList' :key='idx' :to='item.to'> 
                 <foot-box :icon='item.icon' :text='item.text' :num='item.num'></foot-box> 
             </router-link> 
        </div>
    </div>
</template>
<script>
    import footBox from '@/views/footer.vue';
    export default {
        data () {
            return {
                footerList: [
                    {
                        icon: 'icon iconfont icon-shouye',
                        text: '首页',
                        to: 'main',
                        num: false
                    },
                    {
                        icon: 'icon iconfont icon-fenlei',
                        text: '分类',
                        to: 'classify',
                        num: false
                    },
                    {
                        icon: 'icon iconfont icon-xiaoxizhongxin',
                        text: '社区',
                        to: 'community',
                        num: false
                    },
                    {
                        icon: 'icon iconfont icon-gouwuche1',
                        text: '购物车',
                        to: 'shopCar',
                        num: true
                    },
                    {
                        icon: 'icon iconfont icon-wode',
                        text: '我的',
                        to: 'mine',
                        num: false
                    }
                ]
            }
        },
        components: {
            footBox
        },
        methods: {
            scrolldoc () {
                console.log(document.documentElement.clientHeight, '===========', document.body.clientHeight);
                console.log(document.documentElement.scrollTop);
            }
        }
    }
</script>
<style scoped>
    .app-box {
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        flex-direction: column;
    }
    .main {
        flex: 1;
        overflow: hidden;
    }
    .main::-webkit-scrollbar {
        display: none;
    }
    .footer {
        width: 100%;
        height: 1rem;
        box-shadow: 0 0 2px #ccc;
        display: -webkit-flex;
        text-align: center;
    }
    .footer a {
        flex: 1;
        color: #2c3e50;
        padding-top: .07rem;
    }
    .footer a.active {
        color: #fc4141;
    }
    .v-enter {
        transform: translate3d(100%, 0, 0);
    }
    .v-enter-to, .v-leave {
        transform: translate3d(0, 0, 0);
    }
    .v-enter-active, .v-leave-active {
        transition: transform 1s ease;
    }
    .v-leave-to {
        transform: translate3d(-100%, 0, 0);
    } 
</style>