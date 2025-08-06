<script setup>
import JsonDebugger from './JsonDebugger.vue';
const props = defineProps({ blok: Object });
</script>

<template>
	<JsonDebugger :data="blok" title="Component Debug" :collapsed="true" />

	<!-- Body -->
	<StoryblokComponent
		v-for="currentBlok in blok.body"
		:key="currentBlok._uid"
		:blok="currentBlok"
	/>
</template>
