<script setup lang="ts">
import { handleAdd, couter } from "../hooks/ui/Index/handleAdd.ui.hook"; // 导入操作 UI 的钩子
import { getTest } from "../hooks/logic/Index/getTestData.logic.hook"; // 导入请求后端的逻辑钩子
import { useStore } from "../store/index"; // 使用 Pinia
let store = useStore(); // Pinia 使用
console.log("该值取自 Pinia：", store.content);
getTest();
</script>

<template>
  <div class="container">
    <h1>这是首页,搞起来！</h1>
    <span>现在值为：{{ couter }}</span>
    <div @click="handleAdd">按钮</div>
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
    margin-bottom: 26px;
  }
  span {
    margin-bottom: 16px;
  }
  div {
    width: 100px;
    padding: 12px 20px;
    border-radius: 90px;
    text-align: center;
    color: white;
    background-color: #ee496f;
  }
}
</style>
