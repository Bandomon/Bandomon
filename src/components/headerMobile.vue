<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

if (isOpen.value) {
  document.body.style.overflowX = 'hidden';
} else {
  document.body.style.overflowX = 'visible';
}
</script>
<template>
  <div class="component">
    <div class="top">
      <span class="">APROVEITE DESCONTO NO PIX - ENVIO GRÁTIS EM COMPRAS A PARTIR DE R$189,90</span>
    </div>
    <div class="header">
      <div  class="logo">
        <router-link to="/">
        <img src="../assets/images/bandomonpng.png" alt="BANDOMON"></router-link>
      </div>
      <div class="search-bar flex ">
        <img src="../assets/images/search.png" alt="">

        <input type="text" placeholder="O QUE VOCÊ PROCURA?" />
        <div class="barra absolute self-center ">
        </div>
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
          <ul class="py-2 flex flex-col gap-5 w-56 items-center">
            <li class="item drop-item text-center">
              <img src="../assets/images/🦆 icon _user_.png" alt="">
              <span>Login/Cadastro</span>
            </li>
            <li class="item drop-item">
              <img src="../assets/images/SUPORTE.png" alt="">
              <span>Suporte</span>            
            </li>
            <li class="item drop-item">
              <img src="../assets/images/CARRINHO.png" alt="">
              <span>Carrinho</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full items-nav h-10 bg-zinc-800">
      <ul class="flex text-white justify-around items-center h-full">
        <li><router-link to="/brinquedos">BRINQUEDOS</router-link></li>
        <li><router-link to="/cards">POKEMON TCG</router-link> </li>
        <li><router-link to="/pelucias"> PELUCIAS</router-link></li>
      </ul>
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
  
  .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  .item img{
    width: 28px;
  }


  .barra{
    width: 2px;
    height: 30px;
    background-color: transparent;
    margin-left: 67px;
    transition: 0.2s all ease;
  }
  .search-bar input:focus + .barra{
    background-color: #ffdb0c;
  }
  .search-bar input{
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
  .search-bar input::-webkit-input-placeholder{
    color: #ffffff;
    transition: 0.2s all ease;
  }
  .search-bar img{
    width: 18px;
    height: 18px;
    align-self: center;
    position: absolute;
    margin-left: 35px
  }
  .search-bar input:focus{
    outline: 2px solid #ffdb0c;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
  }
  .search-bar input:focus::-webkit-input-placeholder{
    color: #ffdb0c;
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
    display: flex;
    background-color: #353535;
    color: white;
  }

  @media (max-width: 672px) {
    .search-bar input{
        width:200px;
        font-size: 12px;
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
    .items-nav{
    font-size: 12px;
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
