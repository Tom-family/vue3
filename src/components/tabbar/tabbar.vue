<template>
  <div class="tabbar-page">
    <div class="tabbar-box">
      <div class="tabbar-item" v-for="(item, index) in tabbarList" :key="index" @click="$router.replace(item.url)">
        <img :src="route.meta.code == item.code ? item.img_active : item.img" />
        <div class="title" :class="{ 'title-active': route.meta.code == item.code }">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const tabbarList = [
  {
    name: "首页",
    img: new URL("@/assets/svg/home.svg", import.meta.url).href,
    img_active: new URL("@/assets/svg/home_active.svg", import.meta.url).href,
    url: "/home",
    code: "1",
  },
  {
    name: "我的",
    img: new URL("@/assets/svg/my.svg", import.meta.url).href,
    img_active: new URL("@/assets/svg/my_active.svg", import.meta.url).href,
    url: "/my",
    code: "2",
  },
];
</script>
<style lang="scss" scoped>
.tabbar-page {
  background: #000;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  .tabbar-box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .tabbar-item {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 20px;
      }
      .title {
        margin-top: 5px;
        font-size: 14px;
        color: #fff;
      }
      .title-active {
        color: #1ebed3;
      }
    }
  }
}
</style>
