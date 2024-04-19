<script setup lang="ts">
import arcAside from "./components/arc-aside.vue";
import bg from "./assets/animal.png";
import { onBeforeUnmount, onMounted } from "vue";

const arcPaletteList = [
  "not-arc",
  "arc-palette-one",
  "arc-palette-two",
  "arc-palette-three",
];
function setArcPaletteCls(num: number) {
  arcPaletteList.forEach((cls, index) => {
    if (index == num) {
      if (!document.documentElement.classList.contains(cls)) {
        document.documentElement.classList.add(cls);
      }
    } else {
      document.documentElement.classList.remove(cls);
    }
  });
}
function setIsNotArc(flag: boolean) {
  if (!flag) {
    document.body.classList.add("not-arc");
  } else {
    document.body.classList.remove("not-arc");
  }
}

function updateArcPalette() {
  const computedStyle = document.documentElement.computedStyleMap();

  if (computedStyle.get("--arc-background-gradient-overlay-color0")) {
    setArcPaletteCls(3);
    setIsNotArc(true);
  } else if (computedStyle.get("--arc-background-gradient-color0")) {
    setArcPaletteCls(2);
    setIsNotArc(true);
  } else if (computedStyle.get("--arc-background-simple-color")) {
    setArcPaletteCls(1);
    setIsNotArc(true);
  } else {
    setArcPaletteCls(3);
    // not arc -> preset palette
    setIsNotArc(false);
  }
}

let intervalTimer: number | null = null;
updateArcPalette();
onMounted(() => {
  intervalTimer = setInterval(updateArcPalette, 1000);
});

onBeforeUnmount(() => {
  if (intervalTimer) {
    clearInterval(intervalTimer);
  }
});
</script>

<template>
  <div class="bg" :style="`background: url(${bg})`">
    <div class="arc">
      <div class="bg-simple"></div>
      <div class="bg-gradient"></div>
      <div class="bg-overlay"></div>
      <div class="core">
        <arc-aside></arc-aside>
        <main class="main">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  position: relative;
}
.bg-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.68;
  background: linear-gradient(
    to right bottom,
    var(--arc-background-gradient-color0),
    var(--arc-background-gradient-color1)
  );
}
.arc-palette-three .bg-gradient {
  background: linear-gradient(
    to right bottom,
    var(--arc-background-gradient-color0),
    var(--arc-background-gradient-color1)
  );
}
.bg-simple {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: var(--arc-background-simple-color);
}
.bg-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: linear-gradient(
    to bottom,
    var(--arc-background-gradient-overlay-color0),
    var(--arc-background-gradient-overlay-color1)
  );
}
.arc {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
}
.core {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}
.main {
  flex-grow: 1;
  height: calc(100% - 1rem);
  border-radius: 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  background-color: var(--arc-palette-backgroundExtra);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
.arc-aside {
  flex-shrink: 0;
}
</style>
