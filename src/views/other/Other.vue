<template>
  <div class="card-page">
    <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="getList" offset="30">
      <div class="mine-list" v-for="(item, index) in list" :key="index">
        <div style="color: #fff">{{ index }}</div>
      </div>
    </van-list>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { userList } from "@/api/index";

// 列表相关
const list = ref([]);
const pageNum = ref(1);
const pageSize = ref(10);
const loading = ref(false);
const finished = ref(false);
const finishedText = ref("没有更多了");
const noData = ref(false);

const getList = async () => {
  let params = {
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  };
  let res = await userList(params);
  list.value.push(...res.data.list);
  if (list.value.length == 0) {
    finishedText.value = "";
    noData.value = true;
  } else {
    noData.value = false;
    finishedText.value = "没有更多了";
  }
  pageNum.value++;

  if (list.value.length >= res.data.total) {
    finished.value = true;
  } else {
    finished.value = false;
  }
  loading.value = false;
};
</script>
<style lang="scss" scoped>
.mine-list {
  width: 100%;
  height: 200px;
  background: red;
  margin-bottom: 10px;
}
</style>
