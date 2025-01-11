<template>
    <div class="work-supervision">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <el-row>
            <el-col :span="24">
              <h1>工作监督管理</h1>
            </el-col>
          </el-row>
        </el-header>
  
        <!-- 主体区域 -->
        <el-main>
          <!-- 工作监督管理概览区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="supervision-overview" :body-style="{ padding: '0px' }">
                <div class="overview-content">
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">监督部门</div>
                        <div class="value">{{ supervisionInfo.department }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">负责人</div>
                        <div class="value">{{ supervisionInfo.personInCharge }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">联系电话</div>
                        <div class="value">{{ supervisionInfo.contactNumber }}</div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">监督范围</div>
                        <div class="value">{{ supervisionInfo.scope }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">监督方式</div>
                        <div class="value">{{ supervisionInfo.methods }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">监督频率</div>
                        <div class="value">{{ supervisionInfo.frequency }}</div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
  
          <!-- 工作监督管理详细描述区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="supervision-details" :body-style="{ padding: '20px' }">
                <div slot="header" class="clearfix">
                  <span>工作监督管理详细描述</span>
                </div>
                <div>
                  <p><strong>监督目的：</strong>{{ supervisionInfo.purpose }}</p>
                  <p><strong>监督内容：</strong>{{ supervisionInfo.content }}</p>
                  <p><strong>监督流程：</strong>{{ supervisionInfo.process }}</p>
                  <p><strong>监督标准：</strong>{{ supervisionInfo.standards }}</p>
                  <p><strong>问题处理：</strong>{{ supervisionInfo.issueHandling }}</p>
                  <p><strong>记录与报告：</strong>{{ supervisionInfo.recordAndReport }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
  
        <!-- 底部区域 -->
        <el-footer>
          <el-row>
            <el-col :span="24">
              <p>版权所有 © 2025 工作监督管理系统</p>
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
        supervisionInfo: {
          department: '监督管理部',
          personInCharge: '张三',
          contactNumber: '123-4567-8901',
          scope: '项目全生命周期内的各项工作流程',
          methods: '现场检查、文件审查、会议监督、人员访谈等',
          frequency: '每周至少一次全面检查，不定期抽查',
          purpose: '确保各项工作按照既定计划和标准执行，及时发现并解决问题，提升工作效率和质量',
          content: '包括但不限于项目进度监督、质量监督、成本监督、安全监督、人员行为监督等',
          process: '制定监督计划 -> 实施监督检查 -> 发现问题记录 -> 反馈与整改 -> 效果评估 -> 形成报告',
          standards: '依据国家相关法律法规、行业标准、公司内部规章制度以及项目合同要求等',
          issueHandling: '对发现的问题进行分类、记录，并及时反馈给责任部门或个人，督促其限期整改，对重大问题进行专项跟踪',
          recordAndReport: '详细记录每次监督活动的情况，包括时间、地点、参与人员、发现问题及处理结果等，定期形成监督报告，上报管理层'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .work-supervision {
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
  
  .supervision-overview {
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
  
  .supervision-details {
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #ebeef5;
    border-radius: 5px;
  }
  
  .supervision-details p {
    margin: 10px 0;
    line-height: 1.6;
  }
  
  .supervision-details strong {
    font-weight: bold;
    color: #409eff;
  }
  </style>