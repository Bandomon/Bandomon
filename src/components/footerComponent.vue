<script scoped></script>
<template>
  <div class="footer">
    <div>
      <h1>RECEBA NOSSAS OFERTAS</h1>
    </div>
    <div class="assinatura">
      <input type="text" placeholder="Digite seu email" />
      <button>ASSINAR ></button>
    </div>
    <div>
      <div class="lista">
        <h2>POKEMON TCG</h2>
        <div class="colecoes">
          <span>Amigos de Jornada</span>
          <span>Evoluões Prismáticas</span>
          <span>Fagulhas Impetuosas</span>
          <span>Coroa Estelar</span
          ><span>Fa ábulas Nebulosas</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  background-color: #383838;
  width: 100vw;
  height: 20rem;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  gap: 10px;
}

h1 {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 2rem;
  color: white;
  margin-left: 20px;
}
input {
  width: 20rem;
  height: 2.3rem;
  padding-left: 10px;
  outline: none;
}
button {
  width: 12rem;
  height: 2.3rem;
  color: black;
  background-color: #ffdb0c;
  border: 2px solid #ffdb0c;
  transition: all 0.5s ease;
  cursor: pointer;
}

button:hover {
  background-color: transparent;
  color: #ffdb0c;
  border: 2px solid #ffdb0c;
}
.assinatura {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.colecoes{
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: rgb(160, 160, 160);
}

.lista{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

span{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 0.9rem;
}

h2 {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 1rem;
    color: white;
  }
</style>
