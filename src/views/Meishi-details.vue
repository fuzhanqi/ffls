<template>
<div>
  <my-header></my-header>
  <div class="Meishi-details">
    <div class="mianbao">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/meishi">活动管理</router-link></el-breadcrumb-item>
        <el-breadcrumb-item>美食系列</el-breadcrumb-item>        
      </el-breadcrumb>
    </div>
    <el-row :gutter="10">
      <el-col :sm="24" :lg="12"
        ><div class="wenben">
          <h2 class="bianti">{{ review.subject }}</h2>
          <div id="neirong_p" v-html="review.content"></div></div
      ></el-col>
      <el-col :sm="24" :lg="12"
        ><div class="tupian">
          <div class="biaoqian">
            <p class="biaoqian_p">50% Off</p>
          </div>
          <img
            class="img_mei"
            :src="`/img/Meishi_details.img/${review.image}`"
          /></div
      ></el-col>
    </el-row>
    <div>
      <el-row>
        <el-button round
          ><router-link to="/meishi" class="router_a">
            返回列表页</router-link
          ></el-button
        >
      </el-row>
    </div>
  </div>
  <my-footer></my-footer>
  </div>
</template>
<style>
.Meishi-details .router_a {
  text-decoration: none;
  color: #533336;
}
.Meishi-details .el-button {
  border: 2px solid #533336;
  margin: 80px;
  padding: 20px 50px 20px 50px;
  font-size: 24px;
  font-weight: 400;
  border-radius: 50px;
}
.Meishi-details .el-button:hover {
  color: #533336;
  background-color: #ffffff;
}
.Meishi-details .mianbao {
  margin-bottom: 20px;
  color: #666;
  font-size: 16px;
}
.Meishi-details .biaoqian .biaoqian_p {
  font-family: "Segoe Print", serif;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 600;
  color: #ffffff;
  font-size: 30px;
}
.Meishi-details .biaoqian {
  position: absolute;
  width: 85px;
  height: 90px;
  background-color: #ff4f00;
  line-height: 37px;
  text-align: center;
  top: 20px;
  left: 20px;
  z-index: 10;
}
.Meishi-details .wenben #neirong_p {
  font-size: 14px;
  line-height: 24px;
  color: #666666;
  margin-bottom: 12px;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: left;
}
.Meishi-details .bianti {
  margin-bottom: 25px;
  font-family: "Playfair Display", serif;
  font-size: 32px;
  color: #222222;
  font-weight: 700;
}
.Meishi-details .tupian {
  width: 570px;
  height: 384px;
  margin-left: 20px;
  position: relative;
}
.Meishi-details .img_mei {
  width: 100%;
  height: 100%;

  transition: all 0.6s;
}
.Meishi-details .img_mei:hover {
  transform: scale(1.06);
}
.Meishi-details {
  margin: 0 220px 0 220px;
}
</style>
<script>
export default {
  data() {
    return {
      //存储商品详细信息
      review: {},
    };
  },

  mounted() {
    /////////////食品详细信息////////////////////
    let id = this.$route.params.id;
    // console.log(id);
    this.axios
      .get("/review", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        this.review = res.data.result;
        // console.log(res.data.result);
      });
  },
};
</script>