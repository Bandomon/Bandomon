import { ref, onMounted, onUnmounted } from 'vue'

export function useTela() {
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

  return {
    tamanhoTela
  }
}
