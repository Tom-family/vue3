<template>
  <headerPage v-if="route.meta.header" />
  {{ route.meta.keep }}
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="route.meta.keep" />
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keep" />
  </router-view>
  <tabbar v-if="route.meta.tabbar" />
</template>

<script setup lang="ts">
import headerPage from "@/components/header/header.vue";
import tabbar from "@/components/tabbar/tabbar.vue";

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped></style>
