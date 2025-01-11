<template>
    <div class="inspection-info">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <el-row>
            <el-col :span="24">
              <h1>施工监控检测 - 检测信息</h1>
            </el-col>
          </el-row>
        </el-header>
  
        <!-- 主体区域 -->
        <el-main>
          <!-- 介绍文字区域 -->
          <el-row>
            <el-col :span="24">
              <div class="introduction">
                <h2>检测信息介绍</h2>
                <p>本页面展示了施工过程中的各项检测信息，包括但不限于结构检测、材料检测、环境检测等。通过这些详细的检测数据，可以实时监控施工质量，确保工程符合相关标准和规范。</p>
                <p>检测信息会定期更新，以便项目管理人员和施工人员及时了解施工状况，采取相应的措施。同时，也方便监管部门进行监督检查。</p>
              </div>
            </el-col>
          </el-row>
  
          <!-- 检测信息列表区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="inspection-list">
                <div slot="header" class="clearfix">
                  <span>检测信息列表</span>
                </div>
                <el-table :data="inspectionList" style="width: 100%">
                  <el-table-column prop="id" label="编号" width="80"></el-table-column>
                  <el-table-column prop="type" label="检测类型"></el-table-column>
                  <el-table-column prop="item" label="检测项目"></el-table-column>
                  <el-table-column prop="result" label="检测结果"></el-table-column>
                  <el-table-column prop="date" label="检测日期"></el-table-column>
                  <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button type="text" @click="viewDetail(scope.row)">查看</el-button>
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
              <p>版权所有 © 2025 施工监控检测子系统</p>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
  
      <!-- 查看检测详情对话框 -->
      <el-dialog title="检测详情" :visible.sync="detailDialogVisible" width="50%">
        <el-form :model="detailForm" label-width="120px">
          <el-form-item label="检测类型">
            <el-input v-model="detailForm.type" disabled></el-input>
          </el-form-item>
          <el-form-item label="检测项目">
            <el-input v-model="detailForm.item" disabled></el-input>
          </el-form-item>
          <el-form-item label="检测结果">
            <el-input v-model="detailForm.result" disabled></el-input>
          </el-form-item>
          <el-form-item label="检测日期">
            <el-input v-model="detailForm.date" disabled></el-input>
          </el-form-item>
          <el-form-item label="详细描述">
            <el-input type="textarea" v-model="detailForm.description" disabled></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关 闭</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inspectionList: [
          { id: 1, type: '结构检测', item: '混凝土强度', result: '合格', date: '2025-01-01' },
          { id: 2, type: '材料检测', item: '钢筋直径', result: '不合格', date: '2025-01-02' },
          // 其他检测信息数据...
        ],
        detailDialogVisible: false,
        detailForm: {}
      };
    },
    methods: {
      viewDetail(row) {
        this.detailForm = { ...row, description: '这里是详细描述...' };
        this.detailDialogVisible = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .inspection-info {
    height: 100%;
  }
  
  .el-header {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    padding: 20px;
  }
  
  .introduction {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }
  
  .inspection-list {
    margin-bottom: 20px;
  }
  
  .el-dialog {
    text-align: left;
  }
  </style>