<script setup>
import { computed } from 'vue'

import { useProductStore } from '@/stores/products'

const props = defineProps({
  product: Object,
})

const productStore = useProductStore()
const formattedPrice = computed(() => {
  return props.product.price.toFixed(2).replace('.', ',')
})
</script>

<template>
  <div class="product">
    <img :src="product.image" :alt="product.name" class="product__image" />
    <button class="product__info" @click="productStore.addToCart(product)">
      <span class="product__name">{{ product.name }}</span>
      <span>
        <span class="product__price">
          <span class="product__price-value">{{ formattedPrice }}</span>
          <span class="product__price-currency"> PLN</span>
        </span>
        <span class="product__vat">+ VAT 23%</span>
        <span class="product__details">Szczegóły</span>
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    width: 163px;
    height: 190px;
    margin-bottom: -64px;
    z-index: 1;
    pointer-events: none;
  }

  &__info {
    width: 286px;
    height: 261px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 23px;
    padding-top: 85px;
    border: 1px solid transparent;
    transition: all 0.2s;

    &:hover {
      border: 1px solid var(--gold);
      box-shadow: 20px 20px 40px var(--darkShadow);
      color: var(--gold);
    }
  }

  &__price {
    margin-bottom: 14px;
    font-weight: 900;
    display: block;

    &-value {
      font-size: 28px;
    }

    &-currency {
      font-size: 18px;
    }
    
  }

  &__name {
    font-size: 18px;
    line-height: 27px;
    font-weight: 900;
    display: block;
  }

  &__vat {
    font-size: 14px;
    margin-bottom: 14px;
    font-weight: 300;
    display: block;
  }

  &__details {
    font-size: 16px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }
}
</style>
