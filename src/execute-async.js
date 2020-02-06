import got from 'got';

const API_URL = 'https://find-my-ip.herokuapp.com';

export default async endpoint => {
	try {
		const result = await got(endpoint || API_URL);

		if (!endpoint) {
			console.log(JSON.parse(result.body)['ip']);
		} else {
			console.log(result.body);
		}
	} catch (error) {
		console.log('Unable to find your IP.');
	}
};
