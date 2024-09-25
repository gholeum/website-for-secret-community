<template>
  <TheHeader />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
</script>
