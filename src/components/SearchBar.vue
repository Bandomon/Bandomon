<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { usePokemonStore } from '../stores/pokemon'; // Adjust path if needed
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const pokemonStore = usePokemonStore();
const searchQuery = ref('');
const showResults = ref(false);
// Nova variável para controlar a visibilidade da barra de pesquisa em telas menores
const isSearchBarVisible = ref(false);
// Variável para detectar se estamos em tela móvel
const isMobile = ref(window.innerWidth < 768);

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return [];
  
  const query = searchQuery.value.toLowerCase().trim();
  return pokemonStore.pokemon.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  ).slice(0, 5); // Limit to 5 results for better UX
});

function clearSearch() {
  searchQuery.value = '';
  showResults.value = false;
}

function handleFocus() {
  if (searchQuery.value.trim()) {
    showResults.value = true;
  }
}

function handleBlur() {
  // Delay hiding results to allow clicking on them
  setTimeout(() => {
    showResults.value = false;
  }, 200);
}

function navigateToProduct(productId) {
  if (route.name === 'product') {
    // Adiciona um parâmetro de consulta único para forçar a recarga
    const timestamp = new Date().getTime();
    router.push(`/product/${productId}?refresh=${timestamp}`);
  } else {
    router.push(`/product/${productId}`);
  }
  
  clearSearch();
  showResults.value = false;
  if (isMobile.value) {
    isSearchBarVisible.value = false;
  }
}

// Função para alternar a visibilidade da barra de pesquisa em telas menores
function toggleSearchBar() {
  isSearchBarVisible.value = !isSearchBarVisible.value;
  if (isSearchBarVisible.value) {
    // Foca no input quando a barra de pesquisa é aberta
    setTimeout(() => {
      document.querySelector('.search-bar input')?.focus();
    }, 100);
  } else {
    // Limpa a pesquisa quando a barra é fechada
    clearSearch();
  }
}

watch(searchQuery, (newVal) => {
  showResults.value = newVal.trim().length > 0;
});

// Close search results when clicking outside
onMounted(() => {
  // Detectar tamanho da tela inicial e em resize
  isMobile.value = window.innerWidth < 768;
  
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
    if (!isMobile.value) {
      isSearchBarVisible.value = false; // Reset para desktop
    }
  });

  document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(e.target)) {
      showResults.value = false;
      
      // Em telas menores, fecha a barra de pesquisa se clicar fora
      if (isMobile.value && !e.target.closest('.search-icon-mobile')) {
        isSearchBarVisible.value = false;
      }
    }
  });
});
</script>

<template>
  <div class="search-container relative">
    <!-- Ícone de lupa para telas menores -->
    <div 
      class="search-icon-mobile" 
      v-if="isMobile" 
      @click.stop="toggleSearchBar"
    >
      <img src="../assets/images/search.png" alt="Search icon" class="search-icon">
    </div>
    
    <!-- Barra de pesquisa - visível sempre em desktop ou quando ativada em mobile -->
    <div 
      class="search-bar flex" 
      :class="{ 'mobile-visible': isSearchBarVisible && isMobile }"
      v-show="!isMobile || isSearchBarVisible"
    >
      <img src="../assets/images/search.png" alt="Search icon">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="O QUE VOCÊ PROCURA?" 
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div class="barra absolute self-center"></div>
      <button 
        v-if="searchQuery" 
        @click="clearSearch" 
        class="clear-btn absolute"
      >
        ✕
      </button>
      
      <!-- Botão para fechar a barra de pesquisa em telas menores -->
      <button 
        v-if="isMobile" 
        @click="toggleSearchBar" 
        class="close-search-btn"
      >
        ✕
      </button>
    </div>
    
    <!-- Search Results Dropdown -->
    <div 
      v-if="showResults && searchResults.length > 0" 
      class="search-results"
      :class="{ 'mobile-results': isMobile }"
    >
      <ul>
        <li 
          v-for="result in searchResults" 
          :key="result.id"
          @click="navigateToProduct(result.id)"
          class="result-item"
        >
          <div class="flex items-center">
            <img :src="result.imageURL" alt="Product thumbnail" class="result-img">
            <div class="result-info">
              <p class="result-name">{{ result.name }}</p>
              <p class="result-price">R$ {{ result.price.toFixed(2) }}</p>
              <p class="result-category">{{ result.category }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
    <div 
      v-if="showResults && searchQuery && searchResults.length === 0" 
      class="search-results no-results"
      :class="{ 'mobile-results': isMobile }"
    >
      <p>Nenhum produto encontrado para "{{ searchQuery }}"</p>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
}

.search-icon-mobile {
  display: none; /* Escondido por padrão, visível apenas em telas menores */
  cursor: pointer;
  padding: 8px;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.search-bar {
  position: relative;
}

.search-bar input {
  font-weight: 300;
  font-family: 'Inter';
  width: 40vw;
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

.search-bar input::placeholder {
  color: #ffffff;
  transition: 0.2s all ease;
}

.search-bar img {
  width: 18px;
  height: 18px;
  align-self: center;
  position: absolute;
  margin-left: 35px
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

.search-bar input:focus {
  outline: 2px solid #ffdb0c;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
}

.search-bar input:focus::placeholder {
  color: #ffdb0c;
}

.clear-btn {
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.2);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-search-btn {
  display: none; /* Escondido por padrão, visível apenas em telas menores */
  position: absolute;
  right: 2vw;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  background: none;
  padding: 5px;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 20px;
  width: 400px;
  background-color: #2c2c2c;
  border: 2px solid #ffdb0c;
  border-top: none;
  border-radius: 0 0 8px 8px;
  z-index: 100;
  max-height: 350px;
  overflow-y: auto;
}

.result-item {
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #444;
}

.result-item:last-child {
  border-bottom: none;
}

.result-item:hover {
  background-color: #3a3a3a;
}

.result-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 10px;
  background-color: #383838;
  border-radius: 4px;
}

.result-info {
  flex-grow: 1;
}

.result-name {
  font-size: 14px;
  color: white;
  margin-bottom: 4px;
}

.result-price {
  font-size: 13px;
  font-weight: 500;
  color: #ffdb0c;
}

.result-category {
  font-size: 11px;
  color: #aaa;
  margin-top: 2px;
}

.no-results {
  padding: 15px;
  text-align: center;
  color: #ddd;
}

/* Regras para responsividade */
@media (max-width: 767px) {
  .search-icon-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background-color: #272727;
    z-index: 1000;
    display: flex;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  
  .search-bar.mobile-visible {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .search-bar input {
    width: 100%;
    margin-left: 0;
    padding-left: 7vw;
  }
  
  .search-bar img {
    margin-left: 15px;
  }
  
  .barra {
    margin-left: 47px;
  }
  
  .close-search-btn {
    display: block;
  }
  
  .search-results.mobile-results {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    top: 60px; /* Ajuste conforme necessário para posicionar abaixo da barra de pesquisa */
  }
}

/* Regras para telas muito pequenas */
@media (max-width: 480px) {
  .result-img {
    width: 30px;
    height: 30px;
  }
  
  .result-name {
    font-size: 13px;
  }
  
  .result-price, .result-category {
    font-size: 11px;
  }

  .search-icon-mobile {
     position: relative;
  }
  .search-bar input {
    width: 100%;
    margin-left: 0;
    padding-left: 2vw;
  }
  
}

@media (max-width: 696px) {
    .search-bar input {
        padding-left: 8vw;
  }
  .search-icon-mobile {
  }
}
@media (max-width: 738px) {
    .search-bar input {
   
    padding-left: 8vw;
  }
  .close-search-btn{
    right: 4vw;
  }
}

@media (max-width: 626px) {
    .search-bar input {
   
    padding-left: 9vw;
  }
  .close-search-btn{
    right: 4vw;
  }
}

@media (max-width: 590px) {
    .search-bar input {
   padding-left: 10vw;
  }
  .close-search-btn{
    right: 4vw;
  }
}
@media (max-width: 514px) {
    .search-bar input {
   
    padding-left: 11vw;
  }
}
@media (max-width: 468px) {
    .search-bar input {
   padding-left: 12vw;
  }
  .close-search-btn{
    right: 4vw;
  }
}

@media (max-width: 441px) {
    .search-bar input {
   padding-left: 12vw;
  }
  .close-search-btn{
    right: 4vw;
  }

   
}

@media (max-width: 418px) {
    .search-bar input {
   padding-left: 13vw;
  }
  .close-search-btn{
    right: 4vw;
  }

   
}

@media (max-width: 390px) {
    .search-bar input {
   padding-left: 15vw;
  }
  .close-search-btn{
    right: 4vw;
  }

   
}
@media (max-width: 375px) {
    .search-bar input {
   padding-left: 30vw;
  }
  .close-search-btn{
    right: 1vw;
  }

   
}
@media (max-width: 430px) {
    .search-bar input {
   padding-left: 13vw;
  }
  .close-search-btn{
    right: 4vw;
  }
  
  }
  @media (max-width: 412px) {
    .search-bar input {
   padding-left: 13vw;
  }
  .close-search-btn{
    right: 4vw;
  }
  
  }

  @media (max-width: 360px) {
    .search-bar input {
   padding-left: 15vw;
  }
  .close-search-btn{
    right: 4vw;
  }
  
  }
</style>