import { layzLoading } from "@/router/layzLoading";
export default [
  {
    path: "/",
    component: layzLoading("main/Home"),
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "/", // 路径
        name: "HomeIndex", // 页面中的name，缓存路由作用
        component: layzLoading("home/Index"), // 页面注册路径
        id: "1",
        meta: {
          title: "首页", // 菜单标题
          icon: "el-icon-menu" // 菜单图标
        }
      }
    ]
  },
  {
    path: "*",
    redirect: { path: "/404" }
  }
];
