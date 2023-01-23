// plant, array, text, boolean, datetime, date, document, email, file, geopoint, image,
// number, object, reference, crossDatasetReference, slug, string, telephone, text and url
export default {
  name: 'learnArticle',
  type: 'document',
	title: 'Learn Article',
  fields: [
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Lower cased version of this will be used as the /light/[slug].'
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro',
      description: 'Summary of the category before leading into specific parts.',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Article Image',
      description: 'Header image that will sit above text akin to a medium article.'
    },
    {
      name: 'imageAltText',
      type: 'string',
      title: 'Alt Text',
    },
    {
      name: 'sections',
      type: 'array',
      of: [{type: 'articleSection'}],
      title: 'Sections',
    },
  ]
}