/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file colors on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 15:51
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const colors = {
		orange  : '#e67e22',
		red     : '#e74c3c',
		blue    : '#3498db',
		cyan    : '#1abc9c',
		green   : '#2ecc71',
		grey    : '#bdc3c7',
		darkGrey: '#7f8c8d',
		white   : '#ecf0f1',
		navy    : '#2c3e50',
		purple  : '#9b59b6'
	};

	module.exports = class Colors {
		static get($name) {
			return colors[$name];
		}
	};

})();
