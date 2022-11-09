import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';
import { replaceCodePlugin } from "vite-plugin-replace";
import path from 'path';

export default {
	preprocess: sveltePreprocess( { sourceMap: false } ),
	kit: {
		adapter: statix( {
			pages: 'build',
			assets: 'build',
			precompress: true
		} ),

		vite: {
			plugins: [
				replaceCodePlugin( {
					replacements: [
						{
							from: "@UI:",
							to: "/OUI/",
						}
					]
				} ),
			],
			resolve: {
				alias: {
					$UI: path.resolve( '/src/components' ),
					$routes: path.resolve( '/src/routes' ),
				}
			}
		},

		prerender: {
			default: true
		}
	}
};