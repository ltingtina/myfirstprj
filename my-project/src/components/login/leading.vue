<template>
    <div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to='/HelloWorld'>系统介绍</router-link></el-menu-item>
  <el-button type="text" @click="dialogFormVisible = true">注册</el-button>
  <el-dialog title="用户注册" :visible.sync="dialogFormVisible">
<el-form :model="form">
   <el-form-item label="用户名" :label-width="formLabelWidth">
    <el-input v-model="form.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" :label-width="formLabelWidth">
    <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" :label-width="formLabelWidth">
    <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
   <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
  <el-menu-item v-show="true" index="2" ><router-link to='/Login'>登录</router-link></el-menu-item>
  <el-menu-item v-show="true" index="3"><router-link to='/myindex'>注册</router-link></el-menu-item>
</el-menu>
    </div>
    
</template>
<script>
  export default {
    data() {
      return{
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          pass: '',
          checkPass: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
  }
  }
</script>

