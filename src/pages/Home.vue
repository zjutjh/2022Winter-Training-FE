<script setup lang="ts">
import { onMounted } from 'vue';
import loginAPI from '../apis/login';
import router from '../routers';

const checkLogin = async () => {
  const res = await loginAPI();
  if (res.data.code === "200") {
    console.log("校验身份成功");
  } else {
    router.push("/login");
  }
}

onMounted(() => {
  checkLogin();
})

</script>

<template>

  <h1>Welcome</h1>

</template>

<style scoped>

</style>