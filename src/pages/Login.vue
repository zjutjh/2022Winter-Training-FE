<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import loginAPI from "../apis/login";
import checkSessionAPI from "../apis/checkSession";
import { useRouter } from "vue-router";
import { ConstantTypes } from "@vue/compiler-core";

const router = useRouter();

const isLoginSuccess = ref(false);
const username = ref("");
const password = ref("");

const checkSession = async () => {
  const res = await checkSessionAPI();
  console.log("checkSession", res);
}

const autoLogin = async () => {
  const res = await loginAPI();
  if (res.data.code === "200") {
    console.log("自动登录成功");
    isLoginSuccess.value = true;
    router.push("home");
  } else {
    console.log("自动登录失败");
  }
}

const onClick = async () => {
  const res = await loginAPI({
    username: username.value,
    password: password.value
  });
  console.log(res);
  if (res.data.code === "200") {
    console.log("登录成功");
    isLoginSuccess.value = true;
    router.push("home");
  } else {
    console.log("登录失败");
  }
}

onMounted(() => {
  autoLogin();
})

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

  <div id="testNextTick">nexttick</div>

  <button @click="onClick">submit</button>
  <button @click="checkSession">checkSession</button>
  <RouterView></RouterView>
</template>