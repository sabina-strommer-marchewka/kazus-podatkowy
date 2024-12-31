<script setup>
const props = defineProps({
  product: Object,
})
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()

</script>

<template>
  <div class="product">
    <img :src="product.image" alt="product.name" class="product__image" />
    <button class="product__info" @click="productStore.addToCart(product)">
      <span class="product__name">{{ product.name }}</span>
     <span>
      <p class="product__price">{{ `${product.price} PLN` }}</p>
      <p class="product__vat">+ VAT 23%</p>
      <P class="product__details">Szczegóły</P>
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
    margin-bottom: -4rem;
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
  &__name {
    font-size: 16px;
  }
  &__price {
    margin-bottom: 20px;
    font-size: 22px;
  }
  &__name,
  &__price {
    font-weight: 900;
  }
  &__vat {
    font-size: 14px;
    margin-bottom: 14px;
    font-weight: 300;
  }
  &__details {
    font-size: 16px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }
}
</style>
