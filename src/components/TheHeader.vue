<template>
  <header
    class="container mx-auto p-4 pb-0 sticky top-0 z-20 bg-black flex flex-col md:flex-row md:items-center justify-between"
  >
    <div class="flex justify-between items-center w-full">
      <img src="/brr-logo-white.png" class="w-20 h-auto cursor-help" @click="animateLogo" />
      <button @click="toggleMenu" class="md:hidden flex items-center justify-center p-2">
        <span v-if="!menuOpen" class="bi bi-list text-white text-lg"></span>
        <span v-else class="bi bi-chevron-up text-white text-lg"></span>
      </button>
    </div>
    <nav :class="{ hidden: !menuOpen, 'md:flex': true }" class="w-full md:justify-end">
      <ul
        class="flex flex-col md:flex-row md:space-x-10 font-brr text-lg lg:text-xl text-white mt-2"
      >
        <li class="text-center transition-transform duration-300 transform hover:scale-110">
          <router-link to="/" @click="closeMenu">главная</router-link>
        </li>
        <li class="text-center transition-transform duration-300 transform hover:scale-110">
          <router-link to="/dogma" @click="closeMenu">догма</router-link>
        </li>
        <li class="text-center transition-transform duration-300 transform hover:scale-110">
          <router-link to="/places" @click="closeMenu">места</router-link>
        </li>
        <li class="text-center transition-transform duration-300 transform hover:scale-110">
          <router-link to="/cult" @click="closeMenu">культ</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const menuOpen = ref(false)

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
    }

    const animateLogo = () => {
      const logo = document.querySelector('img')
      logo.classList.add('animate__animated', 'animate__swing')
      logo.addEventListener('animationend', () => {
        logo.classList.remove('animate__animated', 'animate__swing')
      })
    }

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
      animateLogo
    }
  }
}
</script>

<style scoped>
nav {
  transition: max-height 1s ease-in-out;
}
</style>
