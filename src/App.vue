<script setup>
import { RouterView } from "vue-router";
import headerDesktop from "./components/headerDesktop.vue";
import footerComponent from "./components/footerComponent.vue"
import headerMobile from "./components/headerMobile.vue";
</script>

<template>
  <headerMobile />
  <router-view></router-view>
  <footerComponent />
</template>

<style scoped>
</style>
