<script setup></script>
<template>
  <div class="component fixed z-10 top-0">
    <div class="top">
      <span class="">APROVEITE DESCONTO NO PIX - ENVIO GRÁTIS EM COMPRAS A PARTIR DE R$189,90</span>
    </div>
    <div class="header justify-around">
      <div class="flex items-center">
        <div class="logo">
          <img src="../assets/images/bandomonpng.png" alt="BANDOMON">
        </div>
        <div class="search-bar flex">
          <img src="../assets/images/search.png" alt="">

          <input type="text" placeholder="O QUE VOCÊ PROCURA?" />
          <div class="barra absolute self-center ">
          </div>
        </div>
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
        <li>BRINQUEDOS</li>
        <li>POKEMON TCG</li>
        <li>POKEDEX</li>
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
  font-weight: 300;
  font-family: 'Inter';
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
  margin-left: 35px
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
