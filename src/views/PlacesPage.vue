<template>
  <section class="animate__animated animate__fadeIn">
    <div class="flex items-center justify-center font-brr text-2xl md:text-3xl mb-4">
      <span
        class="bg-gradient-to-r from-gray-600 via-gray-400 to-blue-400 bg-clip-text text-transparent"
      >
        <h1>места</h1>
      </span>
      &nbsp;
      <h1>культа</h1>
    </div>

    <div
      class="flex flex-col items-center justify-center w-full h-[72svh] overflow-hidden relative"
    >
      <img
        src="/src/assets/0YXRg9C70Lgg0L3QsNC00L4==.png"
        class="absolute top-0 left-0 w-full h-full polygon-6 object-cover object-top"
      />

      <div
        class="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50"
      >
        <div class="flex flex-col items-center space-y-2 font-brr2">
          <div class="flex gap-16">
            <a href="https://brritwa.t.me/" target="_blank">
              <img
                src="../assets/tg.png"
                class="w-16 lg:w-24 h-16 lg:h-24 transition-[0.3s] hover:scale-110"
              />
            </a>
            <a :href="vkLink" target="_blank">
              <img
                src="../assets/vk.png"
                class="w-16 lg:w-24 h-16 lg:h-24 transition-[0.3s] hover:scale-110"
              />
            </a>
          </div>

          <div class="flex gap-4">
            <p class="cursor-not-allowed text-lg lg:text-2xl text-white">
              нельзяграм: <span class="font-brr cursor-text">@brritwa</span>
            </p>
            <button @click="copyToClipboard" class="flex items-center space-x-2 text-white">
              <i class="bi bi-clipboard transition-[0.3s] hover:scale-110" aria-hidden="true"></i>
            </button>
          </div>
          <span v-if="copyMessage" class="opacity-70">{{ copyMessage }}</span>
          <span v-else class="opacity-0 cursor-default" @contextmenu.prevent=""
            >молодец, ты нашёл костыль</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const vkLink = ref('')
const copyMessage = ref('')

onMounted(() => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent)
  vkLink.value = isMobile ? 'vk://vk.com/brritwa' : 'https://vk.com/brritwa'
})

const copyToClipboard = () => {
  navigator.clipboard.writeText('brritwa').then(() => {
    copyMessage.value = 'никнейм скопирован'
    setTimeout(() => {
      copyMessage.value = ''
    }, 2000)
  })
}
</script>
