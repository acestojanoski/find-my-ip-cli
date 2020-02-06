#! /usr/bin/env node

import meow from 'meow';
import executeAsync from './execute-async';

const cli = meow(
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
		flags: {
			endpoint: {
				type: 'string',
				alias: 'e',
			},
		},
	}
);

executeAsync(cli.flags.endpoint);
