/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file connect on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 21:13
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	options   : {
		port      : 9889,
		hostname  : 'localhost',
		livereload: 35789
	},
	livereload: {
		options: {
			open: true,
			middleware(connect) {
				return [
					connect.static('.tmp'),
					connect().use(
						'/bower_components',
						connect.static('./bower_components')
					),
					connect().use(
						'/app/styles',
						connect.static('./app/styles')
					),
					connect.static('app')
				];
			}
		}
	},
	test      : {
		options: {
			port: 9001,
			middleware(connect) {
				return [
					connect.static('.tmp'),
					connect.static('test'),
					connect().use(
						'/bower_components',
						connect.static('./bower_components')
					),
					connect.static('app')
				];
			}
		}
	}
};