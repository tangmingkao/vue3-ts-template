<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// is show common bottom
const bottomForbiddenFlag = computed(() => {
  const { meta } = route || {};
  const { bottomForbidden } = meta || {};
  const flag = !bottomForbidden;
  return flag;
});
</script>
<template>
  <div class="app-layout-wrapper">
    <div class="layout-header-wrapper"></div>
    <div class="layout-main-wrapper">
      <router-view class="child-view"></router-view>
    </div>
    <div class="layout-bottom-wrapper">
      <div class="layout-bottom-inner-wp" v-if="bottomForbiddenFlag"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-layout-wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .layout-header-wrapper {
    height: 50px;
    width: 100%;
    background: yellow;
    flex-shrink: 0;
  }
  .layout-main-wrapper {
    width: 100%;
    flex: 1;
    height: auto;
    flex-shrink: 0;
  }
  .layout-bottom-wrapper {
    width: 100%;
    background: blue;
    flex-shrink: 0;
    .layout-bottom-inner-wp {
      // test code
      height: 50px;
    }
  }
}
</style>
