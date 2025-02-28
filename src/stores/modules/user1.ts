import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore1 = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    // enabled: true, // 启用持久化
    strategies: [
      {
        key: 'counter', // 指定存储的 key
        storage: localStorage, // 使用 localStorage
        paths: ['count'], // 只持久化 count 字段
      },
    ],
  }
});
