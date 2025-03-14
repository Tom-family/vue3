// 设置 rem 函数
function setRem(): void {
  const width: number = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = width / 10 + "px"; // 1rem = 192px，设计稿宽度为 192px
}
// 初始化
setRem();
//监听窗口变化 改变窗口大小时重新设置 rem
let resizeTimer: ReturnType<typeof setTimeout>;
window.addEventListener("resize", function () {
  // clearTimeout(resizeTimer);
  // resizeTimer = setTimeout(() => {
    setRem();
  // }, 200); // 200ms 防抖
});
