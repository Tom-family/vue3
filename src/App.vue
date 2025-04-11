<template>
  <van-config-provider :theme="currentTheme" class="app-provider">
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/store/theme";
const themeStore = useThemeStore();
themeStore.updateTheme(false);
const { currentTheme } = storeToRefs(themeStore);
</script>

<style lang="scss" scoped>
.app-provider {
  height: 100%;
}
</style>
