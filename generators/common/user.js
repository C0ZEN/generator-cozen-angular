/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file user on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/12/2017
 * Time: 19:39
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const _ = require('lodash');

	module.exports = class User {
		static getUser($that) {
			return $that.user.git.name();
		}

		static getUserFirstname($that) {
			let user = this.getUser($that);

			/* istanbul ignore if */
			if (user) {
				user = user.split(' ');

				/* istanbul ignore if */
				if (1 < user.length) {
					return _.last(user);
				}
			}

			/* istanbul ignore next */
			return null;
		}

		static getUserLastname($that) {
			let user = this.getUser($that);
			if (user) {
				user = user.split(' ');
				user.pop();
				return user.join(' ');
			}

			/* istanbul ignore next */
			return null;
		}
	};

})();