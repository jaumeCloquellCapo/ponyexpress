<template>

  <section class="hero md:px-0">
     <div class="flex items-center justify-center">
    <main class="max-w-screen-xl px-4 lg:px-16">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
           {{ $t('gallery.title') }}
            <br>

            <span class="text-indigo-600">Pony express</span>
          </h1>
        </div>
      </main>
  </div>
  <Gallery :photos="photos" />
</section>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta.js'
import Gallery from '~/components/Gallery.vue';
import photos from '@/photos.json';
import birthday from '@/birthday.json';
export default {
  name: 'gallery',
  components: {
    Gallery,
  },
  data() {
    return {
       photos: photos.concat(birthday)
    };
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaData = {
      title: this.$t('seo.galeria.title'),
      description: this.$t('seo.galeria.description'),
      keywords: this.$t('seo.galeria.keywords'),
    }

    return {
      title: this.$t('seo.galeria.title'),
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [...getSiteMeta(metaData), ...i18nSeo.meta],
      link: [...i18nSeo.link],
    }
  },
};
</script>

<style lang="postcss" scoped>
.hero {
  @apply px-2 pt-5 pb-10 bg-white;
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