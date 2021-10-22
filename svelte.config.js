import sveltePreprocess from "svelte-preprocess";
import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: vercel(),
		target: '#svelte'
	}
};

export default config;
