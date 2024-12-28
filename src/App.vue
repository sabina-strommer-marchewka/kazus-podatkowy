<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'
const store = useProductStore()
const products = computed(() => store.products)
</script>

<template>
  <header>
    <div v-for="product in products" :key="product.id">
      <img :src="product.image" alt="product.name" />
      <p>{{ product.name }}</p>
    </div>
  </header>
  <main></main>
</template>

<style lang="scss">
@use './styles/styles.scss';
</style>
