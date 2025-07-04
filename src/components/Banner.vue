<script setup>
import ButtonElement from './svg/ButtonElement.vue';
defineProps({ blok: Object });
</script>

<template>
	<div class="banner rounded-2xl relative my-4" :style="`background-color: ${blok.background_color?.color}`">
		<div class="content grid grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
			<!-- Visual Editor Element -->
			<div class="banner_border-element absolute w-full h-full px-5 py-5 xl:py-10: 2xl:py-10">
				<div class="box absolute bg-black text-white font-extralight text-xs w-fit px-2 py-1">Landing Page</div>
				<div class="border-2 w-full h-full"></div>
			</div>
			<!-- Banner Text Content -->
			<div
				class="banner_text-content col-span-1 flex justify-center flex-col gap-1 lg:gap-1 xl:gap-4 xl:col-span-1 2xl:col-span-1 pl-15 lg:pl-20 xl:pl-20 2xl:pl-20 2xl:pr-0"
			>
				<h1 class="text-2xl lg:text-4xl">{{ blok.title }}</h1>
				<!-- Button Visual Editor Element -->
				<ButtonElement class="w-40" />
			</div>
			<img :src="blok.image?.filename" class="w-full" alt="">
		</div>
	</div>
</template>