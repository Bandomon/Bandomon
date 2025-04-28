import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useCarStore = defineStore('pokemon', () => {
  const selectedCategory = ref(null)
  const pokemon = reactive([
    {
      id: 1,
      name: 'Pikachu Fogoso Safado - Amarelo',
      price: 129.90,
      imageURL: '//pikachuaction.png',
      description:
        '',
      category: 'Action Figure',
      stock: 12,
    },
    {
        id: 2,
        name: 'Charmander do CV - 157',
        price: 89.90,
        imageURL: '',
        description:
          '',
        category: 'Action Figure',
        stock: 12,
      }
  ])

  return { selectedCategory, pokemon }
})