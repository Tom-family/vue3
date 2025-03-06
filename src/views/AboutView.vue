<template>
  <div @click="signIn">登录</div>
  <div>{{ count2 }}</div>
</template>

<script setup lang="ts">
import { login } from "@/api/index";
import { useCounterStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useMousePosition } from "@/hooks/user";
const counterStore = useCounterStore();
const hooks = useMousePosition();
const { count2 } = storeToRefs(counterStore);
function add() {
  counterStore.increment();
}
async function signIn() {
  let res = await login();
  console.log(res);
}
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state.count2);
});

hooks.add();
</script>
