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
    <button class="product__info" @click="productStore.addToCart(product); console.log(productStore.cartProducts)">
      <p class="product__name">{{ product.name }}</p>
      <p class="product__price">{{ `${product.price} PLN` }}</p>
      <p class="product__VAT">+ VAT 23%</p>
      <P class="product__details">Szczegóły</P>
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
  }
  &__info {
    width: 286px;
    height: 261px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    padding: 23px;
    border: 1px solid transparent;
    transition: all 0.2s;
    &:hover {
      border: 1px solid var(--gold);
      box-shadow: 20px 20px 40px var(--darkShadow);
    }
  }
  &__name {
    margin-bottom: 31px;
  }
  &__price {
    margin-bottom: 20px;
  }
  &__name,
  &__price {
    font-size: 18px;
  }
  &__VAT {
    font-size: 14px;
    margin-bottom: 14px;
  }
  &__details {
    font-size: 16px;
  }
}
</style>
