<!-- @TODO: Componentizar depois -->

<script setup>
import { ref } from 'vue'

const starsCount = 200

const stars = ref(
  Array.from({ length: starsCount }, () => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    size: Math.random() > 0.5 ? 2 : 1,
    duration: Math.random() * 3000 + 2000 + 'ms'
  }))
)
</script>

<template>
  <div class="stars-container">
    <div
      v-for="(star, index) in stars"
      :key="index"
      class="star"
      :style="{
        top: star.top,
        left: star.left,
        '--size': star.size + 'px',
        '--duration': star.duration
      }"
    ></div>
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

.stars-container {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.star {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  animation: twinkle var(--duration) ease-in-out infinite;
  transform: translateZ(0);
  backface-visibility: hidden;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.8;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
  }
}
</style>
