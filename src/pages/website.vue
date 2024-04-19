<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <div v-if="route.params.url" class="arc-site-container">
    <iframe class="arc-site" :src="(route.params.url as string)" />
  </div>
  <div v-else>404</div>
</template>

<style scoped>
.arc-site-container {
  width: 100%;
  height: 100%;
}
.arc-site {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
