<!-- AlertMessage.vue -->
<template>
    <div>
      <transition name="fade">
        <div v-if="isVisible" class="alert-message">
          <div class="alert-content">
            <span>{{ message }}</span>
            <button @click="closeMessage" class="close-btn">&times;</button>
          </div>
          <div class="progress-bar">
            <div class="progress" :style="{ width: progressWidth + '%' }"></div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeUnmount } from 'vue';
  
  const message = ref('');
  const isVisible = ref(false);
  const progressWidth = ref(100);
  const timeout = ref(null);
  const interval = ref(null);
  
  // Adiciona uma mensagem e inicia o temporizador
  const addMessage = (text) => {
    message.value = text;
    isVisible.value = true;
    progressWidth.value = 100;
    
    // Limpa temporizadores existentes
    clearTimeout(timeout.value);
    clearInterval(interval.value);
    
    // Inicia a contagem regressiva
    const duration = 3000; // 3 segundos
    const steps = 100;
    const stepTime = duration / steps;
    
    interval.value = setInterval(() => {
      progressWidth.value -= 100 / steps;
    }, stepTime);
    
    timeout.value = setTimeout(() => {
      closeMessage();
    }, duration);
  };
  
  // Fecha a mensagem e limpa os temporizadores
  const closeMessage = () => {
    isVisible.value = false;
    clearTimeout(timeout.value);
    clearInterval(interval.value);
  };
  
  // Limpa os temporizadores quando o componente é destruído
  onBeforeUnmount(() => {
    clearTimeout(timeout.value);
    clearInterval(interval.value);
  });
  
  // Expõe métodos para o componente pai
  defineExpose({
    addMessage,
    closeMessage
  });
  </script>
  
  <style scoped>
  .alert-message {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #383838;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 300px;
  }
  
  .alert-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
    line-height: 1;
  }
  
  .progress-bar {
    height: 4px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  .progress {
    height: 100%;
    background-color: #ffdb0c;
    transition: width 0.1s linear;
  }
  
  /* Animação de fade */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>