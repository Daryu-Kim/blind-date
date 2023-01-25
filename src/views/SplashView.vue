<template>
  <main>
    <img src="@/assets/logo.png" alt="Logo" class="splash-logo" />
    <div class="loading-container">
      <div class="loading"></div>
      <div id="loading-text">Loading</div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SplashView",
  components: {},
});
</script>

<style lang="scss">
@import "@/assets/scss/variabled";
@import "@/assets/scss/font.scss";
@import "@/assets/scss/reset.scss";

main {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    45deg,
    $gradient-top 0%,
    $gradient-midtop 19%,
    $gradient-midbottom 60%,
    $gradient-bottom 100%
  );
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-logo {
  animation: loading-logo 600ms ease-in-out normal;
  transform-origin: 50% 50%;
  width: 96px;
}

.loading-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 64px;
}

.loading {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-color: transparent white transparent white;
  animation: rotate-loading 1.5s linear 0s infinite normal;
  transform-origin: 50% 50%;
}

#loading-text {
  color: white;
  font-weight: 500;
  font-size: 9px;
  opacity: 0;
  text-align: center;
  text-transform: uppercase;
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: loading-text-opacity 2s linear 0s infinite normal;
}

@keyframes rotate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-text-opacity {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes loading-logo {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
