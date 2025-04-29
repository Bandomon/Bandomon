import {defineStore} from 'pinia'
import {reactive, ref} from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
    const pokemons = reactive([

        {
            id: 1,
            name: 'Box Treinador Avançado Amigos de Jornada',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 2,
            name: 'Mini Booster Box Amigos de Jornada',
            price: 249.90,
            imageURL: 'images/miniboxamigos.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 3,
            name: 'Booster Triple Pack Amigos de Jornada',
            price: 49.90,
            imageURL: 'images/blisteramigos.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 4,
            name: 'Box Treinador Avançado Fábulas Nebulosas',
            price: 349.90,
            imageURL: 'images/boxfabula.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 5,
            name: 'Mini Booster Box Fábulas Nebulosas ',
            price: 249.90,
            imageURL: 'images/minifabulas.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 6,
            name: 'Booster Triple Pack Fábulas Nebulosas',
            price: 49.90,
            imageURL: 'images/blisterfabulas.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 7,
            name: 'Box Treinador Avançado Coroa Estelar',
            price: 349.90,
            imageURL: 'images/boxcoroa.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 8,
            name: 'Mini Booster Box Coroa Estelar' ,
            price: 249.90,
            imageURL: 'images/miniboxcoroa.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 9,
            name: 'Booster Triple Pack Coroa Estelar',
            price: 49.90,
            imageURL: 'images/blistercoroa.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 10,
            name: 'Box Treinador Avançado Fagulhas Impetuosas',
            price: 349.90,
            imageURL: 'images/fagulhasbox.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 11,
            name: 'Mini Booster Box Fagulhas Impetuosas',
            price: 249.90,
            imageURL: 'images/minifagulhas.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 12,
            name: 'Booster Triple Pack Fagulhas Impetuosas',
            price: 49.90,
            imageURL: 'images/blisterfagulhas.png',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 13,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 14,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 15,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 16,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 17,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 18,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 19,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 20,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 21,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 22,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 23,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 24,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 25,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 26,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 27,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 28,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 29,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 30,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 31,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 32,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 33,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 34,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 35,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 36,
            name: 'Box Treinador Avançado',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.jpg',
            description: 'dador de cuzinho 123',
            category: 'Pokemon TCG',
            stock: 100
          },

    ])
})