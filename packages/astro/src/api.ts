import { useSanityClient } from 'astro-sanity';

export async function getAllPlants() {
  const query = `*[_type == 'plant']`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getPlant(botanical: string) {
  const query = `*[botanical_name == '${botanical}']`;
  const data = await useSanityClient().fetch(query);
  return data;
}
