<template>
    <div class="section-inspection">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <el-row>
            <el-col :span="24">
              <h1>施工监控检测 - 切面检测</h1>
            </el-col>
          </el-row>
        </el-header>
  
        <!-- 主体区域 -->
        <el-main>
          <!-- 介绍文字区域 -->
          <el-row>
            <el-col :span="24">
              <div class="introduction">
                <h2>切面检测介绍</h2>
                <p>切面检测是施工监控检测的重要组成部分，主要针对施工过程中的关键切面进行质量检测。通过对切面的尺寸、平整度、强度等指标的检测，可以及时发现潜在的质量问题，确保施工质量符合设计要求和相关标准。</p>
                <p>本页面展示了切面检测的相关信息，包括切面列表、检测数据等。您可以查看每个切面的详细检测结果，也可以通过按钮进行相应的操作。</p>
              </div>
            </el-col>
          </el-row>
  
          <!-- 切面检测按钮区域 -->
          <el-row>
            <el-col :span="24">
              <div class="button-group">
                <el-button type="primary" @click="addSection">新增切面</el-button>
                <el-button type="success" @click="startInspection">开始检测</el-button>
                <el-button type="warning" @click="viewReport">查看报告</el-button>
              </div>
            </el-col>
          </el-row>
  
          <!-- 切面列表区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="section-list">
                <div slot="header" class="clearfix">
                  <span>切面列表</span>
                </div>
                <el-table :data="sectionList" style="width: 100%">
                  <el-table-column prop="id" label="编号" width="80"></el-table-column>
                  <el-table-column prop="name" label="切面名称"></el-table-column>
                  <el-table-column prop="location" label="位置"></el-table-column>
                  <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                      <el-tag :type="scope.row.status === '正常' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button type="text" @click="viewSectionDetail(scope.row)">查看</el-button>
                      <el-button type="text" @click="editSection(scope.row)">编辑</el-button>
                      <el-button type="text" @click="deleteSection(scope.row)">删除</el-button>
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
              <p>版权所有 © 2025 施工监控检测系统</p>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
  
      <!-- 新增切面对话框 -->
      <el-dialog title="新增切面" :visible.sync="addDialogVisible" width="50%">
        <el-form ref="addForm" :model="addForm" label-width="100px">
          <el-form-item label="切面名称">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
          <el-form-item label="位置">
            <el-input v-model="addForm.location"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="addForm.status" placeholder="请选择状态">
              <el-option label="正常" value="正常"></el-option>
              <el-option label="异常" value="异常"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitAdd">确 定</el-button>
        </span>
      </el-dialog>
  
      <!-- 查看切面详情对话框 -->
      <el-dialog title="切面详情" :visible.sync="detailDialogVisible" width="50%">
        <el-form :model="detailForm" label-width="100px">
          <el-form-item label="切面名称">
            <el-input v-model="detailForm.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="位置">
            <el-input v-model="detailForm.location" disabled></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-tag :type="detailForm.status === '正常' ? 'success' : 'danger'">{{ detailForm.status }}</el-tag>
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
        sectionList: [
          { id: 1, name: '切面1', location: '位置1', status: '正常' },
          { id: 2, name: '切面2', location: '位置2', status: '异常' },
          // 其他切面数据...
        ],
        addDialogVisible: false,
        addForm: {
          name: '',
          location: '',
          status: ''
        },
        detailDialogVisible: false,
        detailForm: {}
      };
    },
    methods: {
      addSection() {
        this.addDialogVisible = true;
      },
      submitAdd() {
        // 提交新增切面数据的逻辑...
        this.addDialogVisible = false;
      },
      viewSectionDetail(row) {
        this.detailForm = { ...row };
        this.detailDialogVisible = true;
      },
      editSection(row) {
        // 编辑切面数据的逻辑...
      },
      deleteSection(row) {
        // 删除切面数据的逻辑...
      },
      startInspection() {
        // 开始检测的逻辑...
      },
      viewReport() {
        // 查看报告的逻辑...
      }
    }
  };
  </script>
  
  <style scoped>
  .section-inspection {
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
  
  .button-group {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .section-list {
    margin-bottom: 20px;
  }
  
  .el-dialog {
    text-align: left;
  }
  </style>