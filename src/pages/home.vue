<script setup lang="ts">
import ArcIcon from "../components/arc-icon.vue";
import arcThemeImg from "../assets/arc-theme.jpg";
import arcThemeImg2 from "../assets/arc-theme2.png";
</script>

<template>
  <h1>use arc theme</h1>
  <p>try to change theme in arc browser(only in mac)</p>
  <router-link :to="`/website/${encodeURIComponent('https://arc.net')}`">
    <ArcIcon></ArcIcon>
  </router-link>
  <div class="container">
    <img class="screen-shot" :src="arcThemeImg" alt="arc theme image" />
    <img class="screen-shot" :src="arcThemeImg2" alt="arc theme image 2" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.screen-shot {
  width: 40%;
}
</style>
