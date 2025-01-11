<template>
    <div class="personal-center">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <el-row>
            <el-col :span="24">
              <h1>个人中心</h1>
            </el-col>
          </el-row>
        </el-header>
  
        <!-- 主体区域 -->
        <el-main>
          <!-- 用户信息区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="user-info" :body-style="{ padding: '20px' }">
                <div slot="header" class="clearfix">
                  <span>用户信息</span>
                </div>
                <el-row>
                  <el-col :span="8">
                    <div class="info-item">
                      <div class="label">用户名</div>
                      <div class="value">{{ userInfo.username }}</div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="info-item">
                      <div class="label">邮箱</div>
                      <div class="value">{{ userInfo.email }}</div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="info-item">
                      <div class="label">注册时间</div>
                      <div class="value">{{ userInfo.registerTime }}</div>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <div class="info-item">
                      <div class="label">最后登录时间</div>
                      <div class="value">{{ userInfo.lastLoginTime }}</div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="info-item">
                      <div class="label">角色</div>
                      <div class="value">{{ userInfo.role }}</div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="info-item">
                      <div class="label">状态</div>
                      <div class="value">{{ userInfo.status }}</div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
  
          <!-- 账号设置区域 -->
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="account-settings" :body-style="{ padding: '20px' }">
                <div slot="header" class="clearfix">
                  <span>账号设置</span>
                </div>
                <el-form ref="accountForm" :model="accountForm" label-width="120px">
                  <el-form-item label="用户名">
                    <el-input v-model="accountForm.username" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="accountForm.email"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="accountForm.password" type="password"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input v-model="accountForm.confirmPassword" type="password"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="saveAccountSettings">保存设置</el-button>
                  </el-form-item>
                </el-form>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
  
        <!-- 底部区域 -->
        <el-footer>
          <el-row>
            <el-col :span="24">
              <p>版权所有 © 2025 个人中心系统</p>
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
        userInfo: {
          username: 'admin',
          email: 'admin@example.com',
          registerTime: '2025-01-01',
          lastLoginTime: '2025-01-10',
          role: '管理员',
          status: '正常'
        },
        accountForm: {
          username: 'admin',
          email: 'admin@example.com',
          password: '',
          confirmPassword: ''
        }
      };
    },
    methods: {
      saveAccountSettings() {
        // 保存账号设置的逻辑
        console.log('保存账号设置');
        if (this.accountForm.password !== this.accountForm.confirmPassword) {
          this.$message.error('两次输入的密码不一致');
          return;
        }
        this.$message.success('账号设置保存成功');
      }
    }
  };
  </script>
  
  <style scoped>
  .personal-center {
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
  
  .user-info, .account-settings {
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #ebeef5;
    border-radius: 5px;
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
  
  .el-form-item {
    margin-bottom: 20px;
  }
  
  .el-button {
    margin-top: 20px;
  }
  </style>