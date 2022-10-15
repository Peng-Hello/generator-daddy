<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NOT_FOUND_COUNT_DOWN_TIME } from "../../const";
let router = useRouter();
let countDown = ref(NOT_FOUND_COUNT_DOWN_TIME);
const id = setInterval(() => {
  if (countDown.value === 0) {
    clearInterval(id);
    router.push({ name: "Index" });
  }
  countDown.value--;
}, 1000);
</script>

<template>
  <div class="container">
    <h1>你要访问的页面不存在哦！</h1>
    <span>即将自动重定向到首页: 还剩余 {{ countDown }} 秒</span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 36px;
  }
}
</style>
