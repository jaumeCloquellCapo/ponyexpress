<template>
  <!--div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)">
      </router-link>
    </div>
  </div-->
  <div class="container mx-auto px-4">


    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div  v-for="photo in photos"
              :key="photo.id" class="md:w-1/3 px-4 mb-8 md:mb-0">
          <img class="rounded shadow-md" :src="thumbUrl(photo.filename)" alt="">
        </div>
      </div>
    </section>

  </div>

</template>

<script>
import photos from '@/photos.json';
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
  },
};
</script>

<style>

</style>
