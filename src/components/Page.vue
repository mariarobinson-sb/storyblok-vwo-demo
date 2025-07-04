<script setup>
defineProps({blok: Object})
</script>

<template>
	<StoryblokComponent v-for="currentBlok in blok.banner_variation":key="currentBlok._uid" :blok="currentBlok" />
	<StoryblokComponent v-for="currentBlok in blok.body":key="currentBlok._uid" :blok="currentBlok" />
</template>