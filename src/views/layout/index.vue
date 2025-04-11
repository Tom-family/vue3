<template>
  <div class="app-wrapper">
    <headerPage v-if="route.meta.header" />
    <div class="app-content">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="route.meta.keep" :key="route.path" />
        </keep-alive>
        <component :is="Component" v-if="!route.meta.keep" :key="route.path" />
      </router-view>
    </div>
    <tabbar v-if="route.meta.tabbar" />
  </div>
</template>

<script setup lang="ts">
import headerPage from "@/components/header/header.vue";
import tabbar from "@/components/tabbar/tabbar.vue";

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .app-content {
    flex: 1;
    overflow: auto;
  }
}
</style>
