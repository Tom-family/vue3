<template>
  <div @click="add">跳转</div>
  <div>{{ count2 }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { useMousePosition } from "@/hooks/user";
const counterStore = useCounterStore();
const hooks = useMousePosition();
const { count2 } = storeToRefs(counterStore);
function add() {
  counterStore.increment();
}
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state.count2);
});

hooks.add();
</script>
