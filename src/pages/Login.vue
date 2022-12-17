<script setup lang="ts">
import { ref } from "vue";
import loginAPI from "../apis/login";
import checkoutSession from "../apis/checkSession";
import Home from "./Home.vue";

const isAutoLoginSuccess = ref(false);

const username = ref("");
const password = ref("");

const autoLogin = async () => {
  const res = await loginAPI();
  if (res.data.code == "200") {
    console.log("自动登录成功");
    isAutoLoginSuccess.value = true;
  }
  else console.log("自动登录失败");
}

const onClick = async () => {
  const res = await loginAPI({
    username: username.value,
    password: password.value
  });
  if (res.data.code === "200") {
    console.log("账号密码登录成功");
    isAutoLoginSuccess.value = true;
  }
  else {
    console.log("用户名或密码错误");
  }
}

const handleCheck = async () => {
  const res = await checkoutSession();
  console.log("checkSession", res);
}

autoLogin();

</script>

<template>
  <template v-if="!isAutoLoginSuccess">
    <div>
      <label for="username">Username</label>
      <input v-model="username" id="username" />
    </div>

    <div>
      <label for="password">Password</label>
      <input v-model="password" id="password" />
    </div>

    <button @click="onClick">submit</button>
    <button @click="handleCheck">checkSession</button>
  </template>
  <template v-else>
    <Home />
  </template>

</template>