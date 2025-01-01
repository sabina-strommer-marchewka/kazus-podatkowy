<script setup>
import { computed } from 'vue'

import { useProductStore } from '@/stores/products'

import BaseIcon from './BaseIcon.vue'
import IconButton from './IconButton.vue'

const props = defineProps({
  product: Object,
  index: Number,
})

const productStore = useProductStore()
const width = computed(() => {
  return props.product.icon === 'book' ? 31 : 21
})
const height = computed(() => {
  return props.product.icon === 'book' ? 22 : 28
})
const priceInteger = computed(() => {
  return props.product.price.toFixed(2).split('.')[0]
})
const priceDecimal = computed(() => {
  return props.product.price.toFixed(2).split('.')[1]
})
</script>

<template>
  <div class="cart-product">
    <div class="cart-product__info">
      <div class="cart-product__info-wrapper">
        <div class="cart-product__info-badge">
          <BaseIcon :filename="product.icon" color="var(--teal)" :width="width" :height="height" />
        </div>
        <p class="cart-product__info-name">{{ product.name }}</p>
      </div>
      <IconButton
        icon-name="bin"
        icon-color="var(--darkGrey)"
        :icon-width="13"
        :icon-height="17"
        bg-color="transparent"
        :bg-width="40"
        :bg-height="40"
        :is-rounded="false"
        aria-label="Usuń produkt z koszyka"
        @click="productStore.removeFromCart(index)"
      />
    </div>
    <div class="cart-product__price">
      <span class="cart-product__price-title">Cena</span>
      <span>
        <span class="cart-product__price-integer">{{ `${priceInteger},` }}</span>
        <span class="cart-product__price-decimal"> {{ `${priceDecimal} PLN` }}</span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-product {
  background-color: var(--snow-40);

  &__info {
    color: var(--teal);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--snow);
    padding: 9px 19px 8px 11px;

    &-wrapper {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    &-badge {
      background-color: var(--snow);
      min-width: 52px;
      height: 52px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-name {
      text-overflow: ellipsis;
      font-weight: 600;
      max-width: 178px;
    }
  }

  &__price {
    padding: 14px 21px 17px 23px;
    display: flex;
    justify-content: space-between;
    color: var(--black);

    &-title {
      font-size: 14px;
      font-weight: 300;
    }

    &-integer {
      font-size: 18px;
      font-weight: 900;
    }

    &-decimal {
      font-size: 15px;
      font-weight: 900;
    }
  }
}
</style>
