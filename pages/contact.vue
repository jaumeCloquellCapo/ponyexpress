<template>
<section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12269.700790505562!2d3.1516558!3d39.7525608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4620b886cab2e65c!2sponyexpressmallorca!5e0!3m2!1sen!2ses!4v1620913968567!5m2!1sen!2ses" style="filter: grayscale(0.5) contrast(1) opacity(0.8);"></iframe>
  
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">      {{ $t('contact.title') }}</h2>
      <p class="leading-relaxed mb-5 text-gray-600">      {{ $t('contact.subtitle') }}</p>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              
                  <a href="tel:619861880">
                    {{ '619861880' }}
                  </a>
      </button>
    </div>
  </div>
</section>

</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta.js'
export default {
  name: 'SearchPage',
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
      const metaData = {
      title: this.$t('seo.contact.title'),
      description: this.$t('seo.contact.description'),
      keywords: this.$t('seo.contact.keywords'),
    }
    return {
      htmlAttrs:{
          ...i18nSeo.htmlAttrs
      },
      title: this.$t('seo.contact.title'),
      meta: [
        ...getSiteMeta(metaData),
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  },
}
</script>
