<script setup>
import { ref } from 'vue'

const messages = ref([])

const addMessage = (text) => {
    const newMessage = {
        text,
        progress: 100,
        opacity: 1,
        position: '100%',
    }

    messages.value.push(newMessage)

    newMessage.position = '0%'

    const duration = 3000
    const interval = 30
    const decrement = 100 / (duration / interval)

    const timer = setInterval(() => {
        newMessage.progress -= decrement
        newMessage.opacity = newMessage.progress / 100

        if (newMessage.progress <= 0) {
            clearInterval(timer)
            newMessage.position = '100%'
            setTimeout(() => {
                messages.value.shift()
            }, 500)
        }
    }, interval)
}

defineExpose({
    addMessage
})
</script>

<template>
    <div class="alert-messages">
        <div v-for="(message, index) in messages" :key="index" class="alert-message"
            :style="{ opacity: message.opacity, transform: `translateX(${message.position})` }">
            <div class="alert-content">
                <span>{{ message.text }}</span>
                <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: message.progress + '%' }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.alert-messages {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
}

.alert-message {
    background-color: #383838;
    color: #ffffff;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    min-width: 250px;
    margin-bottom: 10px;
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.alert-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.progress-bar {
    height: 4px;
    background-color: #555;
    border-radius: 2px;
    overflow: hidden;
    width: 100%;
}

.progress-fill {
    height: 100%;
    background-color: #ffdb0c;
    transition: width 0.3s linear;
}
</style>