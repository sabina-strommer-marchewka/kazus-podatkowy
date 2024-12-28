<script setup>
const props = defineProps({
  product: Object,
})
</script>

<template>
  <div class="product">
    <img :src="product.image" alt="product.name" class="product__image" />
    <button class="product__info" @click="addToCart2(product)">
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
    margin-bottom: 53.05px;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid var(--gold);
      box-shadow: 20px 20px 40px var(--shadow);
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
