<template>
<div class="container mx-auto py-10">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="flex justify-center" v-for="photo in photos" :key="photo.id">
       <img class="object-cover h-72 w-full" :src="thumbUrl(photo.filename)"
            :alt="photo.title">
    </div>
  </div>
</div>

  <!--div class="container mx-auto px-4">
    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div  v-for="photo in photos"
              :key="photo.id" class="md:w-1/3 px-4 mb-8 md:mb-0">
          <img class="rounded shadow-md" :src="thumbUrl(photo.filename)" :alt="photo.title">
        </div>
      </div>
    </section>

  </div-->

</template>

<script>

export default {
  name: 'Gallery',
  props: ['photos'],
  data() {
    return {

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
