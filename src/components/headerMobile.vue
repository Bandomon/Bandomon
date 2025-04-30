<template>
  <div class="component">
    <div class="top">
      <span class="">APROVEITE DESCONTO NO PIX - ENVIO GRÁTIS EM COMPRAS A PARTIR DE R$189,90</span>
    </div>
    <div class="header">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/bandomonpng.png" alt="BANDOMON"></router-link>
      </div>
      <div class="flex">
        <SearchBar />
        <div class="menu-items flex gap-3 items-center mr-4">
          <!-- Cart Button - Visível apenas em Desktop -->
          <button @click="toggleCart" ref="cartButtonRef" class="cursor-pointer cart-button relative p-2 hover:bg-gray-700 rounded-xl focus:outline-none hidden md:block">
            <img src="../assets/images/CARRINHO.png" alt="Carrinho" class="w-8" />
            <span v-if="cartStore.totalItems > 0" class="cart-badge absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {{ cartStore.totalItems }}
            </span>
          </button>
          
          <!-- Hamburger Menu Button -->
          <button @click="toggleMenu" ref="menuButtonRef" class="cursor-pointer menu-button p-2 hover:bg-gray-700 rounded-xl focus:outline-none">
            <svg class="w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#77767b" fill-rule="evenodd"
                  d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
              </g>
            </svg>
          </button>
        </div>

        <!-- Cart Dropdown -->
        <div v-if="isCartOpen" ref="cartDropdownRef" class="cart-dropdown absolute right-12 top-24 w-80 bg-white rounded-md shadow-lg z-50">
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

        <!-- Menu Dropdown -->
        <div v-if="isOpen" ref="menuDropdownRef" class="dropdown-open absolute right-0 mt-2 w-56 rounded-md shadow-lg z-50">
          <ul class="py-2 flex flex-col gap-5 w-56 items-center">
            <!-- Carrinho no Menu Mobile -->
            <li class="cursor-pointer item drop-item text-center md:hidden" @click="openCartFromMenu($event)">
              <img src="../assets/images/CARRINHO.png" alt="Carrinho" />
              <span>Carrinho 
                <span v-if="cartStore.totalItems > 0" class="bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-1 ml-1">
                  {{ cartStore.totalItems }}
                </span>
              </span>
            </li>
            <li class="item drop-item text-center">
              <img src="../assets/images/🦆 icon _user_.png" alt="" />
              <span>Login/Cadastro</span>
            </li>
            <li class="item drop-item">
              <img src="../assets/images/SUPORTE.png" alt="" />
              <span>Suporte</span>
            </li>
          </ul>
        </div>
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

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import SearchBar from './SearchBar.vue';
import { useCartStore } from '../stores/cartStore'

const isOpen = ref(false)
const isCartOpen = ref(false)

// Usar a store do carrinho
const cartStore = useCartStore()

// Refs para os elementos DOM
const menuDropdownRef = ref(null)
const cartDropdownRef = ref(null)
const menuButtonRef = ref(null)
const cartButtonRef = ref(null)

function toggleMenu() {
  isOpen.value = !isOpen.value
  if (isCartOpen.value) isCartOpen.value = false
}

function toggleCart() {
  isCartOpen.value = !isCartOpen.value
  if (isOpen.value) isOpen.value = false
}

// Nova função para abrir o carrinho a partir do menu mobile
function openCartFromMenu(event) {
  // Impede que o evento de clique se propague para o documento
  if (event) {
    event.stopPropagation();
  }
  
  isOpen.value = false // Fecha o menu
  setTimeout(() => {
    isCartOpen.value = true // Abre o carrinho com um pequeno delay para evitar conflitos
  }, 10)
}

// Função para verificar cliques fora dos dropdowns
function handleClickOutside(event) {
  // Verifica se o menu está aberto e se o clique foi fora do menu e do botão do menu
  if (isOpen.value && 
      menuDropdownRef.value && 
      !menuDropdownRef.value.contains(event.target) && 
      menuButtonRef.value && 
      !menuButtonRef.value.contains(event.target)) {
    isOpen.value = false
  }
  
  // Verifica se o carrinho está aberto e se o clique foi fora do carrinho e do botão do carrinho
  if (isCartOpen.value && 
      cartDropdownRef.value && 
      !cartDropdownRef.value.contains(event.target) && 
      cartButtonRef.value && 
      !cartButtonRef.value.contains(event.target) && 
      // Verifica se o clique não foi no item do carrinho no menu
      !(isOpen.value && event.target.closest('.item.drop-item'))) {
    isCartOpen.value = false
  }
}

// Controlando o overflow do body e adicionando event listeners
onMounted(() => {
  // Adiciona event listener para detectar cliques fora dos dropdowns
  document.addEventListener('click', handleClickOutside)
  
  watch([isOpen, isCartOpen], ([menuOpen, cartOpen]) => {
    if (menuOpen || cartOpen) {
      document.body.style.overflowX = 'hidden'
    } else {
      document.body.style.overflowX = 'visible'
    }
  }, { immediate: true })
})

// Remove event listeners quando o componente for destruído
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
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

.sub-list-menu {
  position: absolute;
  display: none;
  background-color: #353535;
  list-style: none;
}

.drop-item:hover .sub-list-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-menu {
  cursor: pointer;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.item img {
  width: 28px;
}

.barra {
  width: 2px;
  height: 30px;
  background-color: transparent;
  margin-left: 67px;
  transition: 0.2s all ease;
}

.search-bar input:focus+.barra {
  background-color: #ffdb0c;
}

.search-bar input {
  font-family: 'Inter';
  font-weight: 300;
  width: 400px;
  height: 30px;
  border-radius: 8px;
  margin-left: 20px;
  color: rgb(255, 255, 255);
  opacity: 1;
  background-color: #272727;
  padding-left: 60px;
  padding-bottom: 2px;
  transition: 0.2s all ease;
  outline: 2px solid transparent;
}

.search-bar input::-webkit-input-placeholder {
  color: #ffffff;
  transition: 0.2s all ease;
}

.search-bar img {
  width: 18px;
  height: 18px;
  align-self: center;
  position: absolute;
  margin-left: 35px;
}

.search-bar input:focus {
  outline: 2px solid #ffdb0c;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
}

.search-bar input:focus::-webkit-input-placeholder {
  color: #ffdb0c;
}

.logo {
  font-family: 'Inter';
  font-weight: 700;
  font-size: 2rem;

  margin-left: 20px;
}

.header {
  width: 100vw;
  background-color: #353535;
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-around;
}

.top {
  background-color: #ffdb0c;
  display: flex;
  justify-content: space-around;
  font-family: 'Inter';
  font-weight: 500;
  padding: 7px;
}

.dropdown-open {
  display: flex;
  background-color: #353535;
  color: white;
}

/* Media queries */
@media (min-width: 768px) {
  .md\:block {
    display: block;
  }
  
  .md\:hidden {
    display: none;
  }
}

@media (max-width: 767px) {
  .hidden {
    display: none;
  }
}

@media (max-width: 672px) {
  .top span {
    font-size: 0.6rem;
  }
}

@media (max-width: 488px) {
  .search-bar {
    display: none;
  }

  .top span {
    font-size: 0.6rem;
  }

  .header {
    justify-content: space-between;
  }

  .items-nav {
    font-size: 12px;
  }

  .menu-hamburguer {
    margin-right: 1rem;
  }
}

@media (max-width: 412px) {
  .top span {
    font-size: 0.5rem;
  }
}

@media (max-width: 346px) {
  .top span {
    display: none;
  }
}
</style>