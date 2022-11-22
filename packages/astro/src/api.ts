import { useSanityClient } from 'astro-sanity';

export async function getAllPlants() {
  const query = `*[_type == 'plant']`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getPlant(slug: string) {
  const query = `*[slug == '${slug}']`;
  const data = await useSanityClient().fetch(query);
  return data;
}
