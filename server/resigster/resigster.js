const fs = require('fs');
module.exports = function (req, res) {
    const userName = req.body.userName;
    const userPwd = req.body.userPwd;
    const userData = JSON.parse(fs.readFileSync('./data/loginList/userLIst.json', 'utf-8'));
    var obj, flag = true;
    userData.userList.forEach((value, index) => {
        if (value.userName === userName) {
            flag = false;
            if (value.userPwd === userPwd) {
                obj = {
                    code: '1',
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
    if (flag) {
        obj = {
            code: '-1',
            message: '账号不正确'
        };
    }
    res.end(JSON.stringify(obj));
};