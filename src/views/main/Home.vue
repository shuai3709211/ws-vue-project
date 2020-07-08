<template>
  <div>
    <sidebar></sidebar>

    <transition name="slide-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Sidebar from "@@/sidebar";
export default {
  name: "Home",
  components: { Sidebar }
};
</script>

<style scoped></style>
