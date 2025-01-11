// 存放所有的网络请求地址

import router from "@/router"

const base = {
    baseUrl: 'http://localhost:3000',       // 服务器公共接口地址
    login: '/api/login',                    // 登陆地址接口地址
    router: '/api/router',                  // 用户权限管理接口地址
    line: '/api/line',                      // 图标 Line 地址
}

export default base