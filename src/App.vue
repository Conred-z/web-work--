<template>
  <RouterView />
</template>


<script setup>
import { RouterView } from 'vue-router'

</script>


<style>
/* 公共样式 */

body, html, #app {
  height: 100%;
  /* margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif; */
}

/* 去掉element menu 的右侧边框 */
.el-menu{
  border-right: 0 !important;
}
</style>