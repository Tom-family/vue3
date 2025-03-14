<template>
  <van-form @submit="onSubmit">
    <van-cell-group>
      <template v-for="(item, index) in formData" :key="'b' + index">
        <template v-if="item.type == 'VCell'">
          <div class="title-squire" v-if="!item.first"></div>
          <div class="title-box" v-if="item.title">
            <div class="title" style="font-weight: 900">{{ item.title }}</div>
          </div>
        </template>
        <!-- 输入框 -->
        <van-field
          v-if="item.type == 'input'"
          :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
          clearable
          v-model="model[item.value]"
          :name="item.label"
          :label="item.label"
          :type="item.inputType ? item.inputType : 'text'"
          placeholder="请输入"
          :rules="[
            { required: item.required, message: item.message ? item.message : '请填写' },
            { validator: item.validator ? item.validator : null, message: item.errorMessage },
          ]"
          :required="item.required"
        />
        <!-- 开关 -->
        <van-field v-else-if="item.type == 'switch'" :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }" :name="item.label" :label="item.label" :required="item.required">
          <template #input>
            <van-switch size="22px" v-model="model[item.value]" />
          </template>
        </van-field>
        <!-- 复选框 -->
        <van-field
          v-else-if="item.type == 'checkbox'"
          :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
          :name="item.label"
          :label="item.label"
          :required="item.required"
          :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
        >
          <template #input>
            <van-checkbox-group v-model="model[item.value]" direction="horizontal">
              <van-checkbox icon-size="16px" :name="project[item.formDataProps ? item.formDataProps.value : 'value']" shape="square" v-for="(project, index) in item.formData" :key="index">
                {{ project[item.formDataProps ? item.formDataProps.name : "name"] }}
              </van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <!-- 单选框 -->
        <van-field
          v-else-if="item.type == 'radio'"
          :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
          :label="item.label"
          :required="item.required"
          :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
        >
          <template #input>
            <van-radio-group v-model="model[item.value]" direction="horizontal">
              <van-radio icon-size="16px" :name="project[item.formDataProps ? item.formDataProps.value : 'value']" v-for="(project, index) in item.formData" :key="index">
                {{ project[item.formDataProps ? item.formDataProps.name : "name"] }}
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <!-- 文件上传 -->
        <van-field
          v-else-if="item.type == 'uploader'"
          :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
          :label="item.label"
          :required="item.required"
          :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
        >
          <template #input>
            <van-uploader v-model="model[item.value]" multiple :max-count="item.maxCount" />
          </template>
        </van-field>
        <!-- 选择器 -->
        <template v-else-if="item.type == 'select'">
          <van-field
            v-model="model[item.inputName]"
            :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
            is-link
            readonly
            :name="item.label"
            :label="item.label"
            placeholder="请选择"
            @click="selectPicker = true"
            :required="item.required"
            :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
          />
          <van-popup v-model:show="selectPicker" destroy-on-close position="bottom">
            <van-picker
              :columns="item.formData"
              :model-value="model[item.value]"
              @confirm="(selectedValues) => handleConfirm(selectedValues, item)"
              @cancel="selectPicker = false"
              :columns-field-names="item.formDataProps ? item.formDataProps : ''"
            />
          </van-popup>
        </template>
        <!-- 时间选择 -->
        <template v-else-if="item.type == 'time'">
          <van-field
            :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
            v-model="model[item.inputName]"
            is-link
            readonly
            :name="item.label"
            :label="item.label"
            placeholder="请选择"
            @click="timePicker = true"
            required="item.required"
            :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
          />
          <van-popup v-model:show="timePicker" destroy-on-close position="bottom">
            <van-date-picker :min-date="minDate" :max-date="maxDate" :model-value="model[item.value]" @confirm="(selectedValues) => timeConfirm(selectedValues, item)" @cancel="timePicker = false" />
          </van-popup>
        </template>
        <!-- 日期选择 -->
        <template v-else-if="item.type == 'cacendar'">
          <van-field
            :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
            v-model="model[item.inputName]"
            is-link
            readonly
            :name="item.label"
            :label="item.label"
            placeholder="请选择"
            @click="calendarPicker = true"
            required="item.required"
            :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
          />
          <van-calendar
            :min-date="minDate"
            :max-date="maxDate"
            v-model:show="calendarPicker"
            :default-date="model[item.value]"
            type="range"
            @confirm="(selectedValues) => calendarConfirm(selectedValues, item)"
          />
        </template>
        <template v-else-if="item.type == 'runTime'">
          <van-field
            v-model="model[item.inputName]"
            :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
            clearable
            is-link
            readonly
            :name="item.label"
            :label="item.label"
            placeholder="请选择"
            @click="openTimePicker"
            :required="item.required"
            :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
          >
            <template #input v-if="model[item.inputName]">
              <div>
                <div>{{ model[item.inputName].split(",")[0] }}</div>
                <div>{{ model[item.inputName].split(",")[1] }}</div>
              </div>
            </template>
          </van-field>
          <runTime
            :values="model[item.value]"
            @changeValue="onClose"
            :showPicker="runTimePicker"
            @confirm="
              (selectedValues) => {
                runTimeConfirm(selectedValues, item);
              }
            "
            :key="timerDate"
            :times="2"
            :title="dataTitle"
          />
        </template>
        <template v-else-if="item.type == 'timeSecond'">
          <van-field
            v-model="model[item.value]"
            :style="{ '--width': item.lableWidth ? item.lableWidth : '2.4rem' }"
            clearable
            is-link
            readonly
            :name="item.label"
            :label="item.label"
            placeholder="请选择"
            @click="timeSecondPicker = true"
            :required="item.required"
            :rules="[{ required: item.required, message: item.message ? item.message : '请选择' }]"
          />
          <runTime
            :values="model[item.value]"
            @changeValue="timeSecondClose"
            :showPicker="timeSecondPicker"
            @confirm="
              (selectedValues) => {
                timeSecondConfirm(selectedValues, item);
              }
            "
            :key="timerDate"
            :times="2"
            :title="dataTitle"
          />
        </template>
      </template>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>
<script setup lang="ts">
import moment from "moment";
import { ref, defineProps, withDefaults, defineEmits } from "vue";
import runTime from "../../components/runTime/runTime.vue";

const props = withDefaults(defineProps<{ formData: any; model: any; finish: Function }>(), {});
function onSubmit() {
  props.finish();
}

let minDate = ref(new Date(2015, 0, 1));
let maxDate = ref(new Date(2030, 0, 1));

// 选择器
const selectPicker = ref(false);
const handleConfirm = (selectedValues, item) => {
  props.model[item.inputName] = selectedValues.selectedOptions[0][item.formDataProps ? item.formDataProps.text : "text"];
  props.model[item.value] = selectedValues.selectedValues;
  selectPicker.value = false;
};

// 时间选择
const timePicker = ref(false);
const timeConfirm = (selectedValues, item) => {
  props.model[item.inputName] = selectedValues.selectedValues.join("/");
  props.model[item.value] = selectedValues.selectedValues;
  timePicker.value = false;
};

// 日历选择
const calendarPicker = ref(false);
const calendarConfirm = (selectedValues, item) => {
  let startTime = moment(selectedValues[0]).format("YYYY-MM-DD");
  let endTime = moment(selectedValues[1]).format("YYYY-MM-DD");
  props.model[item.inputName] = startTime + "-" + endTime;
  props.model[item.value] = selectedValues;
  calendarPicker.value = false;
};

// 日期连续选择
const dataTitle = ref("开始时间"); //标题
const timeNewList = ref([]); //连续选择的时间
const timerDate = ref(0); //是否重置组件
const runTimePicker = ref(false); //弹框显隐
const runTimeConfirm = (selectedValues, item) => {
  if (timeNewList.value.length > 0 && timeNewList.value[0] == selectedValues) {
    showToast("两次日期不能相同");
    return;
  }
  timeNewList.value.push(selectedValues);
  dataTitle.value = "结束时间";
  if (timeNewList.value.length < 2) {
    runTimePicker.value = true;
  } else {
    // 升序
    timeNewList.value = timeNewList.value.sort((a: string, b: string) => {
      return new Date(a).getTime() - new Date(b).getTime();
    });
    props.model[item.inputName] = timeNewList.value;
    props.model[item.value] = timeNewList.value[0];
    timeNewList.value = [];
    timerDate.value = new Date().getTime();
    runTimePicker.value = false;
  }
};
const onClose = () => {
  timeNewList.value = [];
  timerDate.value = new Date().getTime();
  runTimePicker.value = false;
};
const openTimePicker = () => {
  dataTitle.value = "开始时间";
  runTimePicker.value = true;
};

// 日期时分秒单选
const timeSecondPicker = ref(false); //弹框显隐
const timeSecondClose = () => {
  timeSecondPicker.value = false;
};
const timeSecondConfirm = (selectedValues, item) => {
  props.model[item.value] = selectedValues;
  timeSecondPicker.value = false;
};
</script>
<style lang="scss" scoped>
:deep(.van-field__label) {
  width: var(--width);
}

.title-squire {
  width: 100%;
  height: 15px;
  background: var(--van-cell-border-color);
}
.title-box {
  padding: 0 16px;

  .title {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid var(--van-cell-border-color);
    font-size: 14px;
    font-weight: 900;
    &::before {
      content: "";
      width: 4px;
      height: 16px;
      background: #1989FA;
      margin-right: 4px;
    }
  }
}
</style>
