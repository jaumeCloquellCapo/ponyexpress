<template>
  <div>
    <!-- Hero Start -->
    <Hero />
    <!-- Hero End -->

    <!-- Features Start -->
    <section class="py-20 bg-cover shadow-inner">
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl xl:text-6xl">
          {{ $t('home.our_services') }}
        </h2>
        <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>

      <div class="container max-w-6xl mx-auto">
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-4 lg:grid-cols-12 sm:px-8 xl:px-0">
          <div class="relative flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-4 overflow-hidden">
                 <img src="~/assets/images/004-horse.png" class="w-24 h-24" />
         
            <h4 class="text-xl font-medium text-accent">
           
                   {{ $t('home.party') }}
            </h4>
            <p class="text-base text-center text-gray-500">
                      {{ $t('home.party_desc') }}
            </p>
          </div>

          <div class="relative flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-4 overflow-hidden">
             <img src="~/assets/images/011-horse.png" class="w-24 h-24" />
            <h4 class="text-xl font-medium text-accent">
              {{ $t('home.comunion') }}
            </h4>
            <p class="text-base text-center text-gray-500">
                          {{ $t('home.comunion_desc') }}
             
            </p>
          </div>

          <div class="relative flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-4 overflow-hidden">
                    <img src="~/assets/images/005-horse.png" class="w-24 h-24" />
            <h4 class="text-xl font-medium text-accent">
               {{ $t('home.others') }}
 
            </h4>
            <p class="text-base text-center text-gray-500">
                {{ $t('home.others_desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Features End -->

    <!-- Testimonials Start-->
    <!--Testimonials :testimonials="testimonials"/-->
    <!-- Testimonials End-->

    <!-- Call To Action Start -->
    <CallAction />
    <!-- Call To Action End -->
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Testimonials from '~/components/Testimonials.vue';
import CallAction from '~/components/CallAction.vue';
import getSiteMeta from '~/utils/getSiteMeta.js'
export default {
  components: {
    Hero,
    Testimonials,
    CallAction
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaData = {
      title: this.$t('seo.home.title'),
      description: this.$t('seo.home.description'),
      keywords: this.$t('seo.home.keywords'),
    }

    return {
      title: this.$t('seo.home.title'),
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [...getSiteMeta(metaData), ...i18nSeo.meta],
      link: [...i18nSeo.link],
    }
  },
  data: () => ({
    testimonials: [
      {
        id: 1,
        name: 'James Durant',
        jobTitle: 'Owner, Steak House',
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
      },
      {
        id: 2,
        name: 'Christopher Buddy',
        jobTitle: 'CEO, HouseDesign Ltd.',
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
      },
      {
        id: 3,
        name: 'Alphonse Todd',
        jobTitle: 'CTO, MarketplaceDesign Inc.',
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
      }
    ]
  })
}
</script>
