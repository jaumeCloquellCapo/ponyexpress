<template>
  <Gallery />
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta.js'
import Gallery from '~/components/Gallery.vue';
export default {
  name: 'gallery',
  components: {
    Gallery,
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
