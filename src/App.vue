<script setup>
import ProductGrid from './components/ProductGrid.vue'
import Cart from './components/Cart.vue'
</script>

<template>
  <header>
    <Cart />
  </header>
  <main>
    <ProductGrid />
  </main>
</template>

<style lang="scss">
@use './styles/styles.scss';
</style>
