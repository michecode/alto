import client from '$lib/utils/sanityClient';
import type { PageServerLoad } from './$types';

// getSearchCollection
export const load = (async () => {
	const data = await client.fetch(`*[_type == 'plant']{
    ...,
    "imageUrl": image.asset->url
  }`);

	if (data) {
		return {
			plants: data
		};
	}
	return {
		status: 500,
		body: new Error('Interal Server Error - /plants/+page.server.ts')
	};
}) satisfies PageServerLoad;
