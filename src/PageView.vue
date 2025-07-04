<script setup>
import { useStoryblok } from '@storyblok/vue';
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';

const slug = useRoute().params.slug
const story = await useStoryblok(`${slug ? slug : 'home'}`, {
  version: 'draft',
});
</script>

<template>
	<Navbar />
	<div class="container mx-auto px-12 xl:px-52 2xl:px-72">
		<StoryblokComponent v-if="story" :blok="story.content" />
	</div>
</template>