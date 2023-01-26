<template>
  <Footer>
    <router-link to="/" class="footer-item">
      <i class="fa-solid fa-house"></i>
      <p class="footer-item-text">asdf</p>
    </router-link>
    <router-link to="/Timeline" class="footer-item">
      <i class="fa-solid fa-house"></i>
      <p class="footer-item-text">asdf</p>
    </router-link>
    <router-link to="/Submit" class="footer-item">
      <i class="fa-solid fa-house"></i>
      <p class="footer-item-text">asdf</p>
    </router-link>
    <router-link to="/Chat" class="footer-item">
      <i class="fa-solid fa-house"></i>
      <p class="footer-item-text">asdf</p>
    </router-link>
    <router-link to="/Profile" class="footer-item">
      <i class="fa-solid fa-house"></i>
      <p class="footer-item-text">asdf</p>
    </router-link>
  </Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterBar",
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/components/main-footer.scss";
</style>
