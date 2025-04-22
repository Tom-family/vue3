<template>
  <div class="card-page" :class="{ 'list-page': refreshing }">
    <van-pull-refresh class="refresh-box" v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished" :finished-text="finishedText" @load="getList" offset="30">
        <van-empty description="暂无数据" v-if="noData" />
        <div class="page-item" v-for="(item, index) in list" :key="index">
          <div style="color: #fff">{{ index }}</div>
        </div>
      </van-list>
    </van-pull-refresh>
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
const refreshing = ref(false);

const getList = async () => {
  let params = {
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  };

  let res = await userList(params);
  // 判断是否为下拉刷新
  if (refreshing.value) {
    refreshing.value = false;
    list.value = [];
  }

  list.value.push(...res.data.list);
  if (list.value.length == 0) {
    finishedText.value = "";
    noData.value = true;
  } else {
    noData.value = false;
    finishedText.value = "没有更多了";
  }
  pageNum.value++;

  if (list.value.length == res.data.total) {
    finished.value = true;
  } else {
    finished.value = false;
  }

  loading.value = false;
};

// 刷新
const onRefresh = () => {
  noData.value = false;
  finished.value = false;
  pageNum.value = 1;
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  getList();
};
</script>
<style lang="scss" scoped>
.card-page {
  height: 100%;
  .refresh-box {
    height: 100%;
    overflow: auto;
    .page-item {
      width: 100%;
      height: 200px;
      background: red;
      margin-bottom: 10px;
    }
  }
}
</style>
