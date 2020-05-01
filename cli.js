#! /usr/bin/env node

const argsFlagify = require('args-flagify');
const {default: acejax} = require('acejax');

const API_URL = 'https://find-my-ip.now.sh';

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
		const {body} = await acejax(endpoint || API_URL);
		console.info(body);
	} catch (error) {
		console.error('Unable to find your IP.');
	}
})(cli.flags.endpoint);
