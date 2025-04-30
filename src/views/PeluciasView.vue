<script setup>
import cardComponent from '@/components/cardComponent.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { useTela } from '@/assets/tela.js'
import { computed } from 'vue'

const { tamanhoTela } = useTela()
const isLargeScreen = computed(() => tamanhoTela.value)

const store = usePokemonStore()
</script>

<template>
  <div :class="isLargeScreen ? 'mt-64' : 'mt-24'" class="mb-10 flex flex-wrap mx-20 gap-20 justify-center">
    <cardComponent v-for="item in store.pelucias" :product="item" :key="item.id" />
  </div>
</template>
