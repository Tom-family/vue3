<template>
  <div>
    <VForm ref="vform" :formData="formData" :model="model" :finish="finish" />
  </div>
</template>

<script setup lang="ts">
import VForm from "@/components/VForm/VForm.vue";
import { reactive, ref } from "vue";

const validator = (val) => {
  if (val == "123") {
    return true;
  }
  return false;
};
let model = reactive({
  userName: "123",
  switch: true,
  checkbox: [1],
  radio: 2,
  uploader: [{ url: "https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg" }],
  select: ["Shaoxing"],
  selectName: "绍兴",
  time: ["2020", "11", "20"],
  timeName: "2020/11/20",
  cacendar: [new Date("2020/01/01"), new Date("2020/02/02")],
  cacendarName: "2020/01/01-2020/02/02",
  runTime: "2025-03-13 13:57:59",
  runTimeName: "2025-03-13 13:57:59,2025-03-14 13:57:59",
  timeSecond: "2025-03-13 13:57:59",
});
let formData = reactive([
  {
    type: "VCell",
    title: "你好!我是标题？",
    first:true
  },
  {
    type: "input",
    label: "用户名",
    value: "userName",
    validator: validator,
    errorMessage: "请输入正确内容",
    required: true,
  },
  {
    type: "switch",
    label: "开关",
    value: true,
    required: true,
  },
  {
    type: "checkbox",
    label: "复选框",
    value: "checkbox",
    required: true,
    formData: [
      { name: "选择1", value: 1 },
      { name: "选择2", value: 2 },
    ],
    formDataProps: {
      name: "name",
      value: "value",
    },
  },
  {
    type: "VCell",
    title: "",
  },
  {
    type: "radio",
    label: "单选框",
    value: "radio",
    required: true,
    formData: [
      { name1: "单选1", value: 1 },
      { name1: "单选2", value: 2 },
    ],
    formDataProps: {
      name: "name1",
      value: "value",
    },
  },
  {
    type: "uploader",
    label: "文件上传",
    value: "uploader",
    required: true,
    maxCount: 2,
  },
  {
    type: "select",
    label: "选择器",
    value: "select",
    inputName: "selectName",
    required: true,
    formData: [
      { text1: "杭州", value1: "Hangzhou" },
      { text1: "宁波", value1: "Ningbo" },
      { text1: "温州", value1: "Wenzhou" },
      { text1: "绍兴", value1: "Shaoxing" },
    ],
    formDataProps: {
      text: "text1",
      value: "value1",
    },
  },
  {
    type: "time",
    label: "时间选择器",
    value: "time",
    inputName: "timeName",
    required: true,
  },
  {
    type: "cacendar",
    label: "日期选择器",
    value: "cacendar",
    inputName: "cacendarName",
    required: true,
  },
  {
    type: "runTime",
    label: "连续选择",
    value: "runTime",
    inputName: "runTimeName",
    required: true,
  },
  {
    type: "timeSecond",
    label: "单次选择",
    value: "timeSecond",
    required: true,
  },
]);
function finish() {
  console.log("请求接口", model);
}
</script>

<style scoped></style>
