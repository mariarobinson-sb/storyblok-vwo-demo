<script setup>
import ButtonElement from './svg/ButtonElement.vue';
const props = defineProps({ 
  blok: Object
});
</script>

<template>
  <div
    class="banner rounded-2xl relative my-4 overflow-hidden" 
    :style="`background-color: ${blok.background_color?.color}`"
  >
    <div class="content grid grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
      <!-- Banner Text Content -->
      <div
        class="banner_text-content col-span-1 flex justify-center flex-col gap-1 z-10 lg:gap-1 xl:gap-4 xl:col-span-1 2xl:col-span-1 pl-15 lg:pl-20 xl:pl-20 2xl:pl-20 2xl:pr-0"
      >
        <h1 class="text-2xl lg:text-4xl">{{ blok.title }}</h1>
        <ButtonElement class="w-40" />
      </div>
      <img :src="blok.image?.filename" class="w-full z-10" alt="">
      <!-- Visual Editor Element -->
      <div class="banner_border-element absolute w-full h-full px-5 py-5 xl:py-10: 2xl:py-10">
        <div class="border-2 w-full h-full"></div>
      </div>
    </div>
  </div>
</template>