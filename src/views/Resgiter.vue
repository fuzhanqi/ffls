<template>
  <div>
    <div id="resgiter">
      <div class="card">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <router-link to="/">
              <i class="el-icon-arrow-left" style="float:left"></i>
            </router-link>

            <span class="span-tit">欢迎来到注册界面</span>
            <span class="span"
              ><router-link to="/login">登录</router-link></span
            >
          </div>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            label-position="right"
          >
            <el-form-item label="用户名:" prop="username">
              <el-input
                v-model="ruleForm.username"
                autocomplete="off"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录密码:" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                placeholder="请再次确认密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号:" prop="phone">
              <el-input
                autocomplete="off"
                v-model="ruleForm.phone"
                placeholder="+86"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱:" prop="email">
              <el-input
                type="email"
                v-model="ruleForm.email"
                autocomplete="off"
                placeholder="邮箱地址"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >免费注册</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>
<style scoped>
#resgiter {
  width: 50%;
  margin: 0 auto;
}
.card {
  display: block;
  text-align: center;
}
#resgiter .checkbox {
  display: block;
  float: left;
  margin-left: 25px;
  margin-bottom: 10px;
  font-size: 12px;
}
.span {
  display: inline;
  float: right;
}
</style>
<script>
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("用户名不能为空"));
      } else {
        if (/^[0-9A-Za-z\u4e00-\u9fa5]{1,16}$/.test(value) == false) {
          callback(new Error("请输入正确的格式"));
        } else {
          callback();
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        if (/^[0-9QA-Za-z]{8,16}$/.test(value) == false) {
          callback(new Error("请输入正确密码格式"));
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkPhone = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入手机号"));
      } else {
        if (/^1[3-9]\d{9}$/.test(value) == false) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }
    };
    var checkEmail = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入邮箱号"));
      } else {
        if (/^\w+@\w+\.(com|cn)$/.test(value) == false) {
          callback(new Error("请输入正确的邮箱格式"));
        } else {
          callback();
        }
      }
    };
    return {
      // checked:true,
      ruleForm: {
        pass: "",
        checkPass: "",
        username: "",
        phone: "",
        email: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: ["blur", "change"] }],
        checkPass: [{ validator: validatePass2, trigger: ["blur", "change"] }],
        username: [{ validator: checkUsername, trigger: ["blur", "change"] }],
        phone: [{ validator: checkPhone, trigger: ["blur", "change"] }],
        email: [{ validator: checkEmail, trigger: ["blur", "change"] }],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // console.log(valid);
        if (valid) {
          this.axios
            .post(
              "/resgiter",
              "username=" +
                this.ruleForm.username +
                "&password=" +
                this.ruleForm.pass +
                "&phone=" +
                this.ruleForm.phone +
                "&email=" +
                this.ruleForm.email
            )
            .then((res) => {
              if (res.data.code == 201) {
                this.$message("用户已存在");
              }
              if (res.data.code == 200) {
                this.$router.push("/");
              }
            });
        }
      });
    },
  },
};
</script>
