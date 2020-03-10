#! /usr/bin/env node

const argsFlagify = require('args-flagify');
const {default: acejax} = require('acejax');

const API_URL = 'https://find-my-ip.herokuapp.com';

const cli = argsFlagify(
	`
	Usage
	  $ find-my-ip

	Options:
	  --endpoint, -e  Use your own endpoint to find your IP

	Examples
	  $ find-my-ip
	  $ find-my-ip -e <your_endpoint>
	  $ find-my-ip --endpoint <your_endpoint>
`,
	{
		endpoint: {
			type: 'string',
			alias: 'e',
		},
	}
);

(async endpoint => {
	try {
		const {body} = await acejax(endpoint || API_URL, {
			json: !endpoint,
		});

		console.log(body.ip || body);
	} catch (error) {
		console.log('Unable to find your IP.');
	}
})(cli.flags.endpoint);
