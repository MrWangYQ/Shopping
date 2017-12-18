import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route';
import { getCookie } from '@/utils/utils';
Vue.use(VueRouter);
let router = new VueRouter({
    linkExactActiveClass: 'active',
    routes
});
router.beforeEach((to, from, next) => {
    if (to.name === 'mine') {
        if (!getCookie('token')) {
            if (to.name !== 'login') {
                next('/index/login');
            } else {
                next();
            }
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
