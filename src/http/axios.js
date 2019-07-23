import Vue from 'vue';
import axios from 'axios';
import { getCookie } from '@/utils/utils';
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://127.0.0.1:3000';
}
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://www.lb717.com';
}

// 组件
var Createhttp = {
    install: function (Vue) {
        let axiosCase1 = axios.create();
        let axiosCase2 = axios.create({
            headers: {'Authorization': ''}
        });
        // 拦截器
        axiosCase2.interceptors.request.use((config) => {
            let token = getCookie('token');
            // config 的值是一个对象
            config.headers.Authorization = token;
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        Object.defineProperty(Vue.prototype, '$http', {
            value: axiosCase1
        });
        Object.defineProperty(Vue.prototype, '$http_token', {
            value: axiosCase2
        });
    }
};

Vue.use(Createhttp);