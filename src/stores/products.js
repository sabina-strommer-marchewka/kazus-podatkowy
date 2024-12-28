import { defineStore } from 'pinia'
import { computed } from 'vue'
import productData from '../../data/products.json'

export const useProductStore = defineStore('ProductStore', () => {
    const products = computed(() => productData)
    return { products }
  })