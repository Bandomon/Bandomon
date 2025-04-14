<script setup></script>
<template>
  <div class="component">
    <div class="top">
      <span class="">APROVEITE DESCONTO NO PIX - ENVIO GRÁTIS EM COMPRAS A PARTIR DE R$189,90</span>
    </div>
    <div class="header">
      <div class="logo">LOGO</div>
      <div class="search-bar">
        <input type="text" placeholder="O que você procura?" />
      </div>
    </div>
    <div class="menu">
      <ul>
        <li class="item drop-item">
          CATEGORIAS
          <ul class="sub-list-menu">
            <li>
              <router-link to="/" class="list-item"><span class="item">CURTOS</span></router-link>
            </li>
            <li>
              <router-link to="/" class="list-item"><span class="item">MEDIOS</span></router-link>
            </li>
            <li>
              <router-link to="/" class="list-item"><span class="item">LONGOS</span></router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.component {
    display: flex;
    flex-direction: column;
  }

  .sub-list-menu {
    position: absolute;
    display: none;
    background-color: white;
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
    border: none;
    padding-left: 10px;
    margin-left: 20px;
  }

  .logo{
    font-family: 'Inter';
    font-weight: 700;
    font-size: 2rem;
    color: black;
    margin-left: 20px;
  }

  .header{
    width: 100vw;
    background-color:#ededed ;
    display: flex;
    height: 10vh;
    align-items: center;
  }

  .top{
    background-color: #ffdb0c;
    display: flex;
    justify-content: space-around;
    font-family: 'Inter';
    font-weight: 500;
    padding: 7px;

  }
</style>
