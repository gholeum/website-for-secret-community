<script setup>
import { ref, onMounted } from 'vue'
import NoCultYet from '../components/NoCultYet.vue'
import CultFound from '../components/CultFound.vue'

const isCultFound = ref(false)

onMounted(() => {
  isCultFound.value = localStorage.getItem('cult') === 'brr'
})

const handleCultFound = () => {
  isCultFound.value = true
}
</script>

<template>
  <section class="animate__animated animate__fadeIn">
    <div class="relative w-full h-[80svh] p-4 overflow-hidden">
      <img
        src="/src/assets/0Y8g0YHQvNC10YDRgtGM==.png"
        class="absolute top-0 left-0 w-full h-full polygon-5 object-top object-cover"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
        <CultFound v-if="isCultFound" />
        <NoCultYet v-else @cultFound="handleCultFound" />
      </div>
    </div>
  </section>
</template>
