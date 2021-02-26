<template>
  <div>
    <my-header></my-header>
    <div id="shop-container">
      <el-breadcrumb separator-class="el-icon-arrow-left">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>店面展示</el-breadcrumb-item>
        <el-breadcrumb-item>{{ activeName }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row :gutter="25">
        <el-col :span="18">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
              :label="shop.type_name"
              :name="shop.type_name"
              v-for="(shop, i) of shops"
              :key="i"
            ></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="6">
          <input type="text" placeholder="输入关键字" id="shop-inp" />
          <button id="shop-btn">搜索</button>
        </el-col>
      </el-row>

      <el-row :gutter="25" v-model="activeName">
        <el-col :span="8"
          ><div>
            <div>
              <router-link
                v-if="eIndex == ''"
                :to="{ path: '/shop_con', query: { cid: 1 } }"
              >
                <img src="/img/assets_shop/image/shop-pic1.jpg" alt="" />
              </router-link>

              <router-link
                :to="{
                  path: '/shop_con',
                  query: { cid: parseInt(eIndex) + 1 },
                }"
                v-else
              >
                <img
                  class="shop-img"
                  :src="`/img/assets_shop/image/${imgs[parseInt(eIndex)]}`"
                  id="img"
                />
              </router-link>
            </div>
            <p id="p">{{ activeName }}</p>
          </div></el-col
        >
      </el-row>
      <div>
        <el-pagination layout="prev, pager, next" :total="10"> </el-pagination>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "北京店",
      shops: [],

      imgs: [
        "shop-pic1.jpg",
        "shop-pic2.jpg",
        "shop-pic3.jpg",
        "shop-pic4.jpg",
        "shop-pic5.jpg",
        "shop-pic6.jpg",
      ],
      eIndex: "",
    };
  },
  methods: {
    handleClick(e) {
      // console.log(e)
      this.eIndex = e.index;
      // console.log(this.eIndex);
    },
  },
  mounted() {
    this.axios.get("/type").then((res) => {
      let results = res.data;
      this.shops = results; //对象数组
      // console.log(res.data);
    });
    // this.$axios
    //   .get("/storefront", {
    //     params: {
    //       id: this.shops[this.eIndex].id,
    //     },
    //   })
    //   .then((res) => {
    //     let results = res.data.results;
    //     this.storeName = results[0];
    //     this.imgs = results[1];
    //   });
  },
};
</script>
<style scoped>
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #666;
}
div .el-breadcrumb {
  margin-bottom: 20px;
  font-size: 16px;
  padding-top: 20px;
  color: #666;
}

#shop-container {
  margin: 0 220px;
}

#shop-container .el-breadcrumb__inner .is-link {
  display: block;
  color: #666;
}
.shop-img {
  width: 100%;
}
.el-tabs__item.is-top.is-active,
.el-tabs__item.is-top:hover {
  background: #533336;
  color: aliceblue;
}
.el-tabs__item.is-top {
  padding: 0 20px !important;
}
.el-tabs__active-bar.is-top {
  background-color: #533336;
}
button.btn-prev,
button.btn-next,
li.number {
  border-radius: 50% !important;
  border: 1px solid #533336 !important;
}
button.btn-prev,
button.btn-next,
.el-pager li {
  min-width: 28px !important;
  width: 28px !important;
  margin: 0 3px !important;
  padding: 0 !important;
}
.el-pager li.active {
  background: #533336;
  color: white !important;
}
.el-pager li.number:not(.active):hover,
button.btn-prev:not(:disabled):hover,
button.btn-next:not(:disabled):hover {
  background-color: #533336 !important;
  color: white !important;
}
.el-breadcrumb__inner {
  font-size: 6px !important;
}
.el-tabs__nav-wrap::after {
  background-color: #533336;
}
#shop-inp {
  width: 60%;
  height: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 1px solid #533336;
  outline: none;
  font-size: 12px;
  padding: 0 0 0 10px;
  /* 上 右  下 左  顺时针 */
}
#shop-btn {
  width: 25%;
  height: 22px;
  font: 12px Arial !important;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #533336;
  color: white;
  border: 1px solid #533336;
  padding: 0px;
  outline: none;
  margin-top: 10px;
}
.el-col.el-col-6 {
  padding: 0 !important;
  font-size: 8px !important;
  color: #666;
}
</style>
