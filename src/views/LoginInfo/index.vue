<template>
    <div class="login-container">

        <el-form class="user" size="large" :model="user">

            <!-- 组件一：名称 -->
            <div class="title-container">
                <h3 class="title">Apple-railway Management System</h3>
            </div>

            <!-- 组件二：登陆账号文本 -->
            <el-form-item prop="username">
                <el-input :prefix-icon="User" v-model="user.username" type="text" placeholder="User Name" name="username"></el-input>
            </el-form-item>

            <!-- 组件三：登陆密码文本 -->
            <el-form-item prop="password">
                <el-input :prefix-icon="Lock" v-model="user.password" type="password" placeholder="Password" name="password"></el-input>
            </el-form-item>

            <!-- 组件四：登陆按钮 -->
            <el-button class="buttom" style="width: 100%; margin-bottom: 30px;" type="primary" @click.native.prevent="handleLogin">Log In</el-button>

        </el-form>

    </div>
</template>


<script setup>

import { reactive } from "vue";
import { User,Lock } from "@element-plus/icons-vue";
import api from "@/api/index.js";
import { useLoginStore } from "@/stores/loginStore.js";
import { useRouter } from "vue-router";

// 登陆仓库对象
const loginStore = useLoginStore();
// 获取路由对象
const router = useRouter();

// 声明用户信息
const user = reactive({
    username: "",
    password: ""
});

/**
 * 登陆事件
 */
const handleLogin = () => {
    // console.log(user);
    api.getLogin({
        username: user.username,
        password: user.password,
    }).then(res => {
        // console.log(res.data);
        if (res.data.status === 200) {
            // // 登陆成功
            // loginStore.setToken(res.data.data.token);
            // loginStore.setUserInfo(res.data.data.userInfo);
            // // 跳转到首页
            // $router.push({ path: "/home" });
            loginStore.token = res.data.token
            loginStore.username = res.data.username
            loginStore.permission = res.data.permission
            // 登陆成功，提示成功信息
            ElMessage.success(res.data.msg);
            // 跳转到首页
            router.push({ path: "/" });
        } else {
            // 登陆失败，提示错误信息
            // $message.error(res.data.message);
            ElMessage.error(res.data.msg);
        }
    });
}

</script>


<style scoped>

.login-container {
    /* 这组参数挺好用 */
    display: flex;
    justify-content: right;
    align-items: center;
    height: 100vh;
    /* background-color: #f0f2f5; */
    background-image: url('../../assets/Apple_JingAn_Wallpaper_Mac.jpg'); 
    background-size: cover; 
    background-position: center;
}

.user {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title-container .title{
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
}

</style>