import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useUserStore = defineStore("user", () => {
  // hooks -> React

  const username = ref("");

  const userUpperCase = computed(() => {
    return username.value.toUpperCase();
  })

  const setUsername = (value: string) => {
    username.value = value;
    localStorage.setItem("username", value);
  }

  const clear = () => {
    localStorage.removeItem("username");
    username.value = "";
  }

  return {
    username,
    userUpperCase,
    setUsername,
    clear
  }
})

export default useUserStore;