import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { createWebHistory, createRouter } from 'vue-router';
import { init } from 'vwo-fme-node-sdk';
import './assets/css/main.css';
import App from './App.vue';
import Page from './components/Page.vue';
import Banner from './components/Banner.vue';
import Cta from './components/Cta.vue';
import PageView from './PageView.vue';
import ExperimentationVwo from './components/ExperimentationVwo.vue';

const routes = [
	{ path: '/', component: PageView },
	{ path: '/:slug', component: PageView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);
app.use(StoryblokVue, {
	accessToken: import.meta.env.STORYBLOK_DELIVERY_API_TOKEN,
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js */
		region: 'eu',
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: import.meta.env.STORYBLOK_API_BASE_URL
			? `${new URL(import.meta.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
	},
	use: [apiPlugin],
});

app.component('page', Page);
app.component('banner', Banner);
app.component('cta', Cta);
app.component('experimentation-vwo', ExperimentationVwo);

const vwoClient = init({
	accountId: import.meta.env.VITE_VWO_ACCOUNT_ID,
	sdkKey: import.meta.env.VITE_VWO_SDK_KEY,
});

app.provide('vwoClient', vwoClient);

app.use(router).mount('#app');
