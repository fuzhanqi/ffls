<template>
  <div id="my_header">
    <!-- 菜单导航 -->
    <div class="header">
      <div class="box">
        <el-menu
          @select="handleSelect"
          mode="horizontal"
          class="el-menu-demo"
          :default-active="activeIndex2"
        >
          <el-menu-item class="logo">
            <img src="/img/assets/image/carouls/logo.png" />
          </el-menu-item>
          <el-menu-item index="1" id="heaser-li" class="header-li"
            ><router-link to="/" target="_self">首页</router-link></el-menu-item
          >
          <el-menu-item index="2" id="heaser-li" class="header-li"
            >品牌故事</el-menu-item
          >
          <el-menu-item index="3" id="heaser-li" class="header-li"
            ><router-link to="/meishi" target="_self"
              >美食系列</router-link
            ></el-menu-item
          >
          <el-menu-item index="4" id="heaser-li" class="header-li"
            ><router-link to="/shop" target="_self"
              >店面展示</router-link
            ></el-menu-item
          >
          <el-menu-item index="5" id="heaser-li" class="header-li"
            ><router-link to="/news" target="_self"
              >新闻资讯</router-link
            ></el-menu-item
          >
          <el-menu-item index="6" id="heaser-li" class="header-li"
            ><router-link to="/about">关于我们</router-link></el-menu-item
          >
        </el-menu>
        <el-dropdown class="down">
          <span class="el-dropdown-link">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>注册</el-dropdown-item>
            <el-dropdown-item>登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="container">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            src="/img/assets/image/carouls/banner1.jpg"
            style="width: 100%"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style scoped>
#my_header {
  margin-bottom: 50px;
}

#my_header .el-menu--horizontal > .el-menu-item.is-active {
  background-color: #533336 !important;
}
#my_header .el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  color: #909399;
}
.down {
  float: right;
  text-align: center;
  margin-top: -60px;
  margin-right: -105px;
  outline: none;
}
.down:hover {
  cursor: pointer;
}
.header .el-menu.el-menu--horizontal {
  border-bottom: 0;
}

.box {
  margin: 0 220px 0 220px;
}
li.el-menu-item.logo {
  display: block;
  width: 234px;
  height: 88px;
  padding: 4px;
  line-height: 80px;
  text-align: center;
  border: 0;
}
li.el-menu-item.header-li {
  display: block;
  width: 138px;
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 18px;
  padding: 0;
  border: 0;
}
.el-carousel__container {
  height: 392px;
}

.container {
  border-top: 10px solid #533336;
}

.el-carousel__item {
  height: 392px;
}
.el-carousel--horizontal {
  height: 392px;
}
.el-carousel__indicators {
  line-height: 392px;
}
.header .box .el-carousel__arrow {
  position: absolute !important;
  top: 65% !important;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>
