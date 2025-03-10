<template>
  <div @click="signIn">用户信息</div>
  <div @click="signOut">退出</div>
  <div @click="getMessage">获取用户信息</div>
  <div>{{ count2 }}</div>
  <i class="iconfont icon-a-25K"></i>
  1
  <div class="rem">
    <div class="kkk">kkk</div>
  </div>
  <div class="rem">
    <div class="kkk">kkk</div>
  </div>
  <div class="rem">
    <div class="kkk">kkk</div>
  </div>
  <div>111111111</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { getUserInfo, fikuserInfo } from "@/api/index";
import { useCounterStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useMousePosition } from "@/hooks/user";
import { onActivated, onDeactivated } from "vue";

const router = useRouter();
const counterStore = useCounterStore();
const hooks = useMousePosition();
const { count2 } = storeToRefs(counterStore);
function add() {
  counterStore.increment();
}
async function signIn() {
  let res = await getUserInfo();
  console.log(res);
}
async function getMessage() {
  let res = await fikuserInfo({ name: 99 });
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

onActivated(() => {
  console.log("初次加载");
});
onDeactivated(() => {
  console.log("初次卸载");
});
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
