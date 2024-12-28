<script setup>
import { useProductStore } from '@/stores/products'
import { computed } from 'vue'
const store = useProductStore()

const cartProducts = computed(() => store.cartProducts)
</script>

<template>
  <div class="cart" aria-live="polite">
    <span class="visually-hidden"> {{ 'Ilość produktów w koszyku' }}</span>
    {{ cartProducts.length }}
  </div>
</template>

<style lang="scss" scoped>
.cart {
  padding: 2rem;
}
</style>
