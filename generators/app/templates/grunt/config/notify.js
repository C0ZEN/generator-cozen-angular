/**
 <%- include('../../../../common/partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = {
	test      : {
		options: {
			title  : '\'TEST\'',
			message: 'This is just a test !'
		}
	},
	serve     : {
		options: {
			title  : '\'SERVE\'',
			message: 'Task complete ! Enjoy the app !'
		}
	},
	release   : {
		options: {
			title  : '\'RELEASE\'',
			message: 'Task complete !'
		}
	},
	buildReady: {
		options: {
			title  : '\'BUILD READY\'',
			message: 'The last build was successful ! You can now refresh your browser.'
		}
	},
	less      : {
		options: {
			title  : '\'LESS UPDATED\'',
			message: 'LESS files are now updated'
		}
	}
};