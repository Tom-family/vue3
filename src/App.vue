<template>
  <van-config-provider :theme="currentTheme">
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

<style></style>
