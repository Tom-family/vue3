import { ref } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore(
  "theme",
  () => {
    // true 黑色 false 白色
    let currentTheme = ref("light");

    function updateTheme(value) {
      // value true 修改
      if(value){
        currentTheme.value = currentTheme.value == "light" ? "dark" : "light";
      }
      if (currentTheme.value === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
    return { currentTheme, updateTheme };
  },
  {
    persist: {
      key: "theme", // 自定义存储的 key
      storage: localStorage, // 使用 sessionStorage
      pick: ["currentTheme"], // 只持久化 count 状态
    },
  }
);
