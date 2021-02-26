<template>
<div>
  <my-header></my-header>
  <div class="meishi">
    <div class="meishi_1">
      <el-container>
        <el-main>
          <!-- 面包屑导航开始 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>美食系列</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 面包屑导航结束 -->
          <!-- 标签页开始 -->
          <el-input class="input" placeholder="请输入内容"></el-input>
          <div class="biaoqian">
            <el-tabs v-model="activeName">
              <el-tab-pane
                v-for="(v, i) of category"
                :key="i"
                @click="handClick(v.id)"
                :label="v.category_name"
                :name="categoryid[i]"
              >
                <el-row :gutter="20">
                  <el-col
                    :xs="24"
                    :md="12"
                    :lg="8"
                    v-for="(v, i) of articles"
                    :key="i"
                    ><div class="grid-content bg-purple">
                      <router-link
                        :to="`/meishi-details/${v.id}`"
                        class="router_link"
                      >
                        <div>
                          <img
                            style="width: 100%; height: 250px"
                            :src="`/img/Meishi.img/${v.image}`"
                          />
                        </div>

                        <p class="biaoti">{{ v.subject }}</p>
                        <p class="jiage">价格：{{ v.price }}元</p>
                      </router-link>
                    </div></el-col
                  >
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- 标签页结束 -->
          <!-- 分页开始  -->
          <el-pagination
            @current-change="paging"
            style="margin-top: 100px"
            background
            layout="prev, pager, next"
            :total="pagecount"
          >
          </el-pagination>
          <!-- 分页结束  -->
        </el-main>
      </el-container>
    </div>
  </div>
  <my-footer></my-footer>
  </div>
</template>
<style>
.meishi .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #533336;
  /* width: 500px; */
}

.meishi .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #533336;
}
.meishi .el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  border-radius: 50%;
}
.meishi .jiage {
  margin: 0;
  font-size: 18px;
  color: #999;
  text-align: center;
}
.meishi .biaoti {
  margin: 0;
  font-size: 24px;
  color: #533336;
  line-height: 40px;
  font-weight: normal;
  text-align: center;
}
.meishi .router_link {
  text-decoration: none;
}
.meishi .el-breadcrumb {
  font-size: 16px;
}

.meishi .el-breadcrumb__inner {
  color: #666;
}

.meishi .biaoqian {
  margin-top: 70px;
}

.meishi .el-tabs__item.is-active {
  color: #ffffff;
  background-color: #533336;
}

.meishi .el-tabs__nav-wrap::after,
.meishi .el-tabs__active-bar {
  background-color: #533336 !important;
}

.meishi .el-tabs--bottom .el-tabs__item.is-bottom:last-child,
.el-tabs--bottom .el-tabs__item.is-top:last-child,
.el-tabs--top .el-tabs__item.is-bottom:last-child,
.el-tabs--top .el-tabs__item.is-top:last-child {
  padding-right: 20px;
}

.meishi .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
.el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
.el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px;
}

.meishi .el-tabs__item {
  height: 46px;
  line-height: 46px;
  color: #000000;
  font-family: Arial, "Liberation Sans", FreeSans, "Hiragino Sans GB",
    "微软雅黑";
  font-size: 16px;
}
.meishi .input {
  width: 194px;
  float: right;
  margin-top: 30px;
}
.meishi_1 {
  margin: 0 220px 0 220px;
}
</style>
<script>
export default {
  data() {
    return {
      activeName: "1", //标签页导航
      categoryid: [], //与标签页导航配合
      category: [], //存储商品分类
      pagecount: 10, //页码
      articles: [], //存储商品
    };
  },
  methods: {
    //////////分页////////////
    paging(current) {
      //发送请求获取食品信息
      this.axios
        .get("/articles", {
          params: {
            id: parseInt(this.activeName),
            page: current,
          },
        })
        .then((res) => {
          //保存页码
          this.pagecount = res.data.pagecount * 10;
          this.articles = res.data.results;
        });
    },
    //////////获取食品信息///////////////
    encapsulationRequest(_id, _page) {
      //发送请求获取食品信息
      this.axios
        .get("/articles", {
          params: {
            id: _id,
            page: _page,
          },
        })
        .then((res) => {
          //保存页码
          this.pagecount = res.data.pagecount * 10;
          this.articles = res.data.results;
        });
    },
  },
  mounted() {
    // 发送HTTP请求以获取服务器所有商品分类的数据
    this.axios.get("/category").then((res) => {
      // 获取服务器返回的结果
      let results = res.data.results;
      // 将服务器返回结果存储到category变量中
      this.category = results;

      results.forEach((element) => {
        this.categoryid.push(element.id.toString());
      });
    });
    //发送请求获取食品信息
    this.encapsulationRequest(parseInt(this.activeName), 1);
  },
  watch: {
    activeName() {
      this.pagecount = 10;
      //发送请求获取食品信息
      this.encapsulationRequest(parseInt(this.activeName), 1);
    },
  },
};
</script>
