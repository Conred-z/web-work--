<template>
    <div class="geological-forecast">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <el-row>
          <el-col :span="24">
            <h1>超前地质预报</h1>
          </el-col>
        </el-row>
      </el-header>

      <!-- 主体区域 -->
      <el-main>
        <!-- 超前地质预报介绍区域 -->
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="forecast-introduction" :body-style="{ padding: '20px' }">
              <div slot="header" class="clearfix">
                <span>超前地质预报介绍</span>
              </div>
              <div>
                <p>超前地质预报是隧道施工中一项至关重要的工作，通过各种技术手段对隧道前方的地质条件进行预测和评估，为施工方案的制定和调整提供科学依据，确保施工安全和工程质量。</p>
                <p>本系统采用多种先进的地质预报方法，结合实地勘察数据，实时更新地质信息，为隧道施工提供全方位的地质保障。</p>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 地质预报图表区域 -->
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="forecast-chart" :body-style="{ padding: '0px' }">
              <div slot="header" class="clearfix">
                <span>地质预报图表</span>

                <div class="china" id="china"></div>

              </div>
              <div class="chart-container" ref="chartContainer"></div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 操作按钮区域 -->
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="button-group">
              <el-button type="primary" @click="startForecast">开始预报</el-button>
              <el-button type="success" @click="viewReport">查看报告</el-button>
              <el-button type="warning" @click="updateData">更新数据</el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>

      <!-- 底部区域 -->
      <el-footer>
        <el-row>
          <el-col :span="24">
            <p>版权所有 © 2025 超前地质预报子系统</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>
  

<script setup>

import { getCurrentInstance, onMounted } from "vue"

const { proxy } = getCurrentInstance()

onMounted(() =>{
  proxy.$china("china")
})

</script>
  

<style scoped>
.china{
    width: 1200px;
    height: 750px;
    background-color: #fff;
}
.geological-forecast {
  height: 100%;
  background-color: #f7f7f7;
}

.el-header {
  background-color: #409eff;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: #409eff;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-main {
  padding: 20px;
}

.forecast-introduction {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #ebeef5;
  border-radius: 5px;
}

.forecast-chart {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #ebeef5;
  border-radius: 5px;
}

.chart-container {
  width: 100%;
  height: 500px;
}

.button-group {
  text-align: center;
  margin-bottom: 20px;
}
</style>