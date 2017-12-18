const fs = require('fs');
module.exports = function (req, res) {
    const addShop = JSON.parse(fs.readFileSync('./data/shopList/shopList.json', {encoding: 'utf-8'}));
    // addShop.shopList.unshift(req.body);
    // console.log(req.body, '====');
    // fs.writeFileSync('./data/shopList/shopList.json', JSON.stringify(addShop));
    let obj = {
        code: 1,
        data: addShop,
        message: '成功'
    };
    res.end(JSON.stringify(obj));
};