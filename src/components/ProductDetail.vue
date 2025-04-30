<template>
    <div class="product-component flex justify-center items-center mt-50">
        <div class="product-page flex-wrap">
        <div class="cart" v-show="false">Cart: {{ cart }}</div>

        <div class="product-image">
            <img :src="currentImage" :alt="product.name" />
        </div>

        <div class="product-info">
            <h1>{{ product.name }}</h1>
            <p class="category">{{ product.category }}</p>

            <p v-if="product.stock > 10">In Stock</p>
            <p v-else-if="product.stock > 1">Almost Out</p>
            <p v-else>Out of Stock</p>

            <div class="price">
                <span class="discount-price">R$ {{ discountedPrice.toFixed(2).replace('.', ',') }} no Pix</span>
                <span class="original-price">R$ {{ product.price.toFixed(2).replace('.', ',') }}</span>
            </div>

            <div class="sizes">
                <div class="size-buttons flex-wrap">
                    <div v-for="variant in product.variants" :key="variant.id" @mouseover="changeImage(variant.image)"
                        class="color-circle mx-auto flex items-center justify-center"><img :src="variant.image" class="" alt=""></div>
                </div>
            </div>

            <div class="quantity">
                <button @click="decrement">-</button>
                <span>{{ quantity }}</span>
                <button @click="increment">+</button>
            </div>

            <button class="add-to-cart" :class="{ disabledButton: product.stock < 1 }" @click="addToCart"
                :disabled="product.stock < 1">
                Add to cart
            </button>
        </div>

        <AlertMessage ref="alertMessage" />
    </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import { ref, computed, onMounted } from 'vue'
import AlertMessage from '@/components/AlertMessage.vue'
import { usePokemonStore } from '@/stores/pokemon'

onMounted(()=> {
    console.log(store.pokemon.find(item => item.id === Number(route.params.id).imageURL))
})

const store = usePokemonStore()
const route = useRoute()

const product = store.pokemon.find(item => item.id === Number(route.params.id))
const valorProduto = product.price

const quantity = ref(1)
const cart = ref(0)
const currentImage = ref(product.imageURL)
const alertMessage = ref(null)

const increment = () => {
    quantity.value++
    product.price = product.price + valorProduto
}

const decrement = () => {
    if (quantity.value > 1) {
        quantity.value--
        product.price = product.price - valorProduto
    }
}

const changeImage = (newImage) => {
    currentImage.value = newImage
}

const addToCart = () => {
    if (product.stock > 0) {
        cart.value += quantity.value
        alertMessage.value.addMessage('Produto adicionado ao carrinho!')

        setTimeout(() => {
        }, 2200)
    }
}

const discountedPrice = computed(() => {
    return product.price * 0.90
})


</script>

<style scoped>
.product-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    gap: 60px;
    position: relative;
}

.cart {
    display: none;
}

.product-image img {
    width: 450px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    background: #f7f7f7;
    padding: 20px;
}

.product-info {
    max-width: 400px;
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.category {
    color: gray;
    margin-bottom: 20px;
}

.price {
    margin-bottom: 20px;
}

.discount-price {
    font-weight: bold;
    font-size: 1.5rem;
    color: #222;
    margin-right: 10px;
}

.original-price {
    text-decoration: line-through;
    color: #999;
}

.sizes p {
    margin-bottom: 8px;
}

.size-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.quantity button {
    width: 30px;
    height: 30px;
    background: #f0f0f0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.2rem;
}

.add-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 20px;
}

.disabledButton {
    opacity: 0.5;
    cursor: not-allowed;
}

.color-circle {
    width: 10rem;
    height: 10rem;
    display: inline-block;
    cursor: pointer;
    border: 1px solid #ccc;
}

.message {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 420px) {
    .product-page {
        width: 100%;
    }
    .product-image img {
        width: 100%;
        height: auto;
    }
    .product-info {
        max-width: 100%;
    }
}
@media (max-width: 900px){
    .product-component{
        margin-top: 10px;
    }
}
</style>
