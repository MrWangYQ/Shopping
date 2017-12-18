let routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        redirect: '/index/main',
        component: resolve => require(['@/views/index'], resolve),
        children: [
            {
                path: 'main',
                name: 'main',
                component: resolve => require(['@/components/footer/main'], resolve)
            },
            {
                path: 'classify',
                name: 'classify',
                component: resolve => require(['@/components/footer/classify'], resolve)
            },
            {
                path: 'shopcar',
                name: 'shopCar',
                component: resolve => require(['@/components/footer/shopCar'], resolve)
            },
            {
                path: 'mine',
                name: 'mine',
                component: resolve => require(['@/components/footer/mine'], resolve)
            },
            {
                path: 'community',
                name: 'community',
                component: resolve => require(['@/components/footer/community'], resolve)
            },
            {
                path: 'search',
                name: 'search',
                component: resolve => require(['@/components/search/search'], resolve)
            }
        ]
    },
    {
        path: '/index/productlist',
        name: 'productlist',
        component: resolve => require(['@/components/MainContent/Product/Productlist'], resolve)
    },
    {
        path: '/index/login',
        name: 'login',
        component: resolve => require(['@/views/login'], resolve)
    },
    {
        path: '/index/resigster',
        name: 'resigster',
        component: resolve => require(['@/views/resigster'], resolve)
    },
    {
        path: '/address',
        name: 'address',
        component: resolve => require(['@/components/address/address'], resolve)
    },
    {
        path: '/newaddress',
        name: 'newaddress',
        component: resolve => require(['@/components/address/newaddress'], resolve)
    },
    {
        path: '*',
        name: 'NOTFOUND',
        components: {
            template: '页面飞丢了'
        }
    }
    // main classify  shopCar mine community
];
export default routes;
