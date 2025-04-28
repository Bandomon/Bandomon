
<template>
    <div class="Carrossel w-full relative" :class="tamanhoTela ? 'mt-44' : 'mt-0'">
      <div
        ref="carousel"
        class="custom-scroll flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="images flex-shrink-0 w-full snap-start"
        >
          <img :src="item" alt="" class="w-full object-cover" />
        </div>
      </div>
  
      <!-- Optional navigation buttons -->
      <button
        class="absolute text-white cursor-pointer  left-2 top-1/2 transform -translate-y-1/2 bg-neutral-700 px-2 py-1 rounded-full"
        @click="scrollLeft"
      >
        ‹
      </button>
      <button
        class="absolute text-white cursor-pointer  right-2 top-1/2 transform -translate-y-1/2 bg-neutral-700 px-2 py-1 rounded-full"
        @click="scrollRight"
      >
        ›
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const carousel = ref(null)
  const items = [    
    'src/assets/images/pikachu.jpg',
    'src/assets/images/pismEvo.jpg',
    'src/assets/images/temporalForces.jpg',
  ]
  
  const scrollLeft = () => {
    carousel.value.scrollBy({ left: -carousel.value.offsetWidth, behavior: 'smooth' })
  }
  const scrollRight = () => {
    carousel.value.scrollBy({ left: carousel.value.offsetWidth, behavior: 'smooth' })
  }


const tamanhoTela = ref(window.innerWidth > 900)

function handleResize() {
  tamanhoTela.value = window.innerWidth > 900
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
  </script>
<style>
.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: #f1ee2b transparent;

}
.Carrossel {
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  overflow-x: hidden;
}

.images {
  width: 100vw;
  max-width: 100vw;
}
</style>

  