<script setup>
import CartProduct from './CartProduct.vue'
import { useProductStore } from '@/stores/products'
import { useCartModalStore } from '@/stores/cartModal'
import { computed } from 'vue'
const productStore = useProductStore()
const cartModalStore = useCartModalStore()
const cartProducts = computed(() => productStore.cartProducts)
const cartModalState = computed(() => cartModalStore.cartModalState)
const classes = computed(() => {
  return {
    'cart-modal--visible': cartModalState.value === 'visible',
    'cart-modal--hidden': cartModalState.value === 'hidden',
  }
})
</script>

<template>
  <div class="cart-modal" aria-modal="true" :class="classes">
    <button class="cart-modal__close" @click="cartModalStore.toggleCartModal('hidden')">
      Zamknij
    </button>
    <CartProduct
      v-for="(product, index) in cartProducts"
      :key="index"
      :index="index"
      :product="product"
      class="cart-modal__item"
    />
  </div>
</template>

<style lang="scss" scoped>
.cart-modal {
  position: absolute;
  top: -764px;
  right: 365px;
  background-color: var(--snow);
  width: 381px;
  height: 674px;
  box-shadow: 5px 5px 15px var(--greenShadow);
  z-index: 2;
  overflow-y: auto;
  &--visible {
    animation: slideIn 0.4s forwards;
  }
  &--hidden {
    animation: slideOut 0.4s forwards;
  }
}

@keyframes slideIn {
  100% {
    top: 90px;
  }
}
@keyframes slideOut {
  0% {
    top: 90px;
  }
  100% {
    top: -764px;
  }
}
</style>
