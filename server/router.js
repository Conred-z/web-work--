const express = require('express');
const router = express.Router();
const url = require("url");
const SQLConnect = require('./SQLConnect.js');
const jwt = require('jsonwebtoken');
const jwtSecret = require('./jwtSecret.js');
const adminData = require('./data/admin.js');
const vipData = require('./data/vip.js');
const linedata = require("./data/line.js")


// 添加接口
// router.get('/list', (req, res) => {
//     res.send({
//         status: 200,
//         msg: '测试服务器接口'
//     })
// });

// 登陆接口
router.post('/login', (req, res) => {

    // 接收客户端的参数：username, password
    const { username, password } = req.body;
    // console.log(username, password);    // 测试服务器是否接收到客户端的参数
    const sql = "select * from user where username=? and password=?";

    SQLConnect(sql, [username, password], result => {
        if (result.length > 0){
            // 生成token
            // token:前后端在登陆信息交互的时候，通过token来进行验证是否登陆成功的一个字段
            // jwt.sign({加密的数据}, 加密的密钥)
            // token:参考文档:http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html
            const token = jwt.sign({
                id: result[0].id,
                username: result[0].username,
                permission: result[0].permission
            }, jwtSecret.secret)
            res.send({
                status: 200,
                // result
                username: result[0].username,
                permission: result[0].permission,
                token, 
                msg: '登陆成功!'
            })
        }else{
            res.send({
                status: 500,
                msg: '用户名或密码错误'
            })
        }
    })
});

/**
 * 用户权限管理
 */
router.get("/router", (req, res) => {
    // 获取token-用户权限
    const user = url.parse(req.url, true).query.user;
    switch(user){
        case 'admin':
            res.send({
                status: 200,
                menuData: adminData
            });
            break;
        case 'vip':
            res.send({
                status: 200,
                menuData: vipData
            });
            break;
        default:
            res.send({
                status: 500,
                msg: '用户权限不足'
            });
    }
})

router.get("/line", (req, res) =>{
    res.send({
        status: 200, 
        result: linedata
    })
})

module.exports = router;