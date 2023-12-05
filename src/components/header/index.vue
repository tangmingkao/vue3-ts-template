<script setup lang='ts'>
import { isDark, toggleDark } from '@/hooks/use-toggle';
console.log('dark mode:>>>',isDark.value);
</script>
<template>
    <div class='app-header-wrapper'>
      <el-button type="primary" @click="toggleDark()">更改主题</el-button>
    </div>
</template>
<style lang='scss' scoped>
.app-header-wrapper{
  height: 50px;
  width: 100%;
  background-color: var(--common-theme-color);
}

</style>