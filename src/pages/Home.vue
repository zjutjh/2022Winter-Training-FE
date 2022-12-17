<script setup lang="ts">
import { storeToRefs } from 'pinia';
// import useUserStore from '../stores/useUserStore';
import { useUserStore, count } from "../stores"
import router from '../routers';

const store = useUserStore();
const { clear } = store;
const { username, userUpperCase } = storeToRefs(store);

const handleLogout = () => {
  clear();
  router.push("/login");
}

// const props = defineProps<PropsType>();
// const { username } = toRefs(props);

</script>

<template>
  {{ count.value }}
  <h1>Welcome {{ userUpperCase }}</h1>
  <button @click="handleLogout">登出</button>
</template>

<style scoped>

</style>