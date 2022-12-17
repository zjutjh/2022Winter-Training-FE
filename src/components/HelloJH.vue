<script setup lang="ts">
import { onBeforeUpdate, ref, toRefs } from 'vue';
import { useScreenSize } from "../hooks";

const { height, width } = useScreenSize();

const props = defineProps<{ value?: string }>();
const { value: valueRef } = toRefs(props);
// const { value } = defineProps<{ value?: string }>();

const emit = defineEmits(["update:value"]);

let name = "j10c";
const handleChange = () => {
  emit("update:value", `${valueRef?.value}6`);
}

console.log("render");

onBeforeUpdate(() => {
  name = "b";
})

</script>

<template>
  <h1>value: {{ name }}</h1>
  <h1>valueRef: {{ valueRef }}</h1>
  <button @click="handleChange">add 6</button>
  <h2>{{ height }}</h2>
  <h2>{{ width }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
