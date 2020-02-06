#! /usr/bin/env node

const got = require('got');

const API_URL = 'https://find-my-ip.herokuapp.com';

(async () => {
	try {
		const {body} = await got(API_URL);
		console.log(JSON.parse(body)['ip']);
	} catch (error) {
		console.log('Unable to find your IP.');
	}
})();
