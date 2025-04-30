<script setup>
import carouselComponent from '@/components/carouselComponent.vue';
import cardComponent from '@/components/cardComponent.vue';
import { usePokemonStore } from '@/stores/pokemon'


const store = usePokemonStore()
</script>

<template>
    <div class="overflow-hidden w-full">
    <carouselComponent />
</div>
    <div class="beneficios w-full h-auto flex flex-row justify-around items-center">
        <img src="../assets/images/Beneficios.png" alt="">
    </div>
    <div class="mt-10 mb-10 flex flex-wrap mx-20 gap-20 justify-center">
        <cardComponent v-for="item in store.pokemon" :product="item" :key="item.id"></cardComponent>
    </div>

</template>
<style scoped>

.beneficios {
    margin-top: 2vw;
    margin-bottom: 2vw;
}

.rubik {
    font-family: "Rubik Mono One", monospace;
    font-weight: bolder;
    font-style: normal;
    position: absolute;
    font-size: 48px;
    margin-top: 4rem;
    backdrop-filter: blur(4px);
    border: 2px solid white;
    padding: 0px 2rem;
    color: white;
}
.ajuste:hover{
    transform: scale(1.1);
    transition: 0.5s;

}
.ajuste:hover span{
    color: #ffdb0c;
    transition: 0.5s;
    border: 2px solid #ffdb0c;
}
@media (max-width: 672px) {
    .beneficios {
    display: none;
    }
  }
</style>
