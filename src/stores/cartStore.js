import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Estado
  const items = ref([])
  
  // Getters
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })
  
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })
  
  const discountedTotalPrice = computed(() => {
    // 10% de desconto para pagamento no pix
    return totalPrice.value * 0.9
  })
  
  // Actions
  function addToCart(product, quantity = 1) {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageURL || product.image,
        quantity: quantity
      })
    }
    
    // Salvar no localStorage para persistência
    saveCartToLocalStorage()
  }
  
  function updateQuantity(productId, newQuantity) {
    const item = items.value.find(item => item.id === productId)
    
    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity
      } else {
        removeFromCart(productId)
      }
      
      saveCartToLocalStorage()
    }
  }
  
  function removeFromCart(productId) {
    items.value = items.value.filter(item => item.id !== productId)
    saveCartToLocalStorage()
  }
  
  function clearCart() {
    items.value = []
    saveCartToLocalStorage()
  }
  
  // Funções auxiliares para localStorage
  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
  
  function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      items.value = JSON.parse(savedCart)
    }
  }
  
  // Carregar do localStorage na criação da store
  loadCartFromLocalStorage()
  
  return {
    items,
    totalItems,
    totalPrice,
    discountedTotalPrice,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  }
})