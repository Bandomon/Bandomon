<script setup>
import SearchBar from './SearchBar.vue'; // Import the SearchBar component
import { RouterLink } from 'vue-router';
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
          <img src="../assets/images/bandomonpng.png" alt="BANDOMON"></router-link>
        </div>
        <!-- Replace the search bar with the new component -->
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
          <li class="item">
            <img src="../assets/images/CARRINHO.png" alt="">
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