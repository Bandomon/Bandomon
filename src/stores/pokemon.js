import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemon = reactive([
    {
      id: 1,
      name: 'Pikachu Fogoso Safado - Amarelo',
      price: 99.90,
      imageURL: new URL('../assets/images/bandomonpng.png', import.meta.url).href,
      description:
        'Action Figure do Pikachu.',
      category: 'ActionFigure',
      stock: 5,
      variants: [
        { id: 1, color: 'yellow', image: new URL('../assets/images/bandomonpng.png', import.meta.url).href, },
        { id: 2, color: 'red', image: new URL('../assets/images/cubonePelucia.jpg', import.meta.url).href, }
      ]
    }
  ])

  return { pokemon }
})