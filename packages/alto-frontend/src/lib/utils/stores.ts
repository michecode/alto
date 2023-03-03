import { writable } from 'svelte/store';

export const filters = writable({
	classification: {
		palm: false,
		succulent: false,
		cactus: false,
		calathea: false,
		tree: false,
		orchid: false
	},
	difficulty: 'All',
	light: {
		low: false,
		indirect: false,
		direct: false
	},
	water: {
		dry: false,
		balanced: false,
		wet: false
	},
	toxic: {
		petFriendly: false
	}
} as Filters);
