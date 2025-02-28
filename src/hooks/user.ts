import { ref, onMounted, onUnmounted } from "vue";
export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);
  function add() {
    console.log("dog");
  }
  return { x, y, add };
}
