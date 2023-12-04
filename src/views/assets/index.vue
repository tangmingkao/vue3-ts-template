<script setup lang="ts">
import { ref } from 'vue';
const value1 = ref(true);
</script>
<template>
  <div class="">
    <el-switch
      v-model="value1"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
  </div>
</template>
<style lang="scss" scoped></style>
