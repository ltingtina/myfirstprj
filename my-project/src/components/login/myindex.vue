<template>
    <div>
<el-container>
    <el-header>系统注册界面</el-header>
    <el-main>
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
   <el-form-item label="用户名"  prop="name">
    <el-input v-model.number="ruleForm2.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click.native.prevent="handleSubmit2" :loading="logining">注册</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</el-main>
</el-container>
    </div>
</template>>

<script>
  import {runAdduser} from "../../orjs/client.js"
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (String(value).length<4) {
            callback(new Error('用户名不能少于4位'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit2(ev) {
          var _this = this;
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    this.logining = true;
                    //用户信息
                    var loginParams = {
                        username: this.ruleForm2.name,
                        password: this.ruleForm2.checkPass,
                    };
          var rsdate = runAdduser(loginParams);
          if (rsdate["rcd"]=="100"){
              this.$alert('注册成功！将转到登录界面....', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({path: '/Login'})
            }});}
                else{
                  console.log(rsdate["msg"]);
                  return false;
                }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
    .el-header, .el-footer {
    background-color: #869ac0;
    color: #333;
    text-align: center;
    line-height: 60px;
  } 
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>