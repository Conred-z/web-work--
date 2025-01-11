<template>
    <div class="system-info-management">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <el-row>
            <el-col :span="24">
              <h1>系统信息管理</h1>
            </el-col>
          </el-row>
        </el-header>
  
        <!-- 主体区域 -->
        <el-main>
          <!-- 系统信息概览区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="info-overview" :body-style="{ padding: '0px' }">
                <div class="overview-content">
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">系统名称</div>
                        <div class="value">{{ systemInfo.name }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">系统版本</div>
                        <div class="value">{{ systemInfo.version }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">部署环境</div>
                        <div class="value">{{ systemInfo.environment }}</div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">数据库类型</div>
                        <div class="value">{{ systemInfo.databaseType }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">服务器地址</div>
                        <div class="value">{{ systemInfo.serverAddress }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">部署时间</div>
                        <div class="value">{{ systemInfo.deployTime }}</div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
  
          <!-- 系统详细配置区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="info-details" :body-style="{ padding: '20px' }">
                <div slot="header" class="clearfix">
                  <span>系统详细配置</span>
                </div>
                <el-table :data="systemDetails" style="width: 100%">
                  <el-table-column prop="configKey" label="配置项"></el-table-column>
                  <el-table-column prop="configValue" label="配置值"></el-table-column>
                  <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button type="text" @click="editConfig(scope.row)">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
  
        <!-- 底部区域 -->
        <el-footer>
          <el-row>
            <el-col :span="24">
              <p>版权所有 © 2025 系统信息管理系统</p>
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
        systemInfo: {
          name: '信息管理系统',
          version: '1.0.0',
          environment: '生产环境',
          databaseType: 'MySQL',
          serverAddress: '192.168.1.100',
          deployTime: '2025-01-01'
        },
        systemDetails: [
          { configKey: '最大连接数', configValue: '1000' },
          { configKey: '缓存大小', configValue: '512MB' },
          { configKey: '日志级别', configValue: 'INFO' },
          // 其他系统详细配置...
        ]
      };
    },
    methods: {
      editConfig(row) {
        // 编辑配置项的逻辑
        console.log('编辑配置项:', row.configKey);
      }
    }
  };
  </script>
  
  <style scoped>
  .system-info-management {
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
  
  .info-overview {
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
    margin-bottom: 5px;
  }
  
  .info-item .value {
    font-size: 16px;
    color: #303133;
    font-weight: bold;
  }
  
  .info-details {
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #ebeef5;
    border-radius: 5px;
  }
  
  .el-table {
    margin-top: 20px;
  }
  </style>