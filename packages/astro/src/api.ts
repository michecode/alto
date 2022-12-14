import { useSanityClient } from 'astro-sanity';

export async function getAllPlants() {
  const query = `*[_type == 'plant']{
    ...,
    "imageUrl": image.asset->url
  }`;
  const data: Plant[] = await useSanityClient().fetch(query);
  return data;
}

export async function getPlant(slug: string) {
  const query = `*[slug == '${slug}']`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getSearchCollection() {
  // Get all plants
  const query = `*[_type == 'plant']`;
  const data = await useSanityClient().fetch(query);
  // Process
  const searchCollection: SearchCollection = [];
  data.forEach((plant: Plant) => {
    plant.alternate_names.forEach((name) => {
      searchCollection.push({
        slug: plant.slug,
        name,
      });
    });
  });
  return searchCollection;
}
