/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from 'svelte/store';
import { accessToken } from '$lib/stores';

export async function mongodb(fetch: any, body: string): Promise<Request> {
	return fetch(
		'https://ap-southeast-1.aws.realm.mongodb.com/api/client/v2.0/app/data-gipvp/graphql',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${get(accessToken)}`,
				'Content-Type': 'application/json'
			},
			body: body
		}
	);
}
