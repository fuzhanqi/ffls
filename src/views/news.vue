<template>
<div>
  <my-header></my-header>
  <div id="news">
    <!-- 面包屑导航兰 -->
    <nav class="box">
      <el-breadcrumb separator="<">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/news">新闻资讯</a></el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <!-- 新闻资讯 -->
    <div class="newslist-wrap">
      <!-- 主题内容 -->
      <div class="box">
        <p class="newslist-tit">新闻资讯</p>
        <!-- 循环结构 -->
        <div v-for="(news, i) in newsl" :key="i" class="newslist-box">
          <el-row :gutter="40">
            <!-- 图片 -->
            <el-col hidden-md-and-down :span="8">
              <img class="preview" :src="news.image" alt="" />
            </el-col>
            <!-- 右侧内容 -->
            <el-col :span="16" class="el_col">
              <el-link
                :href="`news-details` + news.id"
                :underline="false"
                type="info"
              >
                <h2>{{ news.subject }}</h2>
              </el-link>
              <div class="newslist_bottom">
                <span>{{ news.created_at }}</span>
                <el-link
                  :href="`news-details` + news.id"
                  :underline="false"
                  type="info"
                >
                  <span class="news_described">
                    {{ news.intro }}
                  </span>
                </el-link>
                <el-link :underline="false" class="color">
                  <router-link :to="`/news-details/${news.id}`" type="danger"
                    >&lt;阅读内容&gt;</router-link
                  >
                </el-link>
              </div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
      </div>
      <!-- 底部分页 -->
      <!-- ui -->
      <div class="box paging">
        <el-pagination
          background
          :page-size.sync="pagesize"
          :current-page.sync="currentPage"
          layout="prev, pager, next"
          :total="total"
          class="pagin"
          @next-click="change"
          @prev-click="change"
          @current-change="current_change"
        >
        </el-pagination>
      </div>
    </div>
  </div>
  <my-footer></my-footer>
  </div>
</template>
<style scoped>
#news .box {
  width: 1080px;
  margin: 0 auto;
}
#news .el-breadcrumb__inner {
  color: #666;
}
#news {
  margin-bottom: 50px;
}
#news .preview {
  width: 340px;
  height: 160px;
}
.el_col {
  text-align: left;
}
#news .newslist-wrap {
  width: 100%;
  margin-top: 50px;
  border-top: 2px solid #533336;
}
#news .el-breadcrumb {
  font-size: 16px;
  padding-top: 20px;
}
#news .el-breadcrumb .el-breadcrumb__inner {
  color: #666;
}
/* 新闻资讯 */
#news .newslist-wrap .newslist-tit {
  width: 300px;
  height: 50px;
  background-color: #533336;
  font-size: 30px;
  text-align: center;
  color: #fff;
  line-height: 50px;
  margin: -25px auto 30px auto;
}
#news .news_described {
  display: inline-block;
  font-size: 14px;
  margin-bottom: 10px;
}
#news .newslist_bottom {
  border-top: 1px solid #d2d2d2;
  margin-top: 14px;
  padding-top: 10px;
}
/* 底部分页 */
#news .pafing {
  margin: 0 auto;
}

/* 分页样式 */

#news .pagin {
  width: 320px;
  margin: 0 auto;
}
#news .pagin li {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #533336;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
}
#news .pagin li:hover {
  background-color: #533336;
  color: #fff;
}
#news .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #533336;
  color: #fff;
}
#news .pagin button {
  font-size: 24px;
  background: #fff;
  width: 40px;
  height: 40px;
  border: 1px solid #533336;
  border-radius: 20px;
}
#news .pagin button i {
  font-size: 24px;
}
#news h2 {
  color: #000;
}
</style>
<script>
export default {
  data() {
    return {
      newsl: [],
      currentPage: 1,
      pagesize: 4,
      total: 12,
    };
  },
  methods: {
    change(page) {
      this.currentPage = page;
    },
    current_change(page) {
      this.currentPage = page;
      this.articl();
    },
    articl() {
      this.axios
        .get("/news", {
          params: {
            page: this.currentPage,
            pagesize: this.pagesize,
          },
        })
        .then((res) => {
          let articles = res.data.results;
          articles.forEach((article) => {
            if (article.image != null) {
              article.image = require(`../assets/imges/` + article.image);
            }
            if (article.intro.length > 10) {
              article.intro = article.intro.substring(0, 150) + "…";
            }
          });

          this.newsl = articles;
          // console.log(this.newsl);
        });
    },

    handleCurrentChange(val) {
      // console.log(111);
    },
  },
  mounted() {
    this.articl();
  },
};
</script>
