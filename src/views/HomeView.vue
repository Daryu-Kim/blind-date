<template>
  <HeaderBar />
  <div class="home">
    <div class="home-recommend-box">
      <div class="home-recommend-title-box">
        <p class="home-recommend-title">오늘의 추천</p>
        <p class="home-recommend-title-des">매일 0시에 초기화됩니다</p>
      </div>
      <div class="home-recommend-list"></div>
    </div>
    <router-link to="/about" class="home-recommend-retry">
      <p>한번 더 추천받기</p>
    </router-link>
  </div>
  <FooterBar />
</template>

<script lang="ts" src="@/assets/ts/HomeScript.ts" />

<style lang="scss">
@import "@/assets/scss/views/HomeSCSS.scss";
</style>
