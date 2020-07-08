import Vue from "vue";
import VueRouter from "vue-router";
import { layzLoading } from "@/router/layzLoading";
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/404",
      name: "Page404",
      component: layzLoading("main/404")
    },
    {
      path: "/login",
      name: "Login",
      component: layzLoading("main/Login")
    }
  ]
});
