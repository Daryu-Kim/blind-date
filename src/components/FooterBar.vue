<template>
  <Footer>
    <input
      type="radio"
      name="footer"
      id="footer-home"
      class="footer-item-radio"
      checked
    />
    <label for="footer-home" class="footer-item-label">
      <i class="fa-solid fa-house"></i>
      <p class="footer-item-text">홈</p>
    </label>
    <input
      type="radio"
      name="footer"
      id="footer-timeline"
      class="footer-item-radio"
    />
    <label for="footer-timeline" class="footer-item-label">
      <i class="fa-solid fa-timeline"></i>
      <p class="footer-item-text">타임라인</p>
    </label>
    <input
      type="radio"
      name="footer"
      id="footer-request"
      class="footer-item-radio"
    />
    <label for="footer-request" class="footer-item-label">
      <i class="fa-solid fa-heart"></i>
      <p class="footer-item-text">신청</p>
    </label>
    <input
      type="radio"
      name="footer"
      id="footer-chat"
      class="footer-item-radio"
    />
    <label for="footer-chat" class="footer-item-label">
      <i class="fa-solid fa-comments"></i>
      <p class="footer-item-text">채팅</p>
    </label>
    <input
      type="radio"
      name="footer"
      id="footer-profile"
      class="footer-item-radio"
    />
    <label for="footer-profile" class="footer-item-label">
      <i class="fa-solid fa-user"></i>
      <p class="footer-item-text">프로필</p>
    </label>
  </Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  name: "FooterBar",
  props: {
    msg: String,
  },
});

const footer_item = document.querySelectorAll(".footer-item-label");
const link = ["/"];
footer_item.forEach((element, index) => {
  element.addEventListener("click", function () {
    router.push(link[index]);
  });
});
</script>

<style lang="scss">
@import "@/assets/scss/components/main-footer.scss";
</style>
