<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import headerDesktop from './headerDesktop.vue'
import headerMobile from './headerMobile.vue'

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

<template>
  <headerDesktop v-if="tamanhoTela" />
  <headerMobile v-else />
</template>