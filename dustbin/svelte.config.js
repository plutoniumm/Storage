import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';
import path from 'path';

export default {
	preprocess: sveltePreprocess( {
		defaults: { markup: 'html', script: 'javascript', style: 'css' },
		sourceMap: false
	} ),
	kit: {
		adapter: statix(),

		target: 'body',
		vite: {
			resolve: {
				alias: {
					$pages: path.resolve( 'src/pages' ),
					$data: path.resolve( 'src/data' ),
					$components: path.resolve( 'src/components' ),
					$routes: path.resolve( 'src/routes' )
				}
			}
		},
		appDir: 'internal'
	}
}
