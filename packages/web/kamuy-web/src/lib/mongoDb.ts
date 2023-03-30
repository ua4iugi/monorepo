import { get } from 'svelte/store';
import { accessToken } from '$lib/stores';

export async function mongoDb(body: string) {
	const token = get(accessToken);
	return fetch(
		'https://ap-southeast-1.aws.realm.mongodb.com/api/client/v2.0/app/data-gipvp/graphql',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: body
		}
	);
}
