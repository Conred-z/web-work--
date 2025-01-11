import axios from "../utils/request.js";
import base from "./base.js";

const api = {
    /**
     * 登陆接口
     */
    getLogin(params){
        // console.log(params); // 本行代码用于调试
        return axios.post(base.baseUrl + base.login,params)
    }, 
    /**
     * 用户权限管理
     */
    getRouter(params){
        return axios.get(base.baseUrl + base.router, {
            params
        })
    }, 
    /**
     * 获取line图表数据
     */
    getLine(){
        return axios.get(base.baseUrl + base.line)
    }
}

export default api