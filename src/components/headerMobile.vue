<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <div class="component">
    <div class="top">
      <span class="">APROVEITE DESCONTO NO PIX - ENVIO GRÁTIS EM COMPRAS A PARTIR DE R$189,90</span>
    </div>
    <div class="header">
      <div class="logo">
        <img src="../assets/images/bandomonpng.png" alt="BANDOMON">
      </div>
      <div class="search-bar">
        <input type="text" placeholder="O que você procura?" />
      </div>
      <div class="relative inline-block text-left">
        <button
          @click="toggleMenu"
          class="p-2 rounded hover:bg-gray-700 rounded-xl focus:outline-none"
        >
          <svg class="w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill="#77767b" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
            </g>
          </svg>
        </button>
    

        <div
          v-if="isOpen"
          class="dropdown-open absolute  right-0 mt-2 w-56 rounded-md shadow-lg z-50"
        >
          <ul class="py-2">
            <li>
              <a href="#" class="item-dropdown block px-4 py-2 hover:bg-gray-700">Brinquedos e Pelúcias</a>
            </li>
            <li>
              <a href="#" class="item-dropdown block px-4 py-2 hover:bg-gray-700">Pokedex</a>
            </li>
            <li>
              <a href="#" class="item-dropwdown block px-4 py-2 hover:bg-gray-700">Pokemon TCG</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.logo img{
  width: 200px;
}

.uList{
  display: flex;
  list-style: none;
}

.component {
    display: flex;
    flex-direction: column;
  }

  .item{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 1rem;
    color: white;
    margin-left: 20px;
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


  .search-bar input{
    width: 400px;
    height: 30px;
    border-radius: 5px;
    border-bottom: 2px solid white;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: 10px;
    margin-left: 20px;
    color: white
  }
  .search-bar input:focus{
    outline: 2px solid #ffdb0c;
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

  }


  .logo{
    font-family: 'Inter';
    font-weight: 700;
    font-size: 2rem;

    margin-left: 20px;
  }

  .header{
    width: 100vw;
    background-color:#353535 ;
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: space-around;
  }

  .top{
    background-color: #ffdb0c;
    display: flex;
    justify-content: space-around;
    font-family: 'Inter';
    font-weight: 500;
    padding: 7px;

  }

  .dropdown-open {
    background-color: #353535;
    color: white;
  }

  @media (max-width: 672px) {
    .search-bar input{
        width:200px;
    }
    .top span{
        font-size: 0.6rem;
    }
  }
  @media (max-width: 488px) {
    .search-bar {
        display: none;
    }
    .top span{
        font-size: 0.6rem;
    }
    .header{
        justify-content: space-between;
    }
  }
  @media (max-width: 412px) {
    .top span{
        font-size: 0.5rem;
    }
  }
  @media (max-width: 346px) {
    .top span{
        display: none;
    }
  }

</style>
