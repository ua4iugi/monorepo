import type { PageLoad } from './$types';
import { accessToken } from '$lib/stores';

export const load = (async ({ fetch }) => {
	let token;
	accessToken.subscribe((value) => {
		token = value;
	});
	console.log('before fetch. token is '+token);
	const res = await fetch(
		'https://ap-southeast-1.aws.realm.mongodb.com/api/client/v2.0/app/data-gipvp/graphql',
		{
			method: 'POST',
			headers: {
				"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjQyM2EwYzhmZTNiZjNhM2NhMmQzYTMwIiwiZXhwIjoxNjgwMTkyODE5LCJpYXQiOjE2ODAxOTEwMTksImlzcyI6IjY0MjVhZTJiZDliYmE0NjAxOWFjOGMyZiIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY0MjNhMGM4ZmUzYmYzYTNjYTJkM2EzMCIsInN1YiI6IjY0MjNhMGZlZGI2MTg4Y2ZhNDUzOGZmOCIsInR5cCI6ImFjY2VzcyJ9.rNDOIXPTS70VlT6cKZgaHOJRsXq9W3H3BElMcxTG7fY",
				"Content-Type": "application/json"
			},
			body: `{
				"query": "query user { user { _id email name} }"
			}`
		}
	);
	const json = await res.json();
	return { user: json['data']['user'] };
}) satisfies PageLoad;
