<template>
  <router-view />
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/theme";
const themeStore = useThemeStore();
themeStore.updateTheme(false);
</script>

<style></style>
