<script setup lang="ts">
import { ref } from "vue";
import loginAPI from "../apis/login";
import checkoutSession from "../apis/checkSession";

const username = ref("");
const password = ref("");


const autoLogin = async () => {
  const res = await loginAPI();
  if (res.data.code == "200"){
    console.log("自动登录成功");
  }
  else console.log("自动登录失败");
}

const onClick = async () => {
  const res = await loginAPI({
    username: username.value,
    password: password.value
  });
  console.log(res);
}

const handleCheck = async () => {
  const res = await checkoutSession();
  console.log("checkSession", res);
}

autoLogin();

</script>

<template>
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