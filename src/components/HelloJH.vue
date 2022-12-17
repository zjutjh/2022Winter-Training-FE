<script setup lang="ts">
import { ref } from 'vue';

// const { msg } = defineProps<{msg: string}>();

type PropsType = {
  msg: string,
  color: string
}

// TODO: add title bar
// FIXME: fix bugs

interface BaseInterface {
  msg: string;
  color: string;
}

interface Lesson {
  name: string;
  // type: "必修" | "选修";
  type: string;
  // key: type
}

const name = 1;

const val: number = 1;

interface PropsInterface extends BaseInterface{

}

const { msg } = defineProps<{ msg?: string, color?: string }>();
// const props = defineProps<PropsInterface>();

const emit = defineEmits(["change", "change2"]);

const handleClick = () => {
  emit("change", 999);
}

</script>

<template>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
