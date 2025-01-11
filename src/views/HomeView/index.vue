<template>
    <div class="card">
        <div class="box">
            <el-icon class="box-icon"><HelpFilled /></el-icon>
            <span class="box-title">正常运行: 1000</span>
        </div>
        <div class="box">
            <el-icon class="box-icon"><InfoFilled /></el-icon>
            <span class="box-title">检验路面: 10</span>
        </div>
        <div class="box">
            <el-icon class="box-icon"><Place /></el-icon>
            <span class="box-title">正在施工: 3</span>
        </div>
        <div class="box">
            <el-icon class="box-icon"><MapLocation /></el-icon>
            <span class="box-title">地质预报: 5000</span>
        </div>
    </div>
    <div class="line" id="line"></div>
    <div class="charts">
        <div class="charts-radar" id="charts-radar"></div>
        <div class="charts-rose" id="charts-rose"></div>
        <div class="charts-bar" id="charts-bar"></div>
    </div>
</template>


<script setup>

import { getCurrentInstance, onMounted } from "vue"
import api from "@/api/index.js"

const { proxy } = getCurrentInstance()

onMounted(() => {
    api.getLine().then(res =>{
        if(res.data.status === 200){
            proxy.$line("line", res.data.result.lines)
        }
    }).catch(error =>{
        console.log(error)
    })
    // 加载图表
    proxy.$radar("charts-radar")
    proxy.$rose("charts-rose")
    proxy.$bar("charts-bar")
})

</script>


<style scoped>

/* .card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px;
}

.card .box{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.card .box .box-icon{
    font-size: 30px;
    color: #409EFF;
} */

.card{
    display: flex;
}

.card .box{
    flex:1;
    height: 130px;
    margin: 20px;
    padding: 20px;
    background: #fff;
}

.card .box .box-icon{
    display: block;
    font-size: 50px;
    color: #409EFF;
    line-height: 130px;
    float: left;
    padding-left: 20px;
}

.card .box:nth-child(1){
    margin-left: 0;
}

.card .box:nth-child(4){
    margin-right: 0;
}

.box-title{
    display: block;
    font-size: 20px;
    color: #666;
    line-height: 130px;
    float: right;
    padding-right: 20px;
}

.line{
    width: 100%;
    height: 300px;
    background-color: #fff;
}

.charts{
    display: flex;
}

.charts div{
   flex:1;
   height: 450px;
   margin: 20px;
   padding: 10px;
   background-color: #fff; 
}

.charts div:nth-child(1){
    margin-left: 0;
}

.charts div:nth-child(3){
    margin-right: 0;
}

</style>