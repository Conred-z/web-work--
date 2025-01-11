<template>
    <div class="setting">
        <!-- 控制抽屉按钮 -->
        <el-button class="setting-btn" type="primary" @click="drawer = true">
            <el-icon class="setting-icon"><Setting /></el-icon>
        </el-button>

        <!-- 抽屉 -->
        <el-drawer
            v-model="drawer"
            title="Settings"
            :direction="direction"
            :before-close="handleClose"
            size="25%"
        >
            <el-icon><Promotion /></el-icon>
            <span class="logo-show">Logo: 开/关</span>
            <!-- <el-switch v-model="logoToggle" /> 方式一 -->
            <el-switch v-model="systemStore.toggleStore" />
        </el-drawer>
    </div>
</template>


<script setup>

import { ref, watch } from "vue";
import { useSystemStore } from "@/stores/systemStore.js";

const emit = defineEmits(["onToggleEvent"]);
const systemStore = useSystemStore();

const drawer = ref(false);
const logoToggle = ref(false);
watch(logoToggle, (newValue, oldValue) => {
    emit("onToggleEvent", newValue);
});

</script>


<style scoped>

.setting {
    position: fixed;
    right: 0;
    top: 300px;
    z-index: 100;
}

.setting-btn {
    background-color: #409EFF;
    border-color: #409EFF;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.setting-btn:hover {
    background-color: #66b1ff;
    border-color: #66b1ff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.setting-icon {
    font-size: 24px;
}

.logo-show {
    font-size: 20px;
    margin-right: 100px;
    margin-left: 10px;
    margin-bottom: 20px;
}



</style>