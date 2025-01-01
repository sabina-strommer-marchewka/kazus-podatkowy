<script setup>
import { computed } from 'vue'

import { useProductStore } from '@/stores/products'
import { useCartModalStore } from '@/stores/cartModal'

import IconButton from './IconButton.vue'
import Badge from './Badge.vue'

const productStore = useProductStore()
const cartModalStore = useCartModalStore()
const cartProducts = computed(() => productStore.cartProducts)
</script>

<template>
  <span class="cart">
    <IconButton
      icon-name="cart"
      icon-color="var(--black)"
      :icon-width="20"
      :icon-height="20"
      bg-color="transparent"
      :bg-width="40"
      :bg-height="40"
      :is-rounded="false"
      aria-label="Otwórz koszyk"
      @click="cartModalStore.toggleCartModal('visible')"
    />
    <Badge
      :content="cartProducts.length"
      bg-color="var(--teal)"
      color="var(--white)"
      class="cart__badge"
    />
    <span class="visually-hidden" aria-live="polite">
      {{ `Ilość produktów w koszyku ${cartProducts.length}` }}</span
    >
  </span>
</template>

<style lang="scss" scoped>
.cart {
  position: relative;
  
  &__badge {
    position: absolute;
    top: 7px;
    right: 3px;
  }
}
</style>
