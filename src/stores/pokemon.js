import { defineStore } from 'pinia'
import { reactive} from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemon = reactive([
    {
      id: 1,
      name: 'Pikachu Fogoso Safado - Amarelo',
      price: 99.90,
      imageURL: '/images/bandomonpng.png',
      description:
        'Action Figure do Pikachu.',
      category: 'ActionFigure',
      stock: 5,
      variants: [
        { id: 1, color: 'yellow', image: '/images/bandomonpng.png' },
        { id: 2, color: 'red', image: '/images/cubonePelucia.jpg' }
      ]
    }
  ])

  return { pokemon }
})