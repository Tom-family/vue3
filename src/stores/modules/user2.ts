import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore2 = defineStore("counter2", {
  state: () => ({
    count2: 0,
  }),
  getters: {
    doubleCount: (state) => state.count2 * 2,
  },
  actions: {
    increment() {
      this.count2++;
    },
  },
  persist: {
    enabled: true, // 启用持久化
    strategies: [
      {
        key: 'counter', // 指定存储的 key
        storage: localStorage, // 使用 localStorage
        paths: ['count2'], // 只持久化 count 字段
      },
    ],
  }
});
