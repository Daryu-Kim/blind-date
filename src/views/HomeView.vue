<template>
  <HeaderBar />
  <div class="home">
    <div class="home-recommend-box">
      <div class="home-recommend-title-box">
        <p class="home-recommend-title">오늘의 추천</p>
        <p class="home-recommend-title-des">매일 0시에 초기화됩니다</p>
      </div>
      <div class="home-recommend-list" id="list">
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
      </div>
      <router-link to="/about" class="home-recommend-retry">
        <p>한번 더 추천받기</p>
      </router-link>
    </div>
    <div class="home-recommend-box">
      <div class="home-recommend-title-box">
        <p class="home-recommend-title">맞춤 추천</p>
      </div>
      <div class="home-filter-list">
        <router-link to="" class="home-filter-item">
          <i class="fa-solid fa-calendar"></i>
          <p>오늘 접속한 동네 친구</p>
        </router-link>
        <router-link to="" class="home-filter-item">
          <i class="fa-solid fa-calendar"></i>
          <p>새로 가입한 친구</p>
        </router-link>
        <router-link to="" class="home-filter-item">
          <i class="fa-solid fa-calendar"></i>
          <p>내 주변 친구</p>
        </router-link>
        <router-link to="" class="home-filter-item">
          <i class="fa-solid fa-check"></i>
          <p>내 취향에 맞는 친구 찾기</p>
        </router-link>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script lang="ts" src="@/assets/ts/HomeScript.ts" defer />

<style lang="scss">
@import "@/assets/scss/views/HomeSCSS.scss";
</style>
