import Vue from "vue";
import VueRouter from "vue-router";
import Body from "../views/Body.vue";
import Resgiter from "../views/Resgiter";
import Login from "../views/Login";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "body",
    component: Body,
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
  },
  {
    path: "/shop_con",
    name: "shop_con",

    component: () =>
      import(/* webpackChunkName: "shop_con" */ "../views/Shop_con.vue"),
  },
  {
    path: "/news",
    name: "news",

    component: () => import(/* webpackChunkName: "news" */ "../views/news.vue"),
  },
  {
    path: "/news-details/:id",
    name: "news-details",

    component: () =>
      import(
        /* webpackChunkName: "news-details" */ "../views/news-details.vue"
      ),
  },
  {
    path: "/meishi-details/:id",
    name: "meishi-details",

    component: () =>
      import(
        /* webpackChunkName: "meishi-details" */ "../views/Meishi-details.vue"
      ),
  },

  {
    path: "/meishi",
    name: "meishi",

    component: () =>
      import(/* webpackChunkName: "meishi" */ "../views/Meishi.vue"),
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  { path: "/resgiter", component: Resgiter },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
