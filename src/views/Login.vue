<template>
  <div>
    <div id="resgiter">
      <div class="card">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="span-tit">登录系统</span>
            <span class="span"
              ><router-link to="/resgiter">注册</router-link></span
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
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录密码:" prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即登录</el-button
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
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        if (/^[0-9QA-Za-z]{8,16}$/.test(value) == false) {
          callback(new Error("请输入正确密码"));
        }
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        username: "",
      },
      rules: {
        password: [{ validator: checkPass, trigger: ["blur", "change"] }],
        username: [{ validator: checkUsername, trigger: ["blur", "change"] }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post(
              "/login",
              "username=" +
                this.ruleForm.username +
                "&password=" +
                this.ruleForm.password
            )
            .then((res) => {
              if (res.data.code == 201) {
                this.$confirm("登录失败,是否注册新用户", "提示信息")
                  .then(() => {
                    this.$router.push("/resgiter");
                  })
                  .catch((error) => {});
              }
              if (res.data.code == 200) {
                this.$store.commit("loginMutation", res.data.info);
                localStorage.setItem("islogined", 1);
                localStorage.setItem("info", JSON.stringify(res.data.info));
                this.$router.push("/");
              }
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
