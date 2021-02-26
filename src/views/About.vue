<template>

  <div>
    <my-header></my-header>
    <div id="about">
      <div id="about-first">
        <el-breadcrumb separator-class="el-icon-arrow-left">
          <el-breadcrumb-item>
            <router-link to="/">
              首页
            </router-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <router-link to="/">
              关于我们
            </router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div id="about-second">
        <div id="elrow" v-for="(v, i) of infro.length" :key="i">
          <el-row :gutter="50">
            <el-col :sm="24" :lg="12">
              <div class="grid-content bg-purple">
                <img
                  class="imgI"
                  :src="
                    require(`../../public/img/assets/image/aboutImg/${infro[i].image}`)
                  "
                  alt
                />
              </div>
            </el-col>
            <el-col :sm="24" :lg="12" class="el_col">
              <el-row>
                <el-col :span="24" class="zi1">{{ infro[i].branch }}</el-col>
                <el-col :span="24" class="zi2"
                  >电话: {{ infro[i].phone }}</el-col
                >
                <el-col :span="24" class="zi2"
                  >传真: {{ infro[i].email }}</el-col
                >
                <el-col :span="24" class="zi2"
                  >邮编: {{ infro[i].postcode }}</el-col
                >
                <el-col :span="24" class="zi2"
                  >地址: {{ infro[i].address }}</el-col
                >
              </el-row>
            </el-col>
          </el-row>
        </div>
        <p class="about-p">全国加盟热线及邮箱</p>
        <p class="about-p">XXXXXX</p>
        <p class="about-p">E-mail:XXX</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
#about {
  margin: 0 220px 0 220px;
  padding-top: 20px;
}
#about-first {
  margin-top: 10px;
}
#about .el_col {
  text-align: left;
}
span {
  font-size: 16px;
  color: #666;
  font-weight: bold;
}
.el-breadcrumb__separator {
  color: #666666 !important;
}
a.router-link-active {
  color: #666666;
  font-weight: bold;
  cursor: pointer;
}
a:hover {
  color: #409eff;
  cursor: pointer;
  font-weight: bold;
}
#about-second {
  margin: 50px auto 0;
}
.imgI {
  margin-left: 18px;
}
.zi1 {
  color: #000000;
  font-size: 26px;
  margin: 0 0 20px;
}
.zi2 {
  color: #000000;
  font-size: 18px;
  height: 30px;
}
#elrow {
  border-bottom: 1px solid #dcdcdc;
  margin-top: 14px;
  padding-bottom: 14px;
}
.about-p {
  color: #000000;
  font-size: 20px;
  margin: 20px 0 0;
  text-align: center;
}
#about .el-icon-arrow-left:before {
  color: #000 !important;
}
</style>
<script>
export default {
  data() {
    return {
      //变量存数据
      infro: [],
    };
  },
  mounted() {
    this.axios.get("/abouts").then((res) => {
      // 获取服务器返回的结果
      let results = res.data.results;
      // 将服务器返回结果存储到data中的infro变量中
      this.infro = results;
    });
  },
};
</script>
