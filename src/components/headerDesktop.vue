<script setup></script>
<template>
  <div class="component fixed z-10 top-0">
    <div class="top">
      <span class="">APROVEITE DESCONTO NO PIX - ENVIO GRÁTIS EM COMPRAS A PARTIR DE R$189,90</span>
    </div>
    <div class="header justify-around">
      <div class="logo">
        <img src="../assets/images/bandomonpng.png" alt="BANDOMON">
      </div>
      <div class="search-bar">
        <input type="text" placeholder="O que você procura?" />
      </div>
      <div class="menu">
        <ul class="uList">
          <li class="item drop-item">
            POKEMON TCG
            <ul class="sub-list-menu">
              <li>
                <router-link to="/" class="list-item"><span class="item">Amigos de Jornada</span></router-link>
              </li>
              <li>
                <router-link to="/" class="list-item"><span class="item">Evoluções Prismáticas</span></router-link>
              </li>
              <li>
                <router-link to="/" class="list-item"><span class="item">Fagulhas Impetuosas</span></router-link>
              </li>
              <li>
                <router-link to="/" class="list-item"><span class="item">Coroa Estelar</span></router-link>
              </li>
              <li>
                <router-link to="/" class="list-item"><span class="item">Fábulas Nebulosas</span></router-link>
              </li>
            </ul>
            
          </li>
          <li class="item drop-item">
            BRINQUEDOS E PELÚCIAS
            <ul class="sub-list-menu">
              <li>
                <router-link to="/" class="list-item"><span class="item">Pequenos</span></router-link>
              </li>
              <li>
                <router-link to="/" class="list-item"><span class="item">Medios</span></router-link>
              </li>
              <li>
                <router-link to="/" class="list-item"><span class="item">Grandes</span></router-link>
              </li>
            </ul>
            
          </li>
          <li class="item">
            POKEDEX
          </li>
        </ul>
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
    background-color: #383838;
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
    border-bottom: 1px solid white;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: 10px;
    margin-left: 20px;
    color: rgb(255, 255, 255);
    opacity: 1;
  }
  .search-bar input:focus{
    outline: 2px solid #ffdb0c;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
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
    background-color:#383838 ;
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
