<script setup>
import { RouterView } from "vue-router";
import headerDesktop from "./components/headerDesktop.vue";
import footerComponent from "./components/footerComponent.vue"
</script>

<template>
  <headerDesktop />
  <router-view></router-view>
  <footerComponent />
</template>

<style scoped>
</style>
