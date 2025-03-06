<template>
  <div @click="signIn">首页</div>
  <div @click="signOut">退出</div>
  <div>{{ count2 }}</div>
  <div class="rem">
    <div class="kkk">kkk</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { login } from "@/api/index";
import { useCounterStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useMousePosition } from "@/hooks/user";
import { onBeforeUnmount, onMounted } from "vue";
const router = useRouter();
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
function signOut() {
  counterStore.token = "";
  router.push("/login");
}
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state.count2);
});
// showToast("提示内容");
hooks.add();

onMounted(() => {
  console.log(111111111);
});

// onBeforeUnmount(() => {
//   closeToast();
// });
</script>
<style lang="scss" scoped>
.rem {
  width: 200px;
  height: 200px;
  background: red;
  .kkk {
    width: 100px;
    height: 100px;
    background: blueviolet;
  }
}
</style>
