<template>
    <div class="slider-navs" :style="{ width: menuStore.isCollapse ? '64px' : '210px' }">
        <!-- <div v-show="myToggle" class="logo">{{ menuStore.isCollapse ? '铁路' : "铁路音视频系统" }}</div> 方式一 -->
        <div v-show="systemStore.toggleStore" class="logo">{{ menuStore.isCollapse ? '铁路' : "铁路音视频系统" }}</div>
        <el-menu
            background-color="#304156"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="active"
            router
            :collapse="menuStore.isCollapse"
            class="el-menu-vertical-demo"
        >

            <!-- 循环生成视图，不会增加页面结构 -->
            <template v-for="(item, index) in menuStore.menus" :key="index">
                <!--有子菜单-->
                <el-sub-menu v-if="item.children" :index="item.path"><!--这里很奇怪，如果不加index="item.path"就会报错-->
                    <template #title>
                        <component class="icon" :is="item.icon"></component>
                        <span>{{ item.name }}</span>
                    </template>

                    <el-menu-item :index="childItem.path" v-for="(childItem, childIndex) in item.children" :key="childIndex">
                        <span>{{ childItem.name }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <!--没有子菜单-->
                <el-menu-item v-else :index="item.path">
                    <!-- 静态渲染 -->
                    <!-- <el-icon><House /></el-icon> -->

                    <!-- 动态渲染 -->
                    <component class="icon" :is="item.icon"></component>
                    <span>{{ item.name }}</span>
                </el-menu-item>

            </template>


            <!-- <el-menu-item index="/project">
                <el-icon><Connection /></el-icon>
                <span>项目基础信息</span>
            </el-menu-item>

            <el-menu-item index="/tunnel">
                <el-icon><MessageBox /></el-icon>
                <span>铁路设计信息</span>
            </el-menu-item>

            <el-menu-item index="/work">
                <el-icon><ChatSquare /></el-icon>
                <span>工作监督管理</span>
            </el-menu-item>

            <el-menu-item index="/build">
                <el-icon><Discount /></el-icon>
                <span>施工监控检测</span>
            </el-menu-item>

            <el-menu-item index="/geological">
                <el-icon><Pointer /></el-icon>
                <span>超前地质预报</span>
            </el-menu-item>

            <el-menu-item index="/system">
                <el-icon><Setting /></el-icon>
                <span>系统信息管理</span>
            </el-menu-item> -->


        </el-menu>

    </div>
</template>

<script setup>
import { ref } from "vue";
import { useMenuStore } from "@/stores/menuStore.js";
import { useSystemStore } from "@/stores/systemStore.js";

const active = ref("/");    // 刷新页面后的页面
const menuStore = useMenuStore();
const systemStore = useSystemStore();
const props = defineProps({
    myToggle:{
        type: Boolean,
        default: false
    }
});

// console.log(menuStore.menus);

/**
 * 修复刷新页面后，菜单栏的选中状态
 */
if(localStorage.getItem("active")){
    active.value = localStorage.getItem("active");
}

</script>

<style scoped>
.slider-navs {
    /* 两种写法 */

    /***写法一***/
    /* width: 200px;
    height: 100%;
    background-color: #304156;
    color: #fff;
    overflow-y: auto; */

    /***写法二***/
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 210px;
    background-color: #304156;
    transition: 0.3s ease-in;
}

.logo {
    /* height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #fff; */
    width: 100%;
    height: 60px;
    background-color: #364e6d;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height: 60px;
}

.icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
</style>