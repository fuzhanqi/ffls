<template>
  <div>
    <!-- 菜单导航 -->
    <div class="header">
      <div class="box">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
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
            <el-avatar style="margin-top:-10px" icon="el-icon-user-solid">
              <div>
                <img src="" alt="" />
              </div>
            </el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown" v-if="isLogined == 0">
            <el-dropdown-item>
              <router-link to="/resgiter">注册</router-link>
            </el-dropdown-item>
            <el-dropdown-item
              ><router-link to="/login">登录</router-link></el-dropdown-item
            >
          </el-dropdown-menu>
          <div v-show="isLogined == 1">
            <span>{{ info.username }}</span
            >&nbsp;&nbsp;&nbsp;&nbsp;
            <span @click="logout">
              注销
            </span>
          </div>
        </el-dropdown>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="container">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            src="/img/assets/image/carouls/banner1.jpg"
            style="width: 100%;"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style scoped>
.down {
  float: right;
  text-align: center;
  margin-top: -60px;
  margin-right: -105px;
}
.down span:hover {
  cursor: pointer;
  color: #533336;
}
.header .el-menu.el-menu--horizontal {
  border-bottom: 0;
}
#heaser-li:hover {
  background: #533336;
  color: rgba(255, 255, 255, 1);
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
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  computed: {
    ...mapState(["isLogined", "info"]),
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    ...mapMutations(["logoutMutation"]),
    logout() {
      localStorage.clear();
      this.logoutMutation;
    },
  },
};
</script>
