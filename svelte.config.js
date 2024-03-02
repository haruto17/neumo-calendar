import adapter from '@sveltejs/adapter-static';

const dev = process.argv.include("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/neumo-calendar'
		}
	}
};

export default config;