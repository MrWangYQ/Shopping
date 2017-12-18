import Vue from 'vue';
import App from './App.vue';
import store from '@/store/store';
import axios from '@/http/axios';
import router from './router/index';
import './common/rem.js';
import './common/reset.css';
import './common/font/iconfont.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import vuelazyload from 'vue-lazyload';
import message from '@/Plugins/message';

require('swiper/dist/css/swiper.css');
Vue.use(MintUI);
Vue.use(VueAwesomeSwiper);
Vue.use(vuelazyload, {
    loading: 'src/assets/image/5-121204193Q9.gif'
});

Vue.use(message);

let vm = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
