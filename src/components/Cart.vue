<script setup>
import { useProductStore } from '@/stores/products'
import { useCartModalStore } from '@/stores/cartModal'
import { computed } from 'vue'
const productStore = useProductStore()
const cartModalStore = useCartModalStore()

const cartProducts = computed(() => productStore.cartProducts)

</script>

<template>
  <button class="cart" aria-live="polite" @click="cartModalStore.toggleCartModal('visible')">
    <span class="visually-hidden"> {{ 'Ilość produktów w koszyku' }}</span>
    <span> {{ cartProducts.length }} </span>
  </button>
</template>

<style lang="scss" scoped>
.cart {
  padding: 2rem;
}
</style>
