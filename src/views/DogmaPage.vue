<template>
  <section class="animate__animated animate__fadeIn">
    <div class="flex items-center justify-center font-brr text-2xl md:text-3xl mb-4">
      <h1>наша</h1>
      &nbsp;
      <span
        class="bg-gradient-to-r from-gray-600 via-gray-400 to-blue-400 bg-clip-text text-transparent"
      >
        <h1>догма</h1>
      </span>
    </div>

    <article ref="articles" class="collapse pr-4 mb-8 sm:flex sm:items-center">
      <div
        class="w-full aspect-[4/3] polygon-1 sm:float-left m-4 sm:m-0 sm:mx-4 overflow-hidden relative"
      >
        <img src="../assets/0Lgg0L3QsNGF0YPRjw==.png" class="w-full h-full object-cover" />
      </div>
      <p
        class="m-4 mr-0 sm:m-0 sm:mx-4 sm:max-w-[55%] font-brr2 text-justify text-base md:text-lg lg:text-2xl"
      >
        мы — культ. мы называем себя «Брритва», потому что готовы подобно лезвию резать и
        деконструировать нашу реальность и всякий метафизический эгрегор, подаваемый ею.
        звукосочетание «Брр» символизирует эмоцию отвращения, испытываемую нами в момент разложения
        действительности.
      </p>
    </article>

    <article ref="articles" class="collapse pr-4 mb-8 sm:flex sm:items-center">
      <div
        class="block sm:hidden w-full aspect-[4/3] polygon-2 md:float-left m-4 md:m-0 md:mx-4 overflow-hidden relative"
      >
        <img src="../assets/0LHQu9GP0YLRjA==.png" class="w-full h-full object-cover" />
      </div>
      <p
        class="m-4 mr-0 sm:m-0 sm:mx-4 sm:max-w-[55%] font-brr2 text-justify text-base md:text-lg lg:text-2xl"
      >
        многогранность — основа нашего общества. мы ни за что не позволим вколотить себя в рамки,
        правила, уставы. мы заявляем свои права на свободу.
      </p>
      <div
        class="hidden sm:block w-full aspect-[4/3] polygon-2 md:float-left m-4 md:m-0 md:mx-4 overflow-hidden relative"
      >
        <img src="../assets/0LHQu9GP0YLRjA==.png" class="w-full h-full object-cover" />
      </div>
    </article>

    <article ref="articles" class="collapse flex justify-center">
      <div class="pr-4 mb-8 flex items-center">
        <div class="sm:w-full aspect-[9:16] sm:aspect-video m-4 overflow-hidden relative">
          <img src="../assets/0YXRg9C5==.png" class="w-full h-full object-cover polygon-3" />
          <div class="absolute inset-0 flex items-center justify-center">
            <p
              class="bg-black bg-opacity-60 mx-4 sm:max-w-[50%] font-brr2 text-center text-base md:text-lg lg:text-2xl"
            >
              мы не ищем новые формы и мысли. мы не зеркала, создающие искажённую копию реальности.
              мы всматриваемся в саму сущность действительности — настоящую, истинную. и именно этот
              честный взгляд мы передаём в искусстве.
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const articles = ref([])

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect
          const visibleHeight = Math.min(rect.height, window.innerHeight)
          const totalHeight = rect.height

          const percentageVisible = (visibleHeight / totalHeight) * 100

          if (percentageVisible > 40) {
            entry.target.classList.remove('collapse')
            entry.target.classList.add('animate__animated', 'animate__fadeIn')
          }
        }
      })
    }

    let observer

    onMounted(() => {
      const elements = document.querySelectorAll('article')
      observer = new IntersectionObserver(handleIntersect, {
        threshold: [0.4]
      })

      elements.forEach((article) => {
        observer.observe(article)
      })
    })

    onBeforeUnmount(() => {
      if (observer) {
        const elements = document.querySelectorAll('article')
        elements.forEach((article) => {
          observer.unobserve(article)
          article.classList.add('collapse')
          article.classList.remove('animate__animated', 'animate__fadeIn')
        })
      }
    })

    return {
      articles
    }
  }
}
</script>
