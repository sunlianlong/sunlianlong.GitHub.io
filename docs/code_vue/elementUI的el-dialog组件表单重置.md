---
title: elementUI的el-dialog组件表单重置
date: 2019-08-27 09:30:00
tags:
  - vue
categories:
  - 代码
---
 2019/08/27 14:49 

表单新增和修改共用一套，需要在关闭时重置表单，两种解决方案。
1.before-close重置表单后初始化数据，新增表单只控制显示
```
<template>
  <div class='user'>
      <el-dialog :title="addDeptForm.title" :visible.sync="addDeptForm.adCategoryAddVisible" :before-close="closeDialog">
        <el-form :model="addDeptForm" :rules="addDeptRules" ref="addDeptForm" label-width="110px" style="margin-top: 10px; margin-left: 40px;" class="demo-ruleForm">
          <el-form-item label="审核白名单: " prop="whitelist">
            <el-input type="text" v-model="addDeptForm.whitelist" autocomplete="off" placeholder="审核白名单" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="adCategoryAddSubmit('addDeptForm')">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'whiteList',
  data() {
    var validatorDesc = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入白名单'));
        } else {
          if (/[\u4E00-\u9FA5]/g.test(value)) {
            callback(new Error('白名单不能输入汉字'));
          }else if(/^\s*$/.test(value)){
            callback(new Error('白名单不能为空'));
          }else if(!/^.{1,20}$/.test(value)){
            callback(new Error('白名单只能输入1-26位'));
          }else{
            callback();
          }
        }
    };
    return {
      // 新增校验规则
      addDeptRules:{
          whitelist: [
            {required: true,trigger: "change",validator:validatorDesc }
          ],
      },
      // 新增数据
      addDeptForm:{
        title:'',
        adCategoryAddVisible:false,
        whitelist:''
      },
    }
  },
  methods: {
    // 新增操作
    handleAdd(){
      this.addDeptForm.title = "新增";
      this.addDeptForm.adCategoryAddVisible = true;
    },
    // 修改
    handleEdit(){
     this.addDeptForm.title = "修改";
     this.addDeptForm.id = 1;
     this.addDeptForm.whitelist = "黑涩会";
     this.addDeptForm.adCategoryAddVisible = true; 
    },
    // 新增修改弹窗确定按钮
    adCategoryAddSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("校验通过")
        } else {
          this.$message.error('输入格式不正确');
          return false;
        }
      });
    },
    // 关闭并重置弹窗
    closeDialog(){
      this.addDeptForm.adCategoryAddVisible = false;
      this.$refs.addDeptForm.resetFields();
      this.addDeptForm.whitelist = '';
    },
  },
}
</script>
```

2. before-close只重置表单，新增表单时初始化数据，el-dialog增加v-if属性销毁form表单
```
<template>
  <div class='user'>
      <el-dialog :title="addDeptForm.title" :visible.sync="addDeptForm.adCategoryAddVisible" v-if="addDeptForm.adCategoryAddVisible" :before-close="closeDialog">
        <el-form :model="addDeptForm" :rules="addDeptRules" ref="addDeptForm" label-width="110px" style="margin-top: 10px; margin-left: 40px;" class="demo-ruleForm">
          <el-form-item label="审核白名单: " prop="whitelist">
            <el-input type="text" v-model="addDeptForm.whitelist" autocomplete="off" placeholder="审核白名单" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="adCategoryAddSubmit('addDeptForm')">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'whiteList',
  data() {
    var validatorDesc = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入白名单'));
        } else {
          if (/[\u4E00-\u9FA5]/g.test(value)) {
            callback(new Error('白名单不能输入汉字'));
          }else if(/^\s*$/.test(value)){
            callback(new Error('白名单不能为空'));
          }else if(!/^.{1,20}$/.test(value)){
            callback(new Error('白名单只能输入1-26位'));
          }else{
            callback();
          }
        }
    };
    return {
      // 新增校验规则
      addDeptRules:{
          whitelist: [
            {required: true,trigger: "change",validator:validatorDesc }
          ],
      },
      // 新增数据
      addDeptForm:{
        title:'',
        adCategoryAddVisible:false,
        whitelist:''
      },
    }
  },
  methods: {
    // 新增操作
    handleAdd(){
      this.addDeptForm.title = "新增";
      this.addDeptForm.whitelist = '';
      this.addDeptForm.adCategoryAddVisible = true;
    },
    // 修改
    handleEdit(){
     this.addDeptForm.title = "修改";
     this.addDeptForm.id = 1;
     this.addDeptForm.whitelist = "黑涩会";
     this.addDeptForm.adCategoryAddVisible = true; 
    },
    // 新增修改弹窗确定按钮
    adCategoryAddSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("校验通过")
        } else {
          this.$message.error('输入格式不正确');
          return false;
        }
      });
    },
    // 关闭并重置弹窗
    closeDialog(){
      this.addDeptForm.adCategoryAddVisible = false;
      this.$refs.addDeptForm.resetFields();
    },
  },
}
</script>
```