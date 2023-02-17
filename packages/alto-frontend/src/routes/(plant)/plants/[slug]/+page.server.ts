import client from '$lib/utils/sanityClient';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

// getSearchCollection
export const load = (async ({ params }) => {
	const { slug } = params;
	const data = await client.fetch(`*[slug == '${slug}']{
    ...,
    "imageUrl": image.asset->url
  }`);

	if (!data) {
		throw error(400, 'No data check slug!');
	}

	return {
		plant: data.at(0) as Plant
	};
}) satisfies PageServerLoad;
