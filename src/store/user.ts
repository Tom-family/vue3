import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "user",
  () => {
    const count2 = ref(0);
    const token = ref("");
    function increment() {
      count2.value++;
    }
    return { count2, increment, token };
  },
  {
    persist: {
      key: "user", // 自定义存储的 key
      storage: localStorage, // 使用 sessionStorage
      pick: ["count2", "token"], // 只持久化 count 状态
    },
  }
);
