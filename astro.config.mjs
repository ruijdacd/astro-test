import { defineConfig } from 'astro/config';

import solid from '@astrojs/solid-js';

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://astro.build/config
export default defineConfig({
	// Enable Solid to support Solid JSX components.
	integrations: [solid()],

	vite: {
		plugins: [vanillaExtractPlugin()]
	}
});
