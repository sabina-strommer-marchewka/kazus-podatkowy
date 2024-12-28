import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import productData from '../../data/products.json'

export const useProductStore = defineStore('ProductStore', () => {
  const products = computed(() => productData)
  const cartProducts = ref([])

  function addToCart(product) {
    cartProducts.value.push(product)
  }

  function removeFromCart(product, index) {
    cartProducts.value.splice(index, 1)
  }

  return { products, cartProducts, addToCart, removeFromCart }
})
