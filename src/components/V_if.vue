<script lang="ts" setup>
import { onMounted, ref } from "vue";

const chartRef = ref(null);
const cardRef = ref(null);

console.log(cardRef);
onMounted(() => {
  console.log(cardRef);
})

const loading = ref(true);
const arr = ref([1, 2, 3, 4, 5]);

const str = "hello";
const number = 1;
const combine = `hello${number}`;

</script>

<template>

  <div id="charts" ref="chartRef"></div>

  <div class="card" ref="cardRef">
    <button type="button" @click="loading = !loading">
      Loading ? {{ loading }}
    </button>
  </div>
    <div :style="`font-size: 70px`">hello</div>

    <template v-for="item in arr">
      <li v-if="item % 2">{{item}}</li>
    </template>

    <div>----------</div>

    <template v-if="loading">
      <li v-for="item in arr">{{item}}</li>
    </template>
</template>