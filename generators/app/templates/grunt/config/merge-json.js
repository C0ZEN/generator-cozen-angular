/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file merge-json on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:35
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	merge: {
		files: [
			{
				expand : true,
				flatten: false,
				cwd    : '<%%= paths.app %%>',
				src    : [
					'**/*.json',
					'!config/targets/*.json',
					'!languages/min/*.json'
				],
				dest   : '.tmp/languages',
				rename(dest, src) {
					const lang = src.match(/[^/]+(?=\/[^/]+\.json$)/gim);
					const ext  = src.match(/[^/]+(.json$)/gim);
					return dest + '/' + lang + '/' + ext;
				}
			},
			{
				expand : true,
				flatten: false,
				cwd    : 'bower_components/altran-angular-lib/release/languages',
				src    : '*.json',
				dest   : '.tmp/languages',
				rename(dest, src) {
					const lang = src.replace('.min.json', '');
					const ext  = 'altran-angular-lib.json';
					return dest + '/' + lang + '/' + ext;
				}
			}
		]
	},
	min  : {
		files: {
			'<%%= paths.app %%>/languages/min/fr.min.json': [
				'.tmp/languages/fr/*.json'
			],
			'<%%= paths.app %%>/languages/min/en.min.json': [
				'.tmp/languages/en/*.json'
			]
		}
	}
};