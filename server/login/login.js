const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    const userName = req.body.userName;
    const userPwd = req.body.userPwd;
    const userData = JSON.parse(fs.readFileSync('./data/loginList/userLIst.json', 'utf-8'));
    let obj;
    let flag = true;
    console.log(req.headers.authorization);
    const token = jwt.sign(req.body, '717', { expiresIn: 1 * 30 });
    req.headers.authorization = token;
    console.log(req.headers.authorization);
    userData.userList.forEach((value, index) => {
        if (value.userName === userName) {
            flag = false;
            if (value.userPwd === userPwd) {
                obj = {
                    code: '1',
                    token: token,
                    message: '登录成功'
                };
            } else {
                obj = {
                    code: '0',
                    message: '账号密码不正确'
                };
            }
        }
    });
    console.log('正常执行');
    if (flag) {
        obj = {
            code: '-1',
            message: '账号不正确'
        };
    }
    res.end(JSON.stringify(obj));
};