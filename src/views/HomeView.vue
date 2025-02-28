<template>
  <div @click="add">跳转</div>
  <div>{{ count2 }}</div>
</template>

<script setup lang="ts">
import { useCounterStore2 } from "@/stores/index";
import { storeToRefs } from "pinia";
import { useMousePosition } from "@/hooks/user";
const counterStore = useCounterStore2();
const hooks = useMousePosition();
const { count2 } = storeToRefs(counterStore);
function add() {
  console.log(counterStore);
  counterStore.increment();
}
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state.count2);
});

hooks.add();
</script>
