<template>
    <div class="layout-container">
        <DrawerSettings @onToggleEvent="getToggleEvent"/>
        <SliderNavs :myToggle="myToggle"/>
        <div class="right-container" :style="{ marginLeft: menuStore.isCollapse ? '64px' : '210px' }">
            <TopNavs />
            <div class="content">
                <router-view></router-view>
            </div>
        </div>

    </div>
    
</template>
<script setup>

import SliderNavs from "@/components/SliderNavs/index.vue";
import TopNavs from "@/components/TopNavs/index.vue";
import { useMenuStore } from "@/stores/menuStore.js";
import { useLoginStore } from "@/stores/loginStore.js";
import { onMounted, ref } from "vue";
import api from "@/api/index.js";
import { useRouter } from "vue-router";
import manageRouter from "@/router/dynamicRoute.js";
import DrawerSettings from "@/components/DrawerSettings/index.vue";

const menuStore = useMenuStore();
const loginStore = useLoginStore();
const router = useRouter();

const myToggle = ref(false);

/**
 * 用户权限的数据获取
 */
onMounted(() => {
    api.getRouter({
        user: loginStore.permission
    }).then(res => {
        if (res.data.status === 200) {
            // console.log(res.data);
            menuStore.menus = res.data.menuData.menus;
            // 判断当前用户权限是否有权限访问当前页面
            if (loginStore.permission === "admin") {
                router.addRoute("layout", manageRouter);
            }
        }
        // }else{
        //     ElMessage.error(res.data.msg);
        // }
    }).catch(err => {
        console.log(err);
    });
});

const getToggleEvent = (data) => {
    myToggle.value = data;
};

</script>
<style scoped>

.right-container {
    margin-left: 210px;
    transition: 0.3s ease-in;
    /* height: 100%;
    background-color: #f0f2f5;
    padding: 20px; */
}

.content {
    padding: 10px;
    /* background-color: #f0f2f5;
    height: 100%; */
}

</style>