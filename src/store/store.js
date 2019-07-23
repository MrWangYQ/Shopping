import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        checkProduct: [],
        checkall: false,
        shopsum: 0,
        newAddressList: []
    },
    mutations: {
        assign (state, data) {
            state.checkProduct = data;
        },
        isCount (state, data) { // 加 减
            state.checkProduct.forEach((item, index) => {
                if (item.id === data.id) {
                    if (item.shopchecked) {
                        item.shopcount = data.shopcount;
                    }
                }
            });
        },
        ProductFn (state, data) { // 添加购物车
            let flag = true; // true为正确添加数据
            state.checkProduct = state.checkProduct.map((item) => {
                if (item.id === data.id) {
                    flag = false;
                    ++item.shopcount;
                }
                return item;
            });
            if (flag) {
                state.checkProduct.push(data);
            }
        },
        checkList (state, data) { // 单选及反选
            let flag = true;
            state.checkProduct.forEach((item, index) => {
                if (item.id === data) {
                    if (item.shopchecked) {
                        item.shopchecked = !item.shopchecked;
                    } else {
                        item.shopchecked = !item.shopchecked;
                    }
                }
                if (!item.shopchecked) {
                    flag = false;
                }
            });
            if (flag) {
                state.checkall = true;
            } else {
                state.checkall = false;
            }
        },
        checkedAll (state) { // 全选
            if (!state.checkall) {
                state.checkProduct.forEach((item, index) => {
                    if (item.shopchecked) {
                        console.log('全部为true');
                        state.checkall = true;
                    } else {
                        item.shopchecked = true;
                        state.checkall = true;
                        console.log('全部为FALSE');
                    }
                });
            } else {
                state.checkall = false;
                state.checkProduct.forEach((item, index) => {
                    item.shopchecked = false;
                });
            }
        },
        total (state) { // 求和
            let sumNumber = 0;
            state.checkProduct.forEach((value, ind) => {
                if (value.shopchecked) {
                    sumNumber += value.shopprice * value.shopcount;
                }
            });
            state.shopsum = sumNumber.toFixed(2);
        },
        delBuyBtn (state, data) {
            state.checkProduct.forEach((item, idx) => {
                if (item.shopchecked) {
                    item.shopchecked = false;
                } else {
                    item.shopchecked = false;
                }
                state.checkall = false;
            });
        },
        delBuyFn (state, data) {
            state.checkProduct.forEach((item, idx) => {
                if (idx === data.id) {
                    state.checkProduct.splice(data.id, 1);
                    return;
                };
            });
        },
        newAddrFn (state, data) {
            let flag = true;
            state.newAddressList.forEach((item, idx) => {
                if (item.id === data.id) {
                    state.newAddressList.splice(idx, 1);
                    flag = false;
                }
            });
            if (flag) {
                state.newAddressList.unshift(data);
            } else {
                console.log('false')
            }
        }
    }
});
export default store;