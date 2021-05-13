<template>
  <nav :class="headerClassList" class="w-full z-30 top-0">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
         <NuxtLink :to="localePath('index')"  class="text--logo text-gray-600">
        Pony Express Mallorca
      </NuxtLink>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1 text-orange-800 hover:text-gray-900"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        :class="navContentClassList"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3 mt-1">
             <NuxtLink :to="localePath('index')"  class="item--link">
              <span class="block">Home</span>
            </NuxtLink>
          </li>

          <li class="mr-3 mt-1">
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <span class="block">{{ $t('common.' + locale.code) }}</span>
            </NuxtLink>
          </li>
        </ul>
      <span class="inline-flex rounded-md shadow-sm mt-1">
                  <NuxtLink :to="localePath('contact')" class="btn btn--primary">
                          {{ $t('contact.title') }} 
                  </NuxtLink>
            </span>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>


export default {
  name: 'TheHeader',
  data() {
    return {
      scrollY: 0,
      isOpen: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    isSticky() {
      return this.scrollY > 15
    },
    headerClassList() {
      return this.isSticky ? 'bg-white shadow' : ''
    },
    navActionClassList() {
      return this.isSticky ? 'text-black' : 'bg-white text-gray-800'
    },
    navContentClassList() {
      let classList = this.isSticky ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    },
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    },
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  },
}
</script>
