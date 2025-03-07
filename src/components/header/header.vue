<template>
  <div class="header-page">
    <div class="title">我是头</div>
  </div>
  <div class="empty"></div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  .title {
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 5px;
    background: linear-gradient(to bottom, #fff 35%, #7f7c7a 65%);
    -webkit-background-clip: text;
    color: transparent;
  }
}
.empty {
  height: 50px;
}
</style>
