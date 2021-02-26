<template>
  <div>
    <my-header></my-header>
    <div id="con-container">
      <el-breadcrumb separator-class="el-icon-arrow-left">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>店面展示</el-breadcrumb-item>
        <el-breadcrumb-item>{{ res.subject }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div id="content">
        <h1>{{ res.subject }}</h1>
        <div>
          <img src="/img/assets_shop/image/shop-pic7.jpg" style="width: 100%" />
        </div>
        <p>
          <span class="title">特色菜品：</span
          ><span class="details">{{ res.characteristic }}</span>
        </p>
        <p>
          <span class="title">营业时间：</span
          ><span class="details">{{ res.business }}</span>
        </p>
        <p>
          <span class="title">停车泊位：</span
          ><span class="details">{{ res.parking }}</span>
        </p>
        <p>
          <span class="title">餐厅地址：</span
          ><span class="details">{{ res.address }}</span>
        </p>
        <p>
          <span class="title">餐厅标签：</span
          ><span class="details">{{ res.label }}</span>
        </p>
        <router-link to="/shop" id="back">返回列表页</router-link>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      res: "",
    };
  },
  mounted() {
    this.axios
      .get("/shop", {
        params: {
          cid: this.$route.query.cid,
        },
      })
      .then((res) => {
        // console.log(res)
        this.res = res.data.results[0];
      });
  },
};
</script>
<style scoped>
#back {
  text-decoration: none;
  color: rgb(76, 76, 76);
  border: 2px solid #533336;
  display: inline-block;
  margin: 10px auto;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 25px;
}
#con-container {
  margin: 0 220px;
}
#con-container .el-breadcrumb {
  font-size: 16px;
  padding-top: 20px;
}
div .el-breadcrumb__inner {
  color: #666;
}
#content {
  margin: 0 120px;
}
p {
  text-align: left;
}
p .title {
  font-size: 18px;
  color: rgb(76, 76, 76);
}
p .details {
  font-size: 14px;
  color: rgb(128, 128, 128);
  width: 852px;
  line-height: 20px;
  margin: 24px auto 0px;
}
</style>
