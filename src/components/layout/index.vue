<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../header/index.vue";
import Bottom from "../bottom/index.vue";

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
    <div class="layout-header-wrapper">
      <Header></Header>
    </div>
    <div class="layout-main-wrapper">
      <router-view class="child-view"></router-view>
    </div>
    <div class="layout-bottom-wrapper">
      <div class="layout-bottom-inner-wp" v-if="bottomForbiddenFlag">
        <Bottom></Bottom>
      </div>
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
    width: 100%;
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
    flex-shrink: 0;
  }
}
</style>
