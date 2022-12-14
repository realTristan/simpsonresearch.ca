import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  	postcss: true,
		}),
	  ],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		prerender: {
			crawl: true,
			enabled: true,
			entries: ["*", "/", "/search"],
		  }
	}
};

export default config;
