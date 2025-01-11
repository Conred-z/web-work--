<template>
    <div class="tunnel-design-info">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <el-row>
            <el-col :span="24">
              <h1>隧道设计信息</h1>
            </el-col>
          </el-row>
        </el-header>
  
        <!-- 主体区域 -->
        <el-main>
          <!-- 隧道设计信息概览区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="design-overview" :body-style="{ padding: '0px' }">
                <div class="overview-content">
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">隧道名称</div>
                        <div class="value">{{ designInfo.name }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">隧道长度</div>
                        <div class="value">{{ designInfo.length }} 米</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">设计速度</div>
                        <div class="value">{{ designInfo.speed }} 公里/小时</div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">隧道类型</div>
                        <div class="value">{{ designInfo.type }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">衬砌类型</div>
                        <div class="value">{{ designInfo.linings }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">设计荷载</div>
                        <div class="value">{{ designInfo.load }}</div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
  
          <!-- 隧道设计详细信息区域 -->
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card class="design-details" :body-style="{ padding: '20px' }">
                <div slot="header" class="clearfix">
                  <span>设计详细信息</span>
                </div>
                <el-table :data="designDetails" style="width: 100%">
                  <el-table-column prop="item" label="项目"></el-table-column>
                  <el-table-column prop="value" label="值"></el-table-column>
                  <el-table-column prop="unit" label="单位"></el-table-column>
                </el-table>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="design-details" :body-style="{ padding: '20px' }">
                <div slot="header" class="clearfix">
                  <span>设计图纸</span>
                </div>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item, index) in designImages" :key="index">
                    <img :src="item" alt="设计图纸" style="width: 100%; height: 100%;">
                  </el-carousel-item>
                </el-carousel>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
  
        <!-- 底部区域 -->
        <el-footer>
          <el-row>
            <el-col :span="24">
              <p>版权所有 © 2025 隧道设计系统</p>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        designInfo: {
          name: '南昌大桥跨江隧道二期',
          length: 1000,
          speed: 80,
          type: '公路隧道',
          linings: '复合式衬砌',
          load: '公路-I级'
        },
        designDetails: [
          { item: '净宽', value: '9', unit: '米' },
          { item: '净高', value: '5', unit: '米' },
          { item: '纵坡', value: '3', unit: '%' },
          { item: '曲线半径', value: '1000', unit: '米' },
          // 其他设计详细信息...
        ],
        designImages: [
          'src/assets/pic1.JPG',
          'src/assets/pic2.JPG',
          'src/assets/pic3.JPG'
          // 其他设计图纸图片...
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .tunnel-design-info {
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
  
  .design-overview {
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #ebeef5;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .overview-content {
    padding: 20px;
  }
  
  .info-item {
    margin-bottom: 15px;
  }
  
  .info-item .label {
    font-size: 14px;
    color: #909399;
  }
  
  .info-item .value {
    font-size: 16px;
    color: #303133;
    font-weight: bold;
  }
  
  .design-details {
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #ebeef5;
    border-radius: 5px;
  }
  
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>