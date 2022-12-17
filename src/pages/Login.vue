<script setup lang="ts">
import { ref, watch } from "vue";
import loginAPI from "../apis/login";
import { useRouter } from "vue-router";
import { useUserStore, count } from "../stores";
import { HelloJH } from "../components";

const router = useRouter();

count.value++;

const isLoginSuccess = ref(false);

const username = ref("");
const password = ref("");

const store = useUserStore();
const { setUsername } = store;

const autoLogin = async () => {
  const res = await loginAPI();
  if (res.data.code == "200") {
    console.log("自动登录成功");
    isLoginSuccess.value = true;
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
    isLoginSuccess.value = true;
  }
  else {
    console.log("用户名或密码错误");
  }
}

const msg = ref("default");

watch(isLoginSuccess, (newVal) => {
  if (newVal) {
    setUsername(username.value);
    router.push("/home");
  }
})

// autoLogin();

</script>

<template>
  <h1>{{ count.value }}</h1>
  <div>
    <label for="username">Username</label>
    <input v-model="username" id="username" />
  </div>

  <div>
    <label for="password">Password</label>
    <input v-model="password" id="password" />
  </div>

  <button @click="() => onClick()">submit1</button>
  <RouterLink to="/home">Home</RouterLink>

  <HelloJH v-model:value="msg" />

</template>