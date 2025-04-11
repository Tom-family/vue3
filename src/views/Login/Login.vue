<template>
  <div class="login-page">
    <img class="login-logo" src="@/assets/image/login.png" alt="" />
    <div class="pro-name">项目名</div>
    <div class="form-box">
      <van-form @submit="onSubmit" :show-error-message="false" :show-error="true" label-width="20px">
        <van-cell-group>
          <div class="field-box">
            <van-field v-model="account" name="account" label=" " placeholder="请输入用户名" />
            <img class="img" src="@/assets/image/user.png" alt="" />
          </div>
          <div class="field-box">
            <van-field v-model="password" type="password" name="password" label=" " placeholder="请输入密码" />
            <img class="img" src="@/assets/image/password.png" alt="" />
          </div>
          <div class="account-box">
            <van-checkbox v-model="checked">记住账号</van-checkbox>
          </div>
        </van-cell-group>
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/api/index";
import { useCounterStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useMousePosition } from "@/hooks/user";
const router = useRouter();
const counterStore = useCounterStore();
const hooks = useMousePosition();
function add() {
  counterStore.increment();
}
counterStore.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state.count2);
});
hooks.add();

// 表单相关
// 表单相关
const account = ref("");
const password = ref("");
const checked = ref(true);
const onSubmit = async (values) => {
  const postdata = {
    account: account.value,
    password: password.value,
  };
  let res = await login(postdata);
  counterStore.token = res.data.token;
  router.push("/home");
};
</script>
<style scoped lang="scss">
.login-page {
  padding-top: 10vh;
  text-align: center;
  height: 100%;
  background: red url("../../assets/image/loginBg.jpg");
  background-size: 100% 100%;
  background-position: center 0;
  .login-logo {
    width: 75px;
    margin-top: 0.5rem;
  }
  .pro-name {
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    padding: 15px 0 30px 0;
  }
  .form-box {
    padding: 0 30px;
    .field-box {
      position: relative;
      .img {
        position: absolute;
        top: 10px;
        left: 12px;
        width: 25px;
      }
    }
  }
  .account-box {
    margin-bottom: 15px;
  }
  .van-cell-group {
    background: transparent;
  }
  .van-hairline,
  .van-hairline--top,
  .van-hairline--left,
  .van-hairline--right,
  .van-hairline--bottom,
  .van-hairline--surround,
  .van-hairline--top-bottom {
    position: unset;
  }
  .van-field {
    border-radius: 15px;
    margin-bottom: 10px;
  }
  :deep(.van-checkbox__label) {
    color: #fff;
  }
}
</style>
