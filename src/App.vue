<script setup>
import { RouterView } from "vue-router";
import HeaderCompo from "./components/HeaderCompo.vue";
import footerComponent from "./components/footerComponent.vue"
</script>

<template>
  <HeaderCompo/>
  <router-view></router-view>
  <footerComponent />
</template>

<style scoped>
</style>
