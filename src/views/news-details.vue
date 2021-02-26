<template>
<div>
  <my-header></my-header>
  <div id="news-details">
    <!-- 面包屑导航兰 -->
    <nav class="box">
      <el-breadcrumb separator="<">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><router-link to="/news">新闻资讯</router-link></el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ breadcrumb }}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <!-- 正文 -->
    <div class="box">
      <h1>{{ subject }}</h1>
      <div class="p" v-html="content"></div>
    </div>
  </div>
  <my-footer></my-footer>
  </div>
</template>
<style>
#news-details .p {
  text-align: left;
}
#news-details .el-breadcrumb__item {
  font-size: 16px;
  padding-top: 20px;
  display: block;
  color: #666;
  font-weight: bold;
}
#news-details .el-breadcrumb__inner {
  color: #666;
}
#news-details a {
  color: #666;
}
#news-details {
  margin-top: 20px;
  margin-bottom: 50px;
}
#news .el-breadcrumb {
  font-size: 16px;
  padding-top: 20px;
}
#news-details .box {
  width: 1080px;
  margin: 0 auto;
}
#news-details h1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #303133;
}
#news-details p {
  margin-top: 25px;
  color: #333333;
}

#news-details .shop-icon {
  display: block;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  color: #533336;
  line-height: 60px;
  border-radius: 30px;
  margin-top: 40px;
  border: 2px solid #533336;
}
#news-details img {
  max-width: 600px;
}
#news-details p {
  text-indent: 32px;
}
</style>

<script>
export default {
  data() {
    return {
      newsl: [],
      subject: "",
      content: "",
      breadcrumb: "",
    };
  },
  methods: {
    articl() {
      let id = this.$route.params.id;
      this.axios
        .get("/news_details", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          let articles = res.data.results;
          this.newsl = articles;
          this.subject = this.newsl[0].subject;
          this.content = this.newsl[0].content;
          if (this.subject.length > 10) {
            this.breadcrumb = this.subject.substring(0, 10) + "…";
          }
        });
    },
  },
  mounted() {
    this.articl();
  },
};
</script>
