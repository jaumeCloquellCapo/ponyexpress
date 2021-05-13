<template>
  <!--section class="hero md:px-0">
    <div class="hero--container">
      <h1 class="hero--headings">
        <span class="block">PONY EXPRESS <span class="block text-gradient bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-300 lg:inline lg:mt-0 mt-1"> Mallorca</span></span>
      </h1>
      <p class="hero--description">
        El caballo es el animal favorito de muchos niños y en este paseo en pony en Mallorca podrán ver su sueño cumplido.
      </p>
    </div>
    <div class="hero--img-container">
   <img src="~/assets/images/logo.png" class="max-w-xs md:max-w-sm m-auto"/>
    </div>
  </section-->
  
<div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
  
  <div class="flex items-center justify-center">
    <main class="max-w-screen-xl px-4 lg:px-16">
        <div class="text-center sm:text-left">
          <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            PONY EXPRESS
            <br>
            <span class="text-indigo-600">Mallorca</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {{ $t('hero.title') }}
          </p>
        </div>
      </main>
  </div>
  <div class="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center" :style="'background-image:url(' + require('~/assets/images/bk.jpeg')+');'"></div>
  
</div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="postcss" scoped>
.hero {
  @apply px-2 pt-16 pb-10 bg-white;

}

.hero .hero--container {
  @apply container items-center max-w-6xl px-5 mx-auto space-y-6 text-center;
}

.hero .hero--headings {
  @apply text-4xl font-extrabold tracking-tight text-accent text-center;

  @screen sm {
    @apply text-5xl;
  }

  @screen md {
    @apply text-6xl;
  }
}

.hero .hero--description {
  @apply w-full mx-auto text-base text-left text-gray-500;

  @screen sm {
    @apply text-lg;
  }

  @screen md {
    @apply max-w-md text-center;
  }

  @screen lg {
    @apply text-2xl;
  }
}

.hero .hero--actions {
  @apply relative flex flex-col justify-center;

  @screen lg {
    @apply flex-row space-x-4;
  }
}

.hero .hero--img-container {
  @apply container items-center max-w-4xl px-5 mx-auto mt-16 text-center;
}

.hero .btn {
  @apply px-6 py-3 mb-3 text-lg rounded-md;
}
</style>
