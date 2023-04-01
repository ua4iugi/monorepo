import type { PageServerLoad } from './$types';
import { mongodb } from '$lib/server/mongodb';

export const load = (async ({fetch}) => {
	const res = await mongodb(fetch, `{
		"query": "query { user { _id email name} }"
	}`);
	return { user: (await res.json())['data']['user'] };
}) satisfies PageServerLoad;
