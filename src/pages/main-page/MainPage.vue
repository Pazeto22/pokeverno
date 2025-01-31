<script setup lang="ts">
import { StarsBackground } from '@/components/ui'
import { CardGrid } from '@/components/team-creator'
</script>

<template>
  <div class="main-page">
    <StarsBackground />
    <div class="main-page__content">
      <img class="main-page__logo" src="/public/images/logo.png" alt="logo PokéVerno" />
      <CardGrid />
    </div>
  </div>
</template>

<style lang="scss">
@use './MainPage.scss';
</style>
