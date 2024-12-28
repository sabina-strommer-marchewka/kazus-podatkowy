<script setup>
import ProductGrid from './components/ProductGrid.vue'
import CartModal from './components/CartModal.vue'
import Cart from './components/Cart.vue'
</script>

<template>
  <header>
    <Cart />
  </header>
  <main class="main">
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
