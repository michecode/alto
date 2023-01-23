import { useSanityClient } from 'astro-sanity';

// TODO: When you find a variant, map the variant's base article data into the variant itself
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
    searchCollection.push({
      slug: plant.slug,
      name: plant.name,
    });
    searchCollection.push({
      slug: plant.slug,
      name: plant.botanicalName,
    });
    plant.alternateNames.forEach((name) => {
      searchCollection.push({
        slug: plant.slug,
        name,
      });
    });
  });
  return searchCollection;
}

export async function getAllLearnArticles() {
  const query = `*[_type == 'learnArticle']{
    ...,
    "imageUrl": image.asset->url
  }`;
  const data: Article[] = await useSanityClient().fetch(query);
  return data;
}
