var http = require('http');
var queryString = require('query-string');
module.exports = function (path, params, methods) { // 访问地址  参数 请求方式
    return new Promise((resolve, reject) => {
        const postData = queryString.stringify(params);
        const options = {
            protocol: 'http:',
            hostname: 'www.lb717.com',
            port: 80,
            path: path,
            method: methods || 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var req = http.request(options, (res) => {
            var dataList = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                dataList += chunk;
            });
            res.on('end', () => {
                resolve(dataList);
            });
        });
        req.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`);
        });

        // 写入数据到请求主体
        req.write(postData);
        req.end();
    });
};