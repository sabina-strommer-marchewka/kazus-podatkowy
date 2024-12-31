<script setup>
import ProductGrid from './components/ProductGrid.vue'
import Hero from './components/Hero.vue'
import CartModal from './components/CartModal.vue'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <main class="main">
    <Hero />
    <ProductGrid />
    <CartModal />
  </main>
</template>

<style lang="scss">
@use './styles/styles.scss';
.main {
  position: relative;
}
</style>
