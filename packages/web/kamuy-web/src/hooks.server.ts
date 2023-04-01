import { get } from 'svelte/store';
import type { Handle } from '@sveltejs/kit';
import { MONGODB_DATA_API_KEY } from '$env/static/private';
import { accessToken } from '$lib/stores';

export const handle = (async ({ event, resolve }) => {
	let token = get(accessToken);
	console.log('access_token: ' + token);
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
		token = json['access_token'];
		accessToken.set(token);
		console.log('LOGIN finished. access_token: ' + token);
	}
	// event.setHeaders({Authorization: `Bearer ${token}`});
	return await resolve(event);
}) satisfies Handle;
