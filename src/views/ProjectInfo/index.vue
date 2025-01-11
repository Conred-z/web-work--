<template>
    <div class="project-basic-info">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <el-row>
            <el-col :span="24">
              <h1>项目基础信息</h1>
            </el-col>
          </el-row>
        </el-header>
  
        <!-- 主体区域 -->
        <el-main>
          <!-- 项目基础信息概览区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="info-overview" :body-style="{ padding: '0px' }">
                <div class="overview-content">
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">项目名称</div>
                        <div class="value">{{ projectInfo.name }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">项目编号</div>
                        <div class="value">{{ projectInfo.code }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">项目地点</div>
                        <div class="value">{{ projectInfo.location }}</div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">项目类型</div>
                        <div class="value">{{ projectInfo.type }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">建设单位</div>
                        <div class="value">{{ projectInfo.owner }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">施工单位</div>
                        <div class="value">{{ projectInfo.contractor }}</div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">设计单位</div>
                        <div class="value">{{ projectInfo.designer }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">监理单位</div>
                        <div class="value">{{ projectInfo.supervisor }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">开工日期</div>
                        <div class="value">{{ projectInfo.startDate }}</div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">预计竣工日期</div>
                        <div class="value">{{ projectInfo.endDate }}</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">项目总投资</div>
                        <div class="value">{{ projectInfo.totalInvestment }} 万元</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="info-item">
                        <div class="label">项目状态</div>
                        <div class="value">{{ projectInfo.status }}</div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
  
          <!-- 项目详细描述区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="info-details" :body-style="{ padding: '20px' }">
                <div slot="header" class="clearfix">
                  <span>项目详细描述</span>
                </div>
                <div>
                  <p><strong>项目背景：</strong>{{ projectInfo.background }}</p>
                  <p><strong>项目目标：</strong>{{ projectInfo.objective }}</p>
                  <p><strong>项目范围：</strong>{{ projectInfo.scope }}</p>
                  <p><strong>技术标准：</strong>{{ projectInfo.technicalStandards }}</p>
                  <p><strong>质量要求：</strong>{{ projectInfo.qualityRequirements }}</p>
                  <p><strong>安全措施：</strong>{{ projectInfo.safetyMeasures }}</p>
                  <p><strong>环保措施：</strong>{{ projectInfo.environmentalMeasures }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
  
        <!-- 底部区域 -->
        <el-footer>
          <el-row>
            <el-col :span="24">
              <p>版权所有 © 2025 项目管理系统</p>
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
        projectInfo: {
          name: 'Apple-铁路音视频系统',
          code: 'PJ20250101',
          location: '江西南昌',
          type: '建筑工程',
          owner: '中铁八局',
          contractor: '南昌六建',
          designer: '南昌市城市规划局',
          supervisor: '南昌市人民政府',
          startDate: '2025-01-01',
          endDate: '2026-12-31',
          totalInvestment: 50000,
          status: '在建',
          background: '本项目旨在改善某地区的基础设施条件，提升居民生活质量，促进当地经济发展。',
          objective: '建设一座高标准的现代化建筑，满足某特定功能需求，成为该地区的地标性建筑。',
          scope: '项目涵盖主体建筑工程、室内外装修工程、给排水工程、电气工程、暖通工程等。',
          technicalStandards: '遵循国家和地方相关技术规范和标准，采用先进的设计理念和技术手段。',
          qualityRequirements: '工程质量达到国家优质工程标准，各分项工程合格率100%，优良率90%以上。',
          safetyMeasures: '建立健全安全生产责任制，加强安全教育培训，配备完善的安全生产设施。',
          environmentalMeasures: '严格遵守环保法规，采取有效措施减少施工过程中的环境污染。'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .project-basic-info {
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
  
  .info-details p {
    margin: 10px 0;
    line-height: 1.6;
  }
  
  .info-details strong {
    font-weight: bold;
    color: #409eff;
  }
  </style>