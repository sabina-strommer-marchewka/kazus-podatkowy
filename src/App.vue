<script setup>
import Hero from './components/Hero.vue'
import ProductGrid from './components/ProductGrid.vue'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <main class="main">
    <Hero />
    <ProductGrid />
  </main>
</template>

<style lang="scss">
@use './styles/styles.scss';

.main {
  position: relative;
}
</style>
