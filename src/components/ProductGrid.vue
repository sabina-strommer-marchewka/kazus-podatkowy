<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'
import Product from './Product.vue'
const store = useProductStore()
const products = computed(() => store.products)
</script>

<template>
  <div class="product-grid">
    <h2 class="product-grid__heading">Wyszukaj czasopismo</h2>
    <div class="product-grid__product-container">
      <Product
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        class="product-grid__item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-grid {
  color: var(--teal);
  margin: 0 256px;

  &__heading {
    font-size: 2.625rem;
    margin-bottom: 88.49px;
  }
  &__product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
    column-gap: 57px;
    row-gap: 53.05px;
  }
  &__item {
    width: 25%;
  }
}
</style>
