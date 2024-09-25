<template>
  <section class="animate__animated animate__fadeIn">
    <div class="flex w-full h-full justify-center">
      <div class="w-11/12 min-h-[80svh] flex items-center justify-center relative">
        <div
          class="absolute w-full h-full bg-for-cult polygon-4 bg-center bg-contain"
          @contextmenu.prevent=""
        ></div>
        <div class="relative inset-0 flex items-center justify-center">
          <div class="bg-black bg-opacity-60 p-4">
            <div
              id="countdown"
              class="font-brr2 text-white text-4xl md:text-7xl lg:text-8xl shadow-lg"
            >
              {{ countdown }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const countdown = ref('')

const targetDate = new Date('2024-10-25T00:00:00+03:00')

const updateCountdown = () => {
  const now = new Date()
  const difference = targetDate - now

  if (difference <= 0) {
    countdown.value = ''
    clearInterval(timerInterval)
    return
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  countdown.value = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

let timerInterval

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timerInterval)
})
</script>
