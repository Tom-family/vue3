<template>
  <div @click="signIn">跳转</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { login } from "@/api/index";
import { useCounterStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { useMousePosition } from "@/hooks/user";
const router = useRouter();
const counterStore = useCounterStore();
const hooks = useMousePosition();
function add() {
  counterStore.increment();
}
async function signIn() {
  let res = await login();
  counterStore.token = "ooooo";
  router.push("/home");
}
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state.count2);
});

hooks.add();
</script>
