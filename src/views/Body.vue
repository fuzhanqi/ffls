<template>
<div>
  <my-header></my-header>
  <div id="body">
    <!-- 新品推荐 -->
    <div class="new">
      <p class="new-tit">新品推荐</p>
      <div class="box">
        <!-- 轮播图 -->
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 2" :key="item">
            <el-row>
              <el-col
                :xs="24"
                :sm="12"
                :md="8"
                :lg="6"
                v-for="(v, i) of 8"
                :key="i"
              >
                <div :id="i" class="d1_">
                  <router-link
                    to="/meishi-details"
                    class="d1_wenben"
                    :class="{ display_wenben: state }"
                    >茶树海鲜汤</router-link
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
        <!-- 轮播图 -->
      </div>
    </div>
    <!-- 公司简介 -->
    <div class="company">
      <p class="company-tit">公司简介</p>
      <div class="box">
        <el-row :gutter="10">
          <el-col :sm="24" :lg="12">
            <div class="grid-content bg-purple">
              <img
                class="imgage"
                src="/img/assets/image/carouls/pic1.png"
                alt
              />
            </div>
          </el-col>
          <el-col :sm="24" :lg="12">
            <div class="grid-content bg-purple">
              <p class="company-p">
                XXX牛排是昔日的台湾首富、台湾知名企业XXX集团董事长王永庆先生招待贵宾的知名私房料理。严选一头牛的第六至第八对肋骨这六块牛排。是以“一头牛仅供6客”的XXX牛排为招牌菜的中高价位直营连锁西餐厅，独具中国口味，全熟牛排，鲜嫩多汁，适合中国人口味，以菜色精致、好吃、服务好、风格高雅、管理专业着称。
              </p>
              <p class="company-p">
                何谓经典，可能就是在品鉴无数美食后，其绝妙的滋味仍旧不能被替代。再次品味时，仍能激起内心的波澜与感动。如此经典，我们将为您重新诠释。全新的摆盘，搭配特制爽口的配菜，全熟风味，您不可辜负的舌尖美味。
              </p>
              <p class="company-p">
                2003年登陆大陆，截至目前，XXX牛排在上海、北京、深圳、广州、南京、武汉、成都、重庆等地已经有40余家直营店，成为高端连锁牛排的领导品牌。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="news">
      <p class="news-tit">新闻资讯</p>
      <div class="box">
        <el-row :gutter="0">
          <el-col :sm="24" :lg="12">
            <div class="grid-content bg-purple">
              <img src="/img/assets/image/carouls/xinwei.jpg" alt />
            </div>
          </el-col>
          <el-col
            :sm="24"
            :lg="12"
            class="ii"
            v-for="(v, i) of news.length"
            :key="i"
          >
            <div id="cleafix">
              <router-link to="" class="a_p">
                <p class="link-tit">{{ news[i].subject }}</p>
                <p class="link-time">{{ news[i].created_at }}</p>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <my-footer></my-footer>
  </div>
</template>
<style>
* {
  padding: 0;
}
/* #body .grid-content .bg-purple {
  width: 450px;
} */
#cleafix {
  display: block;
}
#body .el-carousel__container {
  height: 550px;
}
#body .el-carousel__indicators--outside button {
  border: 2px solid #533336;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #533336;
  margin-right: 20px;
}
.box {
  margin: 0px 220px 0px 220px;
}
.image {
  width: 100%;
}
.new {
  margin-top: 50px;
  border-top: 2px solid #533336;
}
.company,
.news {
  border-top: 2px solid #533336;
  margin-top: 50px;
}
.anniu {
  text-align: center;
  margin-top: 18px;
}
.new-tit,
.company-tit,
.news-tit {
  display: block;
  width: 21%;
  height: 49.6px;
  color: #fff;
  background-color: #533336;
  text-align: center;
  font-size: 30px;
  line-height: 50px;
  margin: -25px auto 30px auto;
}
.company-p {
  display: block;
  text-align: left;
  font-size: 18px;
  line-height: 30px;
  color: #000000;
  margin: 0;
  padding-left: 18px;
}
a {
  text-decoration: none;
  color: #00000099;
}
a:hover {
  color: #533336;
}

p.link-tit {
  display: block;
  float: left;
  font-size: 18px;
  margin: 0;
  width: 300px;
  height: 33.6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
p.link-time {
  display: block;
  float: left;
  padding-left: 100px;
  margin: 0;
  width: 81.85px;
  height: 33.6px;
  cursor: pointer;
}

.d1_ {
  position: relative;
  width: 255px;
  height: 255px;
  background: url(/img/assets/image/carouls/food-png1.png) center no-repeat;
  border-radius: 50%;
  margin-bottom: 10px;
}

.d1_wenben {
  position: absolute;
  width: 255px;
  height: 255px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  z-index: 1000;
  margin-left: -127px;
  margin-top: -127px;
  text-align: center;
  line-height: 255px;
  font-size: 0;
  color: #533336;
}
.d1_wenben:hover {
  background: url(/img/assets/image/carouls/food-png1-2.png) center no-repeat;
  font-size: 25px;
  display: block;
}
</style>

<script>
export default {
  data() {
    return {
      i: 0,
      state: false, //字体的启用禁用
      news: [],
    };
  },
  mounted() {
    this.axios.get("/newss").then((res) => {
      let results = res.data.results;
      this.news = results;
    });
  },
};
</script>
