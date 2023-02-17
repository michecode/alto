import client from '$lib/utils/sanityClient';
import type { PageServerLoad } from './$types';

// getSearchCollection
export const load = (async () => {
	const data = await client.fetch(`*[_type == 'plant']`);

	if (data) {
		const searchCollection: SearchCollection = [];
		data.forEach((plant: Plant) => {
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
		body: new Error('Interal Server Error - +page.ts root path')
	};
}) satisfies PageServerLoad;
