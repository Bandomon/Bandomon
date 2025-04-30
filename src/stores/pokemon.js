import {defineStore} from 'pinia'
import {reactive} from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
    const pokemon = reactive([

        {
            id: 1,
            name: 'Box Treinador Avançado Amigos de Jornada',
            price: 349.90,
            imageURL: new URL('images/boosterboxamigos.png', import.meta.url).href ,
            description: 'Produto em Português. O Coleção Treinador Avançado - Escarlate e Violeta 9 - Amigos de Jornada contém: - 20 pacotes de booster de Escarlate e Violeta - Amigos de Jornada do Pokémon Estampas Ilustradas; - 1 carta holográfica promocional com arte expandida de Zorua e N- 65 capas para cartas de Zoroark e N;- 6 dados para usar como contadores de dano; 1 dado para jogada de moeda válido para competições;- 2 marcadores de condições de plástico;- 1 caixa de colecionador para guardar tudo;- 1 carta codificada para o Pokémon Estampas Ilustradas Live.',
            category: 'Pokemon TCG',
            stock: 100,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/boosterboxamigos.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantboxamigos.png', import.meta.url).href, }
            ]
          },
          {
            id: 2,
            name: 'Mini Booster Box Amigos de Jornada',
            price: 249.90,
            imageURL: new URL('images/miniboxamigos.png', import.meta.url).href,
            description: 'Contém: - 1 baralho com 40 cartas pronto para jogar incluindo 1 de 4 cartas holográficas promocionais; - 8 pacotes de booster da edição; - 1 guia com dicas de construção de baralho; - 1 caixa para guardar o deck; - 1 carta codificada para Pokémon Estampas Ilustradas Live (online).',
            category: 'Pokemon TCG',
            stock: 150,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/miniboxamigos.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantminiamigos.png', import.meta.url).href, }
            ]
          },
          {
            id: 3,
            name: 'Booster Triple Pack Amigos de Jornada',
            price: 49.90,
            imageURL: new URL('images/blisteramigos.png', import.meta.url).href,
            description: '3 pacotes de booster de Pokémon Estampas Ilustradas;- 1 carta holográfica promocional especial- 1 carta codificada para o Pokémon Estampas Ilustradas Online.',
            category: 'Pokemon TCG',
            stock: 200,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/blisteramigos.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantblisteramigos.png', import.meta.url).href, }
            ]
          },
          {
            id: 4,
            name: 'Box Treinador Avançado Fábulas Nebulosas',
            price: 349.90,
            imageURL: new URL('images/boxfabula.png', import.meta.url).href,
            description: ' Contém: 20 pacotes de booster de Escarlate e Violeta- Fabulas Nebulosas 6.5 1 carta holografica promocional com arte expandida de Pecharunt 65 capas para cartas de Okidogi, Munkidori e Fezandipiti 6 dados para usar como contadores de dano 1 dado para jogada de moeda valido para competições 2 marcadores de condições de plástico 1 caixa de colecionador para guardar tudo 1 carta codificada para jogar Pokémon estampas ilustradas Live.',
            category: 'Pokemon TCG',
            stock: 100,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/boxfabula.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantboxfabulas.png', import.meta.url).href, }
            ]
          },
          {
            id: 5,
            name: 'Mini Booster Box Fábulas Nebulosas ',
            price: 249.90,
            imageURL: new URL('images/minifabulas.png', import.meta.url).href,
            description: 'Contém: - 1 baralho com 40 cartas pronto para jogar incluindo 1 de 4 cartas holográficas promocionais; - 8 pacotes de booster da edição; - 1 guia com dicas de construção de baralho; - 1 caixa para guardar o deck; - 1 carta codificada para Pokémon Estampas Ilustradas Live (online).',
            category: 'Pokemon TCG',
            stock: 150,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/minifabulas.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantminifabulas.png', import.meta.url).href, }
            ]
          },
          {
            id: 6,
            name: 'Booster Triple Pack Fábulas Nebulosas',
            price: 49.90,
            imageURL: new URL('images/blisterfabulas.png', import.meta.url).href,
            description: '3 pacotes de booster de Pokémon Estampas Ilustradas;- 1 carta holográfica promocional especial- 1 carta codificada para o Pokémon Estampas Ilustradas Online.',
            category: 'Pokemon TCG',
            stock: 200,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/blisterfabulas.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantblisterfabulas.png', import.meta.url).href, }
            ]
          },
          {
            id: 7,
            name: 'Box Treinador Avançado Coroa Estelar',
            price: 349.90,
            imageURL: new URL('images/boxcoroa.png', import.meta.url).href,
            description: 'Produto em Português. O Coleção Treinador Avançado - Escarlate e Violeta 7 - Coroa Estelar contém:- 20 pacotes de booster de Escarlate e Violeta — Coroa Estelar;- 1 carta holográfica promocional com arte expandida de Noctowl;- 65 capas para cartas de Terapagos;- 6 dados para usar como contadores de dano;- 1 dado para jogada de moeda válido para competições;- 2 marcadores de condições de plástico;- 1 caixa de colecionador para guardar tudo;- 1 carta codificada para o Pokémon Estampas Ilustradas Live.',
            category: 'Pokemon TCG',
            stock: 100,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/boxcoroa.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantboxcoroa.png', import.meta.url).href, }
            ]
          },
          {
            id: 8,
            name: 'Mini Booster Box Coroa Estelar' ,
            price: 249.90,
            imageURL: new URL('images/miniboxcoroa.png', import.meta.url).href,
            description: 'Contém: - 1 baralho com 40 cartas pronto para jogar incluindo 1 de 4 cartas holográficas promocionais; - 8 pacotes de booster da edição; - 1 guia com dicas de construção de baralho; - 1 caixa para guardar o deck; - 1 carta codificada para Pokémon Estampas Ilustradas Live (online).',
            category: 'Pokemon TCG',
            stock: 150,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/miniboxcoroa.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantminicoroa.png', import.meta.url).href, }
            ]
          },
          {
            id: 9,
            name: 'Booster Triple Pack Coroa Estelar',
            price: 49.90,
            imageURL: new URL('images/blistercoroa.png', import.meta.url).href,
            description: '3 pacotes de booster de Pokémon Estampas Ilustradas;- 1 carta holográfica promocional especial- 1 carta codificada para o Pokémon Estampas Ilustradas Online.',
            category: 'Pokemon TCG',
            stock: 200,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/blistercoroa.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantblistercoroa.png', import.meta.url).href, }
            ]
          },
          {
            id: 10,
            name: 'Box Treinador Avançado Fagulhas Impetuosas',
            price: 349.90,
            imageURL: new URL('images/fagulhasbox.png', import.meta.url).href,
            description: 'Produto em Português. O Coleção Treinador Avançado - Escarlate e Violeta 8 - Fagulhas Impetuosas contém:- 20 pacotes de booster de Escarlate e Violeta - Fagulhas Impetuosas do Pokémon Estampas Ilustradas;- 1 carta holográfica promocional com arte expandida de Magneton;- 65 capas para cartas de Terapagos;- 6 dados para usar como contadores de dano;- 1 dado para jogada de moeda válido para competições;- 2 marcadores de condições de plástico;- 1 caixa de colecionador para guardar tudo;- 1 carta codificada para o Pokémon Estampas Ilustradas Live.',
            category: 'Pokemon TCG',
            stock: 100,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/fagulhasbox.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantboxfagulhas.png', import.meta.url).href, }
            ]
          },
          {
            id: 11,
            name: 'Mini Booster Box Fagulhas Impetuosas',
            price: 249.90,
            imageURL: new URL('images/minifagulhas.png', import.meta.url).href,
            description: 'Contém: - 1 baralho com 40 cartas pronto para jogar incluindo 1 de 4 cartas holográficas promocionais; - 8 pacotes de booster da edição; - 1 guia com dicas de construção de baralho; - 1 caixa para guardar o deck; - 1 carta codificada para Pokémon Estampas Ilustradas Live (online).',
            category: 'Pokemon TCG',
            stock: 150,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/minifagulhas.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantminifagulhas.png', import.meta.url).href, }
            ]
          },
          {
            id: 12,
            name: 'Booster Triple Pack Fagulhas Impetuosas',
            price: 49.90,
            imageURL: new URL('images/blisterfagulhas.png', import.meta.url).href,
            description: '3 pacotes de booster de Pokémon Estampas Ilustradas;- 1 carta holográfica promocional especial- 1 carta codificada para o Pokémon Estampas Ilustradas Online.',
            category: 'Pokemon TCG',
            stock: 200,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/blisterfagulhas.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantblisterfagulhas.png', import.meta.url).href, }
            ]
          },
          {
            id: 13,
            name: 'Figura Super Articulada Charizard',
            price: 299.90,
            imageURL: new URL('images/bonecocharizard.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Charizard de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecocharizard.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantcharizard.png', import.meta.url).href, }
            ]
          },
          {
            id: 14,
            name: 'Figura Super Articulada Greninja',
            price: 299.90,
            imageURL: new URL('images/bonecogreninja.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Greninja de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecogreninja.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantgreninja.png', import.meta.url).href, }
            ]
          },
          {
            id: 15,
            name: 'Figura Super Articulada Lucario',
            price: 299.90,
            imageURL: new URL('images/bonecolucario.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Lucario de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecolucario.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantlucario.png', import.meta.url).href, }
            ]
          },
          {
            id: 16,
            name: 'Figura Super Articulada Mewtwo',
            price: 299.90,
            imageURL: new URL('images/bonecomew2.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Mewtwo de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecomew2.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantmewtwo.png', import.meta.url).href, }
            ]
          },
          {
            id: 17,
            name: 'Figura Super Articulada Entei',
            price: 299.90,
            imageURL: new URL('images/bonecoentei.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Entei de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecoentei.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantentei.png', import.meta.url).href, }
            ]
          },
          {
            id: 18,
            name: 'Figura Super Articulada Suicune',
            price: 299.90,
            imageURL: new URL('images/bonecosuicune.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Suicune de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecosuicune.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantsuicune.png', import.meta.url).href, }
            ]
          },
          {
            id: 19,
            name: 'Figura Super Articulada Raikou',
            price: 299.90,
            imageURL: new URL('images/bonecoraikou.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Raikou de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecoraikou.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantraikou.png', import.meta.url).href, }
            ]
          },
          {
            id: 20,
            name: 'Figura Super Articulada Articuno',
            price: 299.90,
            imageURL: new URL('images/bonecoarticuno.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Articuno de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecoarticuno.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantarticuno.png', import.meta.url).href, }
            ]
          },
          {
            id: 21,
            name: 'Figura Super Articulada Zapdos',
            price: 299.90,
            imageURL: new URL('images/bonecozapdos.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Zapdos de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecozapdos.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantzapdos.png', import.meta.url).href, }
            ]
          },
          {
            id: 22,
            name: 'Figura Super Articulada Moltres',
            price: 299.90,
            imageURL: new URL('images/bonecomoltres.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Moltres de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecomoltres.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantmoltres.png', import.meta.url).href, }
            ]
          },
          {
            id: 23,
            name: 'Figura Super Articulada Rayquaza',
            price: 299.90,
            imageURL: new URL('images/bonecorayquaza3.png', import.meta.url).href,
            description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Rayquaza de 15 cm e um acessório para braço.',
            category: 'Pokemon Figures',
            stock: 90,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/bonecorayquaza3.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantrayquaza.png', import.meta.url).href, }
            ]
          },
          {
          id: 24,
          name: 'Figura Super Articulada Tyranitar',
          price: 299.90,
          imageURL: new URL('images/bonecotyranitar.png', import.meta.url).href,
          description: 'Este pacote de figuras superarticuladas do Pokémon Select contém uma figura Rayquaza de 15 cm e um acessório para braço.',
          category: 'Pokemon Figures',
          stock: 90,
          variants: [
            { id: 1, angle: 'front', image: new URL('images/bonecotyranitar.png', import.meta.url).href, },
            { id: 2, angle: 'side', image: new URL('images/varianttyranitar.png', import.meta.url).href, }
          ]
        },
          {
            id: 25,
            name: 'Pelúcia Bulbasaur',
            price: 149.90,
            imageURL: new URL('images/peluciabulba.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciabulba.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantbulba.png', import.meta.url).href, }
            ]
          },
          {
            id: 26,
            name: 'Pelúcia Venusaur',
            price: 149.90,
            imageURL: new URL('images/peluciavenu.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciavenu.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantvenu.png', import.meta.url).href, }
            ]
          },
          {
            id: 27,
            name: 'Pelúcia Charmander',
            price: 149.90,
            imageURL: new URL('images/peluciacharmander.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciacharmander.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantcharmander.png', import.meta.url).href, }
            ]
          },
          {
            id: 28,
            name: 'Pelúcia Charizard',
            price: 149.90,
            imageURL: new URL('images/peluciacharizard.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciacharizard.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantcharizardpelucia.png', import.meta.url).href, }
            ]
          },
          {
            id: 29,
            name: 'Pelúcia Mega Charizard X',
            price: 149.90,
            imageURL: new URL('images/peluciamegacha.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciamegacha.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantmegacha.png', import.meta.url).href, }
            ]
          },
          {
            id: 30,
            name: 'Pelúcia Squirtle',
            price: 149.90,
            imageURL: new URL('images/peluciasqui.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciasqui.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantsqui.png', import.meta.url).href, }
            ]
          },
          {
            id: 31,
            name: 'Pelúcia Blastoise',
            price: 149.90,
            imageURL: new URL('images/peluciablast.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciablast.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantblastoise.png', import.meta.url).href, }
            ]
          },
          {
            id: 32,
            name: 'Pelúcia Pikachu',
            price: 149.90,
            imageURL: new URL('images/peluciapika.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciapika.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantpika.png', import.meta.url).href, }
            ]
          },
          {
            id: 33,
            name: 'Pelúcia Dragonite',
            price: 149.90,
            imageURL: new URL('images/peluciadrago.png', import.meta.url).href ,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciadrago.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantdrago.png', import.meta.url).href, }
            ]
          },
          {
            id: 34,
            name: 'Pelúcia Snorlax',
            price: 149.90,
            imageURL: new URL('images/peluciasnor.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciasnor.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantsnorlax.png', import.meta.url).href, }
            ]
          },
          {
            id: 35,
            name: 'Pelúcia Mew',
            price: 149.90,
            imageURL: new URL('images/peluciamew.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciamew.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantmew.png', import.meta.url).href, }
            ]
          },
          {
            id: 36,
            name: 'Pelúcia Azumarill',
            price: 149.90,
            imageURL: new URL('images/peluciaazuma.png', import.meta.url).href,
            description: 'Produto Original Pokemon Company',
            category: 'Pokemon Plush',
            stock: 50,
            variants: [
              { id: 1, angle: 'front', image: new URL('images/peluciaazuma.png', import.meta.url).href, },
              { id: 2, angle: 'side', image: new URL('images/variantaazuma.png', import.meta.url).href, }
            ]
          },
          
         
         
    ])
    return (pokemon)
})