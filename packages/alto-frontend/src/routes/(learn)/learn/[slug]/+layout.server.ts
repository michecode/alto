import client from '$lib/utils/sanityClient';
import type { LayoutServerLoad } from './$types';

// getSearchCollection
export const load = (async () => {
	const data = await client.fetch(`*[_type == 'learnArticle']{
    ...,
    "imageUrl": image.asset->url
  }`);

	if (data) {
		return {
			articles: data
		};
	}
	return {
		status: 500,
		body: new Error('Interal Server Error - /plants/[slug]/+layout.ts root path')
	};
}) satisfies LayoutServerLoad;
