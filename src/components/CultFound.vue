<template>
  <div class="md:max-w-[75%] lg:max-w-[70%] bg-black bg-opacity-60 mb-2 px-4">
    <h3 class="font-brr text-white text-2xl md:text-3xl lg:text-4xl text-center">
      <span
        class="inline-block bg-gradient-to-r from-gray-600 via-gray-400 to-blue-400 bg-clip-text text-transparent"
        >добро пожаловать в культ</span
      >
    </h3>
  </div>

  <div class="md:max-w-[75%] lg:max-w-[70%] bg-black bg-opacity-60 mb-2 px-4">
    <h3 class="font-brr2 text-white text-lg md:text-xl lg:text-2xl text-center">
      ознакомиться с основными идеями и положениями культа вы можете на странице
      <span
        class="inline-block font-brr bg-gradient-to-r from-gray-600 via-gray-400 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-gray-600 bg-clip-text text-transparent"
      >
        <router-link to="/dogma" class="">«догма»</router-link>
      </span>
    </h3>
  </div>

  <div class="md:max-w-[75%] lg:max-w-[70%] bg-black bg-opacity-60 mb-2 px-4">
    <h3 class="font-brr2 text-white text-lg md:text-xl lg:text-2xl text-center">
      узнать о сакральных местах культа на соответствующей странице
      <span
        class="inline-block font-brr bg-gradient-to-r from-gray-600 via-gray-400 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-gray-600 bg-clip-text text-transparent"
      >
        <router-link to="/places" class="">«места»</router-link>
      </span>
    </h3>
  </div>

  <div class="md:max-w-[75%] lg:max-w-[70%] bg-black bg-opacity-60 mb-2 px-4">
    <h3 class="font-brr2 text-white text-lg md:text-xl lg:text-2xl text-center">
      секретные материалы находятся
      <span
        class="inline-block font-brr bg-gradient-to-r from-gray-600 via-gray-400 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-gray-600 bg-clip-text text-transparent"
      >
        <router-link to="/cult" class="">здесь</router-link>
      </span>
    </h3>
  </div>
</template>
