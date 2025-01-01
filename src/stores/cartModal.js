import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartModalStore = defineStore('CartModal', () => {
  const cartModalState = ref('hidden')
  function toggleCartModal(state) {
    return cartModalState.value = state
  }

  return { cartModalState, toggleCartModal }
})
