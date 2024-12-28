<script setup>
const props = defineProps({
  product: Object,
  index: Number
})
import { useProductStore } from '@/stores/products'
const productStore = useProductStore()

</script>

<template>
  <div class="cart-product" >
<p>{{ product.name }}</p>
<p>{{ `Cena ${product.price}` }}</p>
<button @click="productStore.removeFromCart(index)">Usun</button>
   
  </div>
</template>

<style lang="scss" scoped>

</style>
