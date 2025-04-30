<template>
    <div class="product-component flex justify-center items-center mt-50">
      <div class="product-page flex-wrap">
        <div class="product-image">
          <img class="img-product" :src="currentImage" :alt="product?.name" />
        </div>
  
        <div class="product-info" v-if="product">
          <h1>{{ product.name }}</h1>
          <p class="category">{{ product.category }}</p>
  
          <p v-if="product.stock > 10" class="stock in-stock">Em Estoque</p>
          <p v-else-if="product.stock > 1" class="stock low-stock">Quase Esgotado</p>
          <p v-else class="stock out-of-stock">Fora de Estoque</p>
  
          <div class="price">
            <span class="discount-price">R$ {{ discountedPrice.toFixed(2).replace('.', ',') }} no Pix</span>
            <span class="original-price">R$ {{ totalPrice.toFixed(2).replace('.', ',') }}</span>
          </div>
  
          <div class="sizes">
            <div class="size-buttons flex-wrap">
              <div
                v-for="variant in product.variants"
                :key="variant.id"
                @mouseover="changeImage(variant.image)"
                @mouseout="resetZoom"
                class="color-circle mx-auto flex items-center justify-center"
              >
                <img :src="variant.image" alt="" />
              </div>
            </div>
          </div>
  
          <div class="quantity">
            <button @click="decrement">-</button>
            <span>{{ quantity }}</span>
            <button @click="increment">+</button>
          </div>
  
          <button
            class="add-to-cart"
            :class="{ disabledButton: product.stock < 1 }"
            @click="addToCart"
            :disabled="product.stock < 1"
          >
            Adicionar ao carrinho
          </button>
        </div>
  
        <div v-else class="loading">Carregando produto...</div>
  
        <AlertMessage ref="alertMessage" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { ref, computed, onMounted, watch } from 'vue'
  import AlertMessage from '@/components/AlertMessage.vue'
  import { usePokemonStore } from '@/stores/pokemon'
  import { useCartStore } from '@/stores/cartStore'
  
  const store = usePokemonStore()
  const cartStore = useCartStore() // Usar a store do carrinho
  const route = useRoute()
  
  const productId = ref(Number(route.params.id))
  const quantity = ref(1)
  const alertMessage = ref(null)
  const currentImageSrc = ref('')
  
  // Computed product (reativo à rota)
  const product = computed(() => {
    return store.pokemon.find(item => item.id === productId.value)
  })
  
  // Preço base fixo (para não modificar o produto)
  const basePrice = computed(() => product.value?.price || 0)
  
  // Preço total sem desconto
  const totalPrice = computed(() => basePrice.value * quantity.value)
  
  // Preço com 10% de desconto
  const discountedPrice = computed(() => totalPrice.value * 0.9)
  
  // Imagem atual exibida
  const currentImage = computed(() => currentImageSrc.value || product.value?.imageURL)
  
  // Atualiza imagem inicial ao montar
  onMounted(() => {
    if (product.value) {
      currentImageSrc.value = product.value.imageURL
    }
  })
  
  // Atualiza produto ao mudar a rota
  watch(
    () => route.params.id,
    newId => {
      productId.value = Number(newId)
      quantity.value = 1
      if (product.value) {
        currentImageSrc.value = product.value.imageURL
      }
    },
    { immediate: true }
  )
  
  // Funções de quantidade
  const increment = () => {
    quantity.value++
  }
  
  const decrement = () => {
    if (quantity.value > 1) quantity.value--
  }
  
  // Troca de imagem e animação de zoom
  const changeImage = newImage => {
    currentImageSrc.value = newImage
    const imgProduct = document.querySelector('.img-product')
    if (imgProduct) imgProduct.classList.add('zoomed')
  }
  
  const resetZoom = () => {
    const imgProduct = document.querySelector('.img-product')
    if (imgProduct) imgProduct.classList.remove('zoomed')
  }
  
  // Adiciona ao carrinho usando a cartStore
  const addToCart = () => {
    if (product.value && product.value.stock > 0) {
      // Criar objeto do produto para adicionar ao carrinho
      const productToAdd = {
        id: product.value.id,
        name: product.value.name,
        price: product.value.price,
        image: currentImageSrc.value // Usa a imagem atual (pode ser a variante selecionada)
      }
      
      // Adicionar ao carrinho com a quantidade selecionada
      cartStore.addToCart(productToAdd, quantity.value)
      
      // Mostrar mensagem de sucesso
      alertMessage.value.addMessage('Produto adicionado ao carrinho!')
    }
  }
  </script>
  
  <style scoped>
  .product-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    gap: 60px;
  }
  
  .zoomed {
    transform: scale(1.05);
    transition: 0.5s all ease;
  }
  
  .product-image {
    max-height: 500px;
    min-height: 500px;
    background: #f7f7f7;
    display: flex;
    border-radius: 12px;
  }
  
  .product-image img {
    width: 450px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    padding: 20px;
    transition: 0.5s all ease;
  }
  
  .img-product:hover {
    transform: scale(1.05);
    transition: 0.5s;
    cursor: pointer;
  }
  
  .color-circle:hover .img-product {
    transform: scale(1.05);
    transition: 0.5s;
    cursor: pointer;
  }
  
  .product-info {
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .category {
    color: gray;
    margin-bottom: 20px;
  }
  
  .stock {
    margin-bottom: 15px;
    font-weight: 500;
  }
  
  .in-stock {
    color: #2ecc71;
  }
  
  .low-stock {
    color: #f39c12;
  }
  
  .out-of-stock {
    color: #e74c3c;
  }
  
  .price {
    margin-bottom: 20px;
  }
  
  .discount-price {
    font-weight: bold;
    font-size: 1.5rem;
    color: #222;
    margin-right: 10px;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #999;
  }
  
  .sizes p {
    margin-bottom: 8px;
  }
  
  .size-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .quantity button {
    width: 30px;
    height: 30px;
    background: #f0f0f0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.2rem;
  }
  
  .add-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .disabledButton {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .color-circle {
    width: 10rem;
    height: 10rem;
    display: inline-block;
    cursor: pointer;
    border: 1px solid #ccc;
  }
  
  @media (max-width: 420px) {
    .product-page {
      width: 100%;
    }
    .product-image img {
      width: 100%;
      height: auto;
    }
    .product-info {
      max-width: 100%;
    }
  }
  @media (max-width: 900px) {
    .product-component {
      margin-top: 10px;
    }
  }
  </style>