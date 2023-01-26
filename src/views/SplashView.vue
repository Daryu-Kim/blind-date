<template>
  <main>
    <div class="loading-logobox">
      <img src="@/assets/logo.png" alt="Logo" class="splash-logo" />
      <p class="splash-title">Title</p>
    </div>
    <div class="loading-container">
      <div class="loading"></div>
      <div id="loading-text">Loading</div>
    </div>
  </main>
</template>

<script lang="ts" src="@/assets/ts/SplashScript.ts"></script>

<style lang="scss">
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/views/SplashSCSS.scss";
</style>
