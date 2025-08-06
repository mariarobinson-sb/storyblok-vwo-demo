<script setup>
const props = defineProps({ 
  blok: Object
});
</script>

<template>
	<div 
		class="cta inline-flex space-y-2 items-center justify-center flex-1 w-full rounded-xl mt-5 p-7"
		:style="`background-color: ${blok.bg_color?.color}`"
	>
		<div class="cta_content flex flex-col gap-3 flex-2/4">
			<p class="w-full text-2xl font-semibold text-white">{{ blok.title || 'CTA Title' }}</p>
			<p class="w-full tracking-wide leading-tight text-white">
				{{ blok.description || 'CTA Description Here' }}
			</p>
		</div>
		<div class="cta_actions flex-1">
			<button class="bg-white/0 border rounded-lg border-whit text-white text-sm py-2 inset-0 font-medium leading-normal text-center w-full cursor-pointer hover:bg-white/25 transition-all duration-300">
				Buy Now
			</button>
		</div>
	</div>
</template>