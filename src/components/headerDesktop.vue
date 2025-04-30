<script setup>
import { ref, watch, onMounted } from 'vue'
import SearchBar from './SearchBar.vue';
import { RouterLink } from 'vue-router';
import { useCartStore } from '../stores/cartStore'

// Usar a store do carrinho
const cartStore = useCartStore()
const isCartOpen = ref(false)

function toggleCart() {
  isCartOpen.value = !isCartOpen.value
}

// Fechar o dropdown ao clicar fora
onMounted(() => {
  const handleOutsideClick = (event) => {
    const cartDropdown = document.querySelector('.cart-dropdown')
    const cartButton = document.querySelector('.cart-button')
    
    if (isCartOpen.value && cartDropdown && cartButton) {
      if (!cartDropdown.contains(event.target) && !cartButton.contains(event.target)) {
        isCartOpen.value = false
      }
    }
  }
  
  document.addEventListener('click', handleOutsideClick)
  
  // Limpar o event listener ao desmontar
  return () => {
    document.removeEventListener('click', handleOutsideClick)
  }
})
</script>

<template>
  <div class="component fixed z-10 top-0">
    <div class="top">
      <span class="">APROVEITE DESCONTO NO PIX - ENVIO GRÁTIS EM COMPRAS A PARTIR DE R$189,90</span>
    </div>
    <div class="header justify-around">
      <div class="flex items-center">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/images/bandomonpng.png" alt="BANDOMON">
          </router-link>
        </div>
        <SearchBar />
      </div>
      <div class="menu flex">
        <ul class="uList flex gap-10">
          <li class="item drop-item">
            <img src="../assets/images/🦆 icon _user_.png" alt="">
          </li>
          <li class="item drop-item">
            <img src="../assets/images/SUPORTE.png" alt="">
          </li>
          <li class="item relative">
            <!-- Cart Button with counter badge -->
            <button @click="toggleCart" class="cursor-pointer cart-button focus:outline-none">
              <img src="../assets/images/CARRINHO.png" alt="Carrinho">
              <span v-if="cartStore.totalItems > 0" class="cart-badge absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {{ cartStore.totalItems }}
              </span>
            </button>
            
            <!-- Cart Dropdown -->
            <div v-if="isCartOpen" class="cart-dropdown absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50">
              <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg font-bold text-gray-800">Seu Carrinho</h3>
                  <span class="text-sm text-gray-500">{{ cartStore.totalItems }} item(s)</span>
                </div>
                
                <div v-if="cartStore.items.length === 0" class="py-6 text-center text-gray-500">
                  Seu carrinho está vazio
                </div>
                
                <div v-else class="max-h-60 overflow-y-auto">
                  <div v-for="(item, index) in cartStore.items" :key="index" class="flex py-2 border-b">
                    <div class="w-16 h-16 bg-gray-100 rounded mr-3 flex-shrink-0">
                      <img :src="item.image" alt="Produto" class="w-full h-full object-contain" />
                    </div>
                    <div class="flex-1">
                      <p class="font-medium text-gray-800">{{ item.name }}</p>
                      <p class="text-gray-500">R$ {{ item.price.toFixed(2) }}</p>
                      <div class="flex items-center mt-1">
                        <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)" class="px-2 text-gray-500 hover:text-gray-700">-</button>
                        <span class="mx-2 w-6 text-center">{{ item.quantity }}</span>
                        <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)" class="px-2 text-gray-500 hover:text-gray-700">+</button>
                        <button @click="cartStore.removeFromCart(item.id)" class="ml-2 text-red-500 hover:text-red-700">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-4 border-t pt-4">
                  <div class="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>R$ {{ cartStore.totalPrice.toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between font-bold mb-4">
                    <span>Total no Pix:</span>
                    <span>R$ {{ cartStore.discountedTotalPrice.toFixed(2) }}</span>
                  </div>
                  
                  <div class="flex gap-2">
                    <button @click="cartStore.clearCart" class="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded-md text-gray-800 font-medium">
                      Limpar
                    </button>
                    <router-link to="/checkout" class="flex-1">
                      <button class="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md text-black font-medium">
                        Finalizar
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full items-nav h-10 bg-zinc-800">
      <ul class="flex text-white justify-around items-center h-full">
        <li><router-link to="/brinquedos">BRINQUEDOS</router-link> </li>
        <li><router-link to="/cards">POKEMON TCG</router-link> </li>
        <li><router-link to="/pelucias">PELUCIAS</router-link> </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.items-nav {
  font-family: 'Inter';
  font-weight: 300;
}

.logo img {
  width: 200px;
}

.uList {
  display: flex;
  list-style: none;
}

.component {
  display: flex;
  flex-direction: column;
}

.item {
  width: 28px
}

.logo {
  font-family: 'Inter';
  font-weight: 700;
  font-size: 2rem;
  color: black;
  margin-left: 20px;
}

.header {
  width: 100vw;
  background-color: #383838;
  display: flex;
  height: 10vh;
  align-items: center;
}

.top {
  background-color: #ffdb0c;
  display: flex;
  justify-content: space-around;
  font-family: 'Inter';
  font-weight: 500;
  padding: 7px;
}
</style>