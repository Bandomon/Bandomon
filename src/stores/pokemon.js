import {defineStore} from 'pinia'
import {reactive} from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
    const pokemon = reactive([

        {
            id: 1,
            name: 'Box Treinador Avançado Amigos de Jornada',
            price: 349.90,
            imageURL: 'images/boosterboxamigos.png',
            description: 'Produto em Português. O Coleção Treinador Avançado - Escarlate e Violeta 9 - Amigos de Jornada contém: - 20 pacotes de booster de Escarlate e Violeta - Amigos de Jornada do Pokémon Estampas Ilustradas; - 1 carta holográfica promocional com arte expandida de Zorua e N- 65 capas para cartas de Zoroark e N;- 6 dados para usar como contadores de dano; 1 dado para jogada de moeda válido para competições;- 2 marcadores de condições de plástico;- 1 caixa de colecionador para guardar tudo;- 1 carta codificada para o Pokémon Estampas Ilustradas Live.',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 2,
            name: 'Mini Booster Box Amigos de Jornada',
            price: 249.90,
            imageURL: 'images/miniboxamigos.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 3,
            name: 'Booster Triple Pack Amigos de Jornada',
            price: 49.90,
            imageURL: 'images/blisteramigos.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 4,
            name: 'Box Treinador Avançado Fábulas Nebulosas',
            price: 349.90,
            imageURL: 'images/boxfabula.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 5,
            name: 'Mini Booster Box Fábulas Nebulosas ',
            price: 249.90,
            imageURL: 'images/minifabulas.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 6,
            name: 'Booster Triple Pack Fábulas Nebulosas',
            price: 49.90,
            imageURL: 'images/blisterfabulas.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 7,
            name: 'Box Treinador Avançado Coroa Estelar',
            price: 349.90,
            imageURL: 'images/boxcoroa.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 8,
            name: 'Mini Booster Box Coroa Estelar' ,
            price: 249.90,
            imageURL: 'images/miniboxcoroa.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 9,
            name: 'Booster Triple Pack Coroa Estelar',
            price: 49.90,
            imageURL: 'images/blistercoroa.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 10,
            name: 'Box Treinador Avançado Fagulhas Impetuosas',
            price: 349.90,
            imageURL: 'images/fagulhasbox.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 100
          },
          {
            id: 11,
            name: 'Mini Booster Box Fagulhas Impetuosas',
            price: 249.90,
            imageURL: 'images/minifagulhas.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 150
          },
          {
            id: 12,
            name: 'Booster Triple Pack Fagulhas Impetuosas',
            price: 49.90,
            imageURL: 'images/blisterfagulhas.png',
            description: 'descricao',
            category: 'Pokemon TCG',
            stock: 200
          },
          {
            id: 13,
            name: 'Figura Super Articulada Charizard',
            price: 299.90,
            imageURL: 'images/transparent_bonecocharizard.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 14,
            name: 'Figura Super Articulada Greninja',
            price: 299.90,
            imageURL: 'images/transparent_bonecogreninja.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 15,
            name: 'Figura Super Articulada Lucario',
            price: 299.90,
            imageURL: 'images/transparent_bonecolucario.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 16,
            name: 'Figura Super Articulada Mewtwo',
            price: 299.90,
            imageURL: 'images/transparent_bonecomew2.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 17,
            name: 'Figura Super Articulada Entei',
            price: 299.90,
            imageURL: 'images/transparent_bonecoentei.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 18,
            name: 'Figura Super Articulada Suicune',
            price: 299.90,
            imageURL: 'public/images/bonecosuicune.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 19,
            name: 'Figura Super Articulada Raikou',
            price: 299.90,
            imageURL: 'public/images/transparent_bonecoraikou.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 20,
            name: 'Figura Super Articulada Articuno',
            price: 299.90,
            imageURL: 'public/images/bonecoarticuno.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 21,
            name: 'Figura Super Articulada Zapdos',
            price: 299.90,
            imageURL: 'public/images/bonecozapdos.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 22,
            name: 'Figura Super Articulada Moltres',
            price: 299.90,
            imageURL: 'public/images/transparent_bonecomoltres.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 23,
            name: 'Figura Super Articulada Rayquaza',
            price: 299.90,
            imageURL: 'public/images/transparent_bonecorayquaza3.png',
            description: 'descricao',
            category: 'Pokemon Figures',
            stock: 90
          },
          {
            id: 24,
            name: 'Pelúcia Bulbasaur',
            price: 149.90,
            imageURL: 'public/images/peluciabulba.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 25,
            name: 'Pelúcia Venusaur',
            price: 149.90,
            imageURL: 'public/images/peluciavenu.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 26,
            name: 'Pelúcia Charmander',
            price: 149.90,
            imageURL: 'public/images/peluciacharmander.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 27,
            name: 'Pelúcia Charizard',
            price: 149.90,
            imageURL: 'public/images/peluciacharizard.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 28,
            name: 'Pelúcia Mega Charizard X',
            price: 149.90,
            imageURL: 'public/images/peluciamegacha.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 29,
            name: 'Pelúcia Squirtle',
            price: 149.90,
            imageURL: 'public/images/peluciasqui.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 30,
            name: 'Pelúcia Blastoise',
            price: 149.90,
            imageURL: 'public/images/peluciablast.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 31,
            name: 'Pelúcia Pikachu',
            price: 149.90,
            imageURL: 'public/images/peluciapika.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 32,
            name: 'Pelúcia Dragonite',
            price: 149.90,
            imageURL: 'public/images/peluciadrago.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 33,
            name: 'Pelúcia Snorlax',
            price: 149.90,
            imageURL: 'public/images/peluciasnor.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 34,
            name: 'Pelúcia Mew',
            price: 149.90,
            imageURL: 'public/images/peluciamew.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 35,
            name: 'Pelúcia Azumarill',
            price: 149.90,
            imageURL: 'public/images/peluciaazuma.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
          {
            id: 35,
            name: 'Pelúcia Eevee',
            price: 149.90,
            imageURL: 'public/images/peluciaeevee.png',
            description: 'descricao',
            category: 'Pokemon Plush',
            stock: 50
          },
         

    ])
    return { pokemon }
})