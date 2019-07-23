var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'x-requested-with, Content-Type, Authorization');
    res.header('Content-Type', 'application/json');
    next();
});

const httpCreate = require('./httpCreate');

app.post('/mall/index/getGoodsChannel', (req, res) => {
    httpCreate('/mall/index/getGoodsChannel', req.body, 'POST').then((data) => {
        res.end(data);
    });
});
app.post('/mall/goods/recommendgoods', (req, res) => {
    httpCreate('/mall/goods/recommendgoods', req.body, 'POST').then((data) => {
      console.log(data, 'data');
      
        res.end(data);
    });
});

// 登录接口
const loginDo = require('./login/login');
app.post('/main/login', loginDo);

// 注册接口
const resigsterDo = require('./resigster/resigster');
app.post('/main/resigster', resigsterDo);

// 勾选商品
const addShopList = require('./addShopList/addShopList');
app.post('/main/addShop', addShopList);

// 分类商品
app.post('/mall/category/topCategory', (req, res) => {
    httpCreate('/mall/category/topCategory', req.body, 'POST').then((data) => {
        res.end(data);
    });
});

const classifyList = require('./classify/classify');
app.get('/mobile/Category/categorySon', classifyList);

app.listen(3000, () => {
    console.log('node server 3000');
});