import { createClient } from '@sanity/client';

const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	// dataset: import.meta.env.DEV ? 'staging' : 'production',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true
});

export default client;
