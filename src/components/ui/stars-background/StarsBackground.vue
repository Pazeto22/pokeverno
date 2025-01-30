<script setup lang="ts">
import { ref } from 'vue'

const starsCount = 200

const stars = ref(
  Array.from({ length: starsCount }, () => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    size: Math.floor(Math.random() * 3) + 1,
    duration: Math.random() * 3000 + 2000 + 'ms'
  }))
)
</script>

<template>
  <div class="stars-background">
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
    />
  </div>
</template>

<style lang="scss">
@use './StarsBackground.scss';
</style>
