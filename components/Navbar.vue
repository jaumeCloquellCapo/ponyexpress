<template>
  <header class="toolbar">
    <div class="toolbar--container">
      <NuxtLink :to="localePath('index')"  class="text--logo text-gray-900 from-blue-600 via-indigo-400 to-purple-300">
        Pony Express Mallorca
      </NuxtLink>

      <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
        <nav class="hidden md:block">
          <div class="flex items-baseline space-x-10">
            <NuxtLink :to="localePath('index')"  class="item--link">
              <span class="block">Home</span>
            </NuxtLink>

                <NuxtLink :to="localePath('gallery')"  class="item--link">
              <span class="block">     {{ $t('gallery.title') }}</span>
            </NuxtLink>


                 <NuxtLink
              v-for="locale in availableLocales"
              class="block"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ $t('common.' + locale.code) }}
            </NuxtLink>

            <span class="inline-flex rounded-md shadow-sm">
                  <NuxtLink :to="localePath('contact')" class="btn btn--primary">
                          {{ $t('contact.title') }} 
                  </NuxtLink>
            </span>
          </div>
        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
   computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style lang="postcss" scoped>
.toolbar {
  @apply relative w-full px-8 text-gray-700 bg-white;
}

.toolbar .toolbar--container {
  @apply container flex flex-col flex-wrap items-center justify-between py-5 mx-auto max-w-7xl;

  @screen md {
    @apply flex-row;
  }
}

.toolbar .text--logo {
  @apply relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none;
}

nav .item--link {
  @apply relative font-medium leading-6 mx-2 text-gray-600 transition duration-150 ease-out;
}

nav .item--link:hover {
  @apply text-gray-900;
}
</style>
