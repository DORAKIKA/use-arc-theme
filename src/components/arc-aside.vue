<script setup lang="ts">
import { HomeIcon, PaletteIcon } from "lucide-vue-next";
import ArcIcon from "./arc-icon.vue";
</script>

<template>
  <aside class="arc-aside">
    <div class="favorite-box">
      <router-link class="favorite" to="/">
        <HomeIcon class="ico"></HomeIcon>
      </router-link>
      <router-link class="favorite" to="/palette">
        <PaletteIcon class="ico" />
      </router-link>
    </div>
    <div class="tab-box">
      <router-link
        class="tab"
        :to="`/website/${encodeURIComponent('https://dorakika.cn')}`"
      >
        <img class="ico" src="https://dorakika.cn/favicon.ico" alt="DORAKIKA" />
        <span class="text">DORAKIKA</span>
      </router-link>
      <router-link
        class="tab"
        :to="`/website/${encodeURIComponent('https://arc.net')}`"
      >
        <ArcIcon class="ico" />
        <span class="text">Arc Browser</span>
      </router-link>
    </div>
  </aside>
</template>

<style scoped>
.arc-aside {
  width: 220px;
  height: 100%;
}
.favorite-box {
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
  grid-auto-rows: 50px;
}
.favorite {
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--arc-palette-minContrastColor);
}
.favorite.router-link-exact-active {
  box-shadow: 1px 1px 6px -4px var(--arc-palette-background);
  background-color: #fff3;
}
.favorite.router-link-exact-active::before {
  background-color: white;
}
.favorite::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--arc-palette-background);
  border-radius: 0.5rem;
  opacity: 0.1;
  transition: opacity 250ms;
}
.favorite:hover::before {
  /* background: var(--arc-palette-focus); */
  opacity: 0.2;
}
.favorite .ico {
  width: 24px;
  height: 24px;
}

.tab-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
}
.tab {
  width: 100%;
  height: 40px;
  position: relative;
  border-radius: 0.75rem;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--arc-palette-minContrastColor);
  border-radius: 16px;
  overflow: hidden;
}
.tab::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--arc-palette-background);
  opacity: 0;
  transition: opacity 250ms;
}
.tab.router-link-exact-active {
  box-shadow: 1px 1px 6px -4px var(--arc-palette-background);
  background-color: #fff3;
}
.tab.router-link-exact-active::before {
  background-color: white;
}
.tab:hover::before {
  opacity: 0.1;
}
.tab .ico {
  width: 24px;
  height: 24px;
}
.tab .text {
  font-family: monospace;
}
</style>
