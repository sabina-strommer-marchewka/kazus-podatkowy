<script setup>
import { computed } from 'vue'

import { useProductStore } from '@/stores/products'
import { useCartModalStore } from '@/stores/cartModal'

import CartProduct from './CartProduct.vue'
import IconButton from './IconButton.vue'
import Wrapper from './Wrapper.vue'

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
const totalPriceInteger = computed(() => {
  return totalPrice.value.split('.')[0]
})
const totalPriceDecimal = computed(() => {
  return totalPrice.value.split('.')[1]
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
const noProducts = computed(() => cartProducts.value.length === 0)
</script>

<template>
  <div class="cart-modal__overlay" :class="overlayClasses"></div>
  <div class="cart-modal__wrapper-container">
    <Wrapper class="cart-modal__wrapper">
      <div
        class="cart-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialogTitle"
        :class="classes"
      >
        <div class="cart-modal__container">
          <p id="dialogTitle" class="cart-modal__title">Twój koszyk</p>
          <IconButton
            icon-name="cancel"
            icon-color="var(--white)"
            :icon-width="15"
            :icon-height="15"
            bg-color="var(--teal)"
            :bg-width="41"
            :bg-height="41"
            :is-rounded="false"
            aria-label="Wyjdź z koszyka"
            class="cart-modal__close"
            @click="cartModalStore.toggleCartModal('hidden')"
          />
          <div class="cart-modal__product-list">
            <CartProduct
              v-for="(product, index) in cartProducts"
              :key="index"
              :index="index"
              :product="product"
              class="cart-modal__item"
            />
          </div>
          <p v-if="noProducts" class="cart-modal__empty-message">Twój koszyk jest pusty.</p>
        </div>
        <div v-if="!noProducts" class="cart-modal__summary">
          <div class="cart-modal__summary-container">
            <span class="cart-modal__summary-title">Łączna kwota</span>
            <div class="cart-modal__summary-price">
              <span>
                <span class="cart-modal__summary-integer">{{ `${totalPriceInteger},` }}</span>
                <span class="cart-modal__summary-decimal">{{ `${totalPriceDecimal} PLN` }}</span>
              </span>
              <span class="cart-modal__summary-vat">+ VAT 23%</span>
            </div>
          </div>
          <button class="cart-modal__cart-button">Przejdź do koszyka</button>
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<style lang="scss" scoped>
.cart-modal {
  position: absolute;
  top: -764px;
  right: 0;
  background-color: var(--white);
  width: 381px;
  height: 674px;
  box-shadow: 5px 5px 15px var(--greenShadow);
  z-index: 2;
  overflow-y: auto;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: top 0.4s;

  &--visible {
    top: 0;
  }

  &--hidden {
    top: -764px;
  }

  &__wrapper {
    position: relative;

    &-container {
      position: fixed;
      top: 90px;
      z-index: 2;
      width: 100%;
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay);
    opacity: 0;
    z-index: 2;
    transition: opacity 0.4s;
    pointer-events: none;

    &--visible {
      opacity: 60%;
      pointer-events: all;
    }
  }

  &__product-list {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  &__container {
    padding: 19px 32px 20px 28px;
  }

  &__title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--black);
  }

  &__empty-message {
    color: var(--black);
  }

  &__summary {
    border-top: 1px solid var(--darkGrey-35);
    padding: 25px 34px 28px;
    color: var(--black);

    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 18px;
      position: relative;
    }

    &-price {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    &-title {
      font-weight: 700;
    }

    &-integer {
      font-size: 22px;
      font-weight: 900;
    }
    &-decimal {
      font-size: 16px;
      font-weight: 900;
    }

    &_vat {
      font-size: 14px;
      font-weight: 300;
    }
  }

  &__cart-button {
    text-transform: uppercase;
    background-color: var(--gold);
    color: var(--white);
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;
    letter-spacing: 2.4px;
    font-size: 16px;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
