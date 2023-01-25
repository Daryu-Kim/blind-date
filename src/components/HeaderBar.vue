<template>
  <header>
    <div class="header-list">
      <p class="header-item">추천</p>
      <p class="header-item">인기</p>
      <p class="header-item">바(Bar)</p>
    </div>
    <img src="@/assets/svg/header-shop.svg" alt="SHOP" class="header-menu" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderBar",
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/main-header.scss";
</style>
