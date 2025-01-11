import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
    // 组合式API
    state: () => {
        return {
            username: "",
            permission: "",
            token: ""
        };
    }, 
    // 本地持久化
    persist:{
        enabled: true,
        strategies: [
            {
                key: "login", // 自定义的key值  存储到本地时候的key
                storage: localStorage, // 选择存储方式
            }
        ]
    }
})