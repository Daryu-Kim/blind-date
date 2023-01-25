<template>
  <HeaderBar />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p style="font-size: 48px">asdfasdf</p>
    <p style="font-size: 48px">asdfasdf</p>
    <p style="font-size: 48px">asdfasdf</p>
    <p style="font-size: 48px">asdfasdf</p>
    <p style="font-size: 48px">asdfasdf</p>
    <p>wuiefhiuweni</p>
    <p>asdfasdf</p>
    <p>wuiefhiuweni</p>
    <p>asdfasdf</p>
    <p>wuiefhiuweni</p>
    <p>asdfasdf</p>
    <p>wuiefhiuweni</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dicta!
      Ipsam, delectus obcaecati. Iusto dolores aperiam nulla porro corporis
      omnis ipsum magni sed quae, dolorem amet dolore exercitationem molestias!
      Dolor.
    </p>
  </div>
  <FooterBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderBar,
    FooterBar,
  },
});
</script>

<style lang="scss">
.home {
  margin-top: 42px;
  height: calc(100vh - 42px - 56px);
  overflow: scroll;
}
</style>
