import Vue from 'vue';
import _ from 'lodash';
import './message.css';
let message = {
    install (Vue) {
        const that = this;
        Object.defineProperty(Vue.prototype, '$message', {
            value: function (val) {
                that.init(val);
            }
        });
    },
    init (val) {
        let bodyDom = document.body;
        if (bodyDom.querySelectorAll('.showMsg').length > 0) {
            return;
        }
        let el = this.createElement('div', {class: 'showMsg'}, [val]);
        bodyDom.appendChild(el);
        el.addEventListener('webkitAnimationEnd', function () {
            bodyDom.removeChild(el);
        });
    },
    createElement (type, props, children) {
        if (!_.isString(type)) {
            console.error('first argument must be String');
            return;
        }
        let el = document.createElement(type);
        if (!_.isObject(props)) {
            console.error('second argument must be Object');
            return;
        }
        for (let i in props) {
            el.setAttribute(i, props[i]);
        }
        if (!_.isArray(children)) {
            console.error('three argument must be Array');
            return;
        }
        if (children && children.length > 0) { // 判断children 是dom 是string的情况下
            children.forEach(value => {
                if (_.isElement(value)) {
                    el.appendChild(value);
                } else if (_.isString(value)) {
                    el.innerText = value;
                } else {
                    console.error('children must be document Node');
                }
            });
        }
        return el;
    }
};

export default message;
