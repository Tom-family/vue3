<template>
  <div class="header-page">
    <div class="title">我是头</div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-page {
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
</style>
