<template>
  <div class="home-recommend-item">
    <div class="home-recommend-item-overlay"></div>
    <div class="home-recommend-item-textbox">
      <div class="home-recommend-item-text-top">
        <p class="home-recommend-item-text-name">김원재</p>
        <p class="home-recommend-item-text-age">22</p>
      </div>
      <p class="home-recommend-item-text-address">대전광역시 중구 은행동</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecommendItem",
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/variabled";

.home-recommend-item {
  background-image: url("https://picsum.photos/600");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  height: 50vh;
  width: 100%;
  cursor: pointer;
  position: relative;
}

.home-recommend-item-overlay {
  width: 100%;
  height: 50vh;
  position: absolute;
  border-radius: 8px;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba($color: #000000, $alpha: 0.6) 75%
  );
  // background-color: rgba(0, 0, 0, 0.35);
}

.home-recommend-item-textbox {
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: 24px;
  left: 0;
}

.home-recommend-item-text-top {
  display: flex;
  align-items: center;
}

.home-recommend-item-text-top > p {
  margin-right: 12px;
}

.home-recommend-item-text-top > p:last-child {
  margin-right: 0;
}

.home-recommend-item-text-name {
  font-size: 32px;
  color: white;
  font-weight: 700;
  line-height: 36px;
}

.home-recommend-item-text-age {
  font-size: 24px;
  color: $accent-color;
  line-height: 36px;
}

.home-recommend-item-text-address {
  font-size: 20px;
  color: white;
  line-height: 42px;
}
</style>
