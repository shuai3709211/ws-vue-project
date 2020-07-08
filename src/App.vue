<template>
  <div id="app" :style="styles">
    <router-view></router-view>
    <my-spin :spinShow="$store.state.loading"></my-spin>
  </div>
</template>
<script>
import MySpin from "@@/mySpin";
import { mapMutations } from "vuex";
import resizeCallback from "@/utils/resizeCallback";
import menus from "@/router/routes";
import { getRouters } from "@/router/layzLoading";
export default {
  name: "App",
  components: { MySpin },
  created() {
    const handler = () => {
      this.changeContainerSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    };
    handler();
    window.onresize = resizeCallback(handler);

    menus[0].children = [...menus[0].children];

    this.$router.addRoutes(menus);
  },
  computed: {
    menuList() {
      return this.$store.state.menuList;
    },
    token() {
      return this.$store.state.token;
    },
    styles() {
      return {
        width: this.$store.state.size.width + "px",
        height: this.$store.state.size.height + "px"
      };
    }
  },
  watch: {
    menuList() {
      this.init();
    },
    token(v) {
      console.log(v);
      // if (v) {
      //   this.authUserInfo();
      // }
    }
  },
  methods: {
    ...mapMutations(["changeContainerSize"]),
    init() {
      /* 注册菜单页面路由 以及  功能点页面路由 */
      let functionMenes = this.$store.state.functions
        ? this.$store.state.functions.filter(o => o.component)
        : [];

      let routeArr = getRouters([...this.menuList, ...functionMenes]);

      menus[0].children = [...menus[0].children, ...routeArr];

      this.$router.addRoutes(menus);
      this.$store.commit("updatedMenuFirsts", menus[0].children);
    }
  }
};
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>
