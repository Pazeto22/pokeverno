<script setup lang="ts">
import { ref } from 'vue'

type Card = {
  name: string
  image: string
}

type PokemonTeam = Card[]

const pokemonTeam = ref<PokemonTeam>([
  { name: 'Pikachu', image: 'pikachu.png' },
  { name: 'Charmander', image: 'charmander.png' },
  { name: 'Squirtle', image: 'squirtle.png' },
  { name: 'Bulbasaur', image: 'bulbasaur.png' },
  { name: 'Jigglypuff', image: 'jigglypuff.png' },
  { name: 'Meowth', image: 'meowth.png' }
])
</script>

<template>
  <div class="card-grid">
    <div class="card-grid__container">
      <div v-for="(pokemon, index) in pokemonTeam" :key="index" class="card-grid__card">
        <div class="card-grid__card-content">{{ pokemon.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './CardGrid.scss';
</style>
