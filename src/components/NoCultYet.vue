<template>
  <div class="md:max-w-[75%] lg:max-w-[55%] bg-black bg-opacity-60 mb-2">
    <h3 class="font-brr2 text-white text-2xl md:text-3xl lg:text-4xl text-center">
      для получения полного доступа ко всем разделам сайта, введите код
    </h3>
  </div>

  <div class="flex justify-center gap-4 font-brr">
    <input
      type="text"
      maxlength="1"
      placeholder="?"
      v-model="code1"
      @input="onInput(1)"
      @keydown="onKeydown(1, $event)"
      @focus="clearMessage"
      @paste="onPaste"
      class="w-12 h-16 text-center text-3xl bg-black/60 text-white border-b-4 border-gray-300 rounded-none focus:outline-none focus:bg-black transition"
    />
    <input
      type="text"
      maxlength="1"
      placeholder="?"
      v-model="code2"
      @input="onInput(2)"
      @keydown="onKeydown(2, $event)"
      @focus="clearMessage"
      class="w-12 h-16 text-center text-3xl bg-black/60 text-white border-b-4 border-gray-300 rounded-none focus:outline-none focus:bg-black transition"
    />
    <input
      type="text"
      maxlength="1"
      placeholder="?"
      v-model="code3"
      @input="onInput(3)"
      @keydown="onKeydown(3, $event)"
      @focus="clearMessage"
      class="w-12 h-16 text-center text-3xl bg-black/60 text-white border-b-4 border-gray-300 rounded-none focus:outline-none focus:bg-black transition"
    />
  </div>
  <div class="bg-white bg-opacity-60 my-2 px-7" :class="padding">
    <p v-if="message" class="font-brr2 text-black text-xl text-center">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['cultFound'])

const code1 = ref('')
const code2 = ref('')
const code3 = ref('')
const message = ref('')
const padding = ref('')

const checkCode = () => {
  const fullCode = (code1.value + code2.value + code3.value).toLowerCase()
  if (fullCode === 'брр') {
    localStorage.setItem('cult', 'brr')
    message.value = 'доступ получен'
    padding.value = 'px-[19px]'

    setTimeout(() => {
      emit('cultFound')
    }, 3000)
  } else {
    message.value = 'код неверный'
    padding.value = 'px-7'
  }
}

const onInput = (index) => {
  if (index === 1 && code1.value.length >= 1) {
    document.querySelector(`input:nth-of-type(2)`).focus()
  } else if (index === 2 && code2.value.length >= 1) {
    document.querySelector(`input:nth-of-type(3)`).focus()
  } else if (index === 3) {
    checkCode()
  }
}

const onPaste = (event) => {
  event.preventDefault()
  const pastedData = event.clipboardData.getData('text')
  const letters = pastedData.split('')

  if (letters.length > 0) {
    code1.value = letters[0] || ''
  }
  if (letters.length > 1) {
    code2.value = letters[1] || ''
    document.querySelector(`input:nth-of-type(2)`).focus()
  }
  if (letters.length > 2) {
    code3.value = letters[2] || ''
    document.querySelector(`input:nth-of-type(3)`).focus()
    checkCode()
  }
}

const onKeydown = (index, event) => {
  if (event.key === 'Backspace') {
    const currentInput = event.target

    if (currentInput.value === '') {
      if (index === 2) {
        code2.value = ''
        document.querySelector(`input:nth-of-type(1)`).focus()
      } else if (index === 3) {
        code3.value = ''
        document.querySelector(`input:nth-of-type(2)`).focus()
      }
      message.value = ''
    }
  }
}

const clearMessage = () => {
  message.value = ''
}
</script>
