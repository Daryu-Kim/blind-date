<template>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/scss/variabled";
@import "@/assets/scss/reset.scss";

@media screen and (max-width: $mobile) {
  template {
    margin-bottom: 56px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
