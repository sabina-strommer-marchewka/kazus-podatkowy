<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'
import Product from './Product.vue'
import Pagination from './Pagination.vue'
import Wrapper from './Wrapper.vue'
const store = useProductStore()
const products = computed(() => store.products)
</script>

<template>
  <div class="product-grid">
    <Wrapper>
      <h2 class="product-grid__heading">Wyszukaj czasopismo</h2>
      <div class="product-grid__product-container">
        <Product v-for="(product, index) in products" :key="index" :product="product" />
      </div>
      <Pagination />
    </Wrapper>
  </div>
</template>

<style lang="scss" scoped>
.product-grid {
  color: var(--teal);
  margin: 0 256px;

  &__heading {
    font-size: 2.625rem;
    margin-bottom: 88.49px;
    font-weight: 900;
  }
  &__product-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    justify-content: space-between;
    margin-bottom: 2rem;
    column-gap: 57px;
    row-gap: 53.05px;
  }
}
</style>
