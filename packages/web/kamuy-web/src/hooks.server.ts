import type { Handle } from '@sveltejs/kit';
import { MONGODB_DATA_API_KEY } from '$env/static/private';
import { accessToken } from '$lib/stores';

export const handle = (async ({ event, resolve }) => {
	let token;
	accessToken.subscribe((value) => {
		token = value;
	});
	if (token === undefined) {
		const res = await fetch(
			'https://ap-southeast-1.aws.realm.mongodb.com/api/client/v2.0/app/data-gipvp/auth/providers/api-key/login',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: `{
                    "key": "${MONGODB_DATA_API_KEY}"
                }`
			}
		);
		const json = await res.json();
		// const json_string = JSON.stringify(json);
		// console.log("json_string:"+json_string);
		console.log('LOGIN finished. access_token is ' + json['access_token']);
		accessToken.set(json['access_token']);
	} else {
		accessToken.subscribe((value) => {
			console.log('Already LOGIN. access_token is ' + value);
		});
	}
	return await resolve(event);
}) satisfies Handle;
