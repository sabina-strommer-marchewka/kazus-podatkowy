<script setup>
import CartProduct from './CartProduct.vue'
import { useProductStore } from '@/stores/products'
import { useCartModalStore } from '@/stores/cartModal'
import { computed } from 'vue'
import { onMounted } from 'vue'
const productStore = useProductStore()
const cartModalStore = useCartModalStore()
const cartProducts = computed(() => productStore.cartProducts)
const cartModalState = computed(() => cartModalStore.cartModalState)
const totalPrice = computed(() => {
  const prices = cartProducts.value.map((product) => product.price)
  const sum = prices
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    .toFixed(2)
  return parseFloat(sum).toFixed(2)
})

const classes = computed(() => {
  return {
    'cart-modal--visible': cartModalState.value === 'visible',
    'cart-modal--hidden': cartModalState.value === 'hidden',
  }
})
const overlayClasses = computed(() => {
  return {
    'cart-modal__overlay--visible': cartModalState.value === 'visible',
  }
})
</script>

<template>
  <div class="cart-modal__overlay" :class="overlayClasses"></div>
  <div
    class="cart-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="dialogTitle"
    :class="classes"
  >
    <p id="dialogTitle">Twój koszyk</p>
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
    <div>
      <span>Łączna kwota</span>
      <span>{{ totalPrice }}</span>
      <span>+ VAT 23%</span>
    </div>
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
  opacity: 1;
  &--visible {
    animation: slideIn 0.4s forwards;
  }
  &--hidden {
    animation: slideOut 0.4s forwards;
  }
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
    transition: opacity 0.4s;
    &--visible {
      opacity: 60%;
    }
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
