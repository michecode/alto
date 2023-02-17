import client from '$lib/utils/sanityClient';
import type { LayoutServerLoad } from './$types';

// getSearchCollection
export const load = (async () => {
	const searchData = await client.fetch(`*[_type == 'plant']`);

	if (searchData) {
		const searchCollection: SearchCollection = [];
		searchData.forEach((plant: Plant) => {
			searchCollection.push({
				slug: plant.slug,
				name: plant.name
			});
			searchCollection.push({
				slug: plant.slug,
				name: plant.botanicalName
			});
			plant.alternateNames.forEach((name) => {
				searchCollection.push({
					slug: plant.slug,
					name
				});
			});
		});
		return {
			searchCollection
		};
	}
	return {
		status: 500,
		body: new Error('Interal Server Error - /plants/[slug]/+layout.ts root path')
	};
}) satisfies LayoutServerLoad;
