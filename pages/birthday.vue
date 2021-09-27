<template>
  <section class="hero md:px-0">
     <div class="flex items-center justify-center">
    <main class="max-w-screen-xl px-4 lg:px-16">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
           {{ $t('birthday.title') }}
            <br>
            
            <span class="text-indigo-600">Pony express</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              
               {{ $t('birthday.heading') }}
          </p>
        </div>
      </main>
  </div>

    <div class="sm:items-center sm:justify-center hero--container">
    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          <dt>
            <h2 class="text-lg leading-6 font-medium text-gray-900">  {{ $t('birthday.service_home_house') }} </h2>
          </dt>
          <dd class="mt-2 text-base text-gray-500">
            {{ $t('birthday.service_home_house_desc') }}

          </dd>
        </div>

        <div class="relative">
          <dt>
            <h2 class="text-lg leading-6 font-medium text-gray-900"> {{ $t('birthday.service_house') }} </h2>
          </dt>
          <dd class="mt-2 text-base text-gray-500">
                {{ $t('birthday.service_house_desc') }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
    <!--div class="hero--img-container">
      <img src="~/assets/images/hero.svg" alt="Build website">
    </div-->
      <Gallery :photos="photos" />
  </section>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta.js'
import Gallery from '~/components/Gallery.vue';
import photos from '@/birthday.json';
export default {
  name: 'Birthday',
  components: {
    Gallery,
  },
   data() {
    return {
       photos: photos 
    };
  },
    head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaData = {
      title: this.$t('seo.birthday.title'),
      description: this.$t('seo.birthday.description'),
      keywords: this.$t('seo.birthday.keywords'),
    }

    return {
      title: this.$t('seo.birthday.title'),
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [...getSiteMeta(metaData), ...i18nSeo.meta],
      link: [...i18nSeo.link],
    }
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  @apply px-2 pt-32 pb-10 bg-white;
}
.hero .hero--container {
  @apply container items-center max-w-6xl px-5 mx-auto space-y-6 text-center;
}
.hero .hero--headings {
  @apply text-4xl font-extrabold tracking-tight text-accent text-left;
  @screen sm {
    @apply text-5xl;
  }
  @screen md {
    @apply text-6xl text-center;
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