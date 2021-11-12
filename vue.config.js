const isProduction = process.env.NODE_ENV === 'production';
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
	publicPath: './',
	transpileDependencies: ['vuetify'],
	configureWebpack: {
		externals: {
			vue: 'Vue',
		},

		// Merged into the final Webpack config
		plugins: [
			new PurgecssPlugin({
				paths: glob.sync(
					[path.join(__dirname, './src/**/*.js'), path.join(__dirname, './src/**/*.vue')],
					{ nodir: true },
				),
				safelist: [
					/-(leave|enter|appear)(|-(to|from|active))$/,
					/^(?!(|.*?:)cursor-move).+-move$/,
					/^router-link(|-exact)-active$/,
					/data-v-.*/,
					/class/,
				],
			}),
		],
	},
};
