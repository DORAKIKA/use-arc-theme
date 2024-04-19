<script setup lang="ts">
import { ref } from "vue";

const colors = [
  "var(--arc-palette-foregroundPrimary)",
  "var(--arc-palette-foregroundSecondary)",
  "var(--arc-palette-foregroundTertiary)",
  "var(--arc-palette-title)",
  "var(--arc-palette-subtitle)",
  "var(--arc-palette-cutoutColor)",
];
const backgrounds = [
  "var(--arc-palette-background)",
  "var(--arc-palette-backgroundExtra)",
  "var(--arc-palette-focus)",
  "var(--arc-palette-hover)",
];

const palettes = [] as { background: string; color: string }[];
backgrounds.forEach((b) => {
  colors.forEach((c) => {
    palettes.push({
      background: b,
      color: c,
    });
  });
});
const activePalette = ref(0);
</script>

<template>
  <table class="raw">
    <tr>
      <td>background:</td>
      <td>{{ palettes[activePalette].background }}</td>
    </tr>
    <tr>
      <td>color:</td>
      <td>{{ palettes[activePalette].color }}</td>
    </tr>
  </table>
  <div
    class="palette-container"
    :style="{
      'grid-template-columns': `repeat(${colors.length}, 1fr)`,
    }"
  >
    <div
      class="palette-box"
      v-for="(p, index) in palettes"
      :class="index === activePalette ? 'active' : ''"
      :key="index"
      :style="p"
      @click="activePalette = index"
    >
      {{ index }}
    </div>
  </div>
</template>

<style scoped>
.palette-container {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-auto-rows: 40px;
  gap: 1rem;
}
.palette-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
}
.palette-box.active {
  border-width: 4px;
}
</style>
