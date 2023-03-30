import type { PageServerLoad } from './$types';
import { mongoDb } from '$lib/mongoDb';

export const load = (async () => {
	const res = await mongoDb(`{
		"query": "query { user { _id email name} }"
	}`);
	return { user: (await res.json())['data']['user'] };
}) satisfies PageServerLoad;
