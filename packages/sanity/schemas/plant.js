// plant, array, text, boolean, datetime, date, document, email, file, geopoint, image,
// number, object, reference, crossDatasetReference, slug, string, telephone, text and url

export default {
  name: 'plant',
  type: 'document',
	title: 'Plant',
  fieldsets: [
    {name: 'header-data', title: 'Header'},
    {name: 'peek-data', title: 'Peek'},
    {name: 'article-data', title: 'Article'}
  ],
  fields: [
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // HEADER
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      fieldset: 'header-data'
    },
    {
      name: 'botanical_name',
      type: 'string',
      title: 'Botanical Name',
      fieldset: 'header-data'
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
      fieldset: 'header-data',
      description: 'Usually the same as the botanical name but with lowercase and a dash instead of spaces',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fieldset: 'header-data'
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
      fieldset: 'header-data'
    },
    {
      name: 'variant',
      type: 'string',
      title: 'Variant',
      description: 'This will map a plant variant to another e.g. Ruby Red Ficus to Standard Ficus',
      fieldset: 'header-data'
    },
    {
      name: 'alternate_names',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Alternate Names',
      fieldset: 'header-data'
    },
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // PEEK
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
      name: 'difficulty_peek',
      type: 'number',
      title: 'Difficulty Peek',
      description: 'Range: 1-5',
      initialValue: 1,
      fieldset: 'peek-data',
    },
    {
      name: 'light_peek',
      type: 'number',
      title: 'Light Peek',
      description: 'Range: 1-5',
      fieldset: 'peek-data',
    },
    {
      name: 'water_peek',
      type: 'number',
      title: 'Water Peek',
      description: 'Range: 1-5',
      fieldset: 'peek-data',
    },
    {
      name: 'toxic_peek',
      type: 'boolean',
      title: 'Toxic Peek',
      description: 'Range: true or false',
      fieldset: 'peek-data',
    },
    {
      name: 'class_peek',
      type: 'string',
      title: 'Classification Peek',
      description: 'Possible options: Succulent, Cacti, Calathea, Palm...',
      fieldset: 'peek-data',
    },
    {
      name: 'zone_peek',
      type: 'array',
      of: [{type: 'number'}],
      title: 'Zones',
      description: 'Number one is the low value, number two is the high value',
      fieldset: 'peek-data',
    },
    {
      name: 'temp_peek',
      type: 'array',
      of: [{type: 'number'}],
      title: 'Temperature Range',
      description: 'Number one is the cold value, number two is the hot value',
      fieldset: 'peek-data',
    },
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ARTICLE
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
      name: 'light',
      type: 'text',
      title: 'Light',
      fieldset: 'article-data',
    },
    {
      name: 'water',
      type: 'text',
      title: 'Water',
      fieldset: 'article-data',
    },
    {
      name: 'humidity',
      type: 'text',
      title: 'Humidity',
      fieldset: 'article-data',
    },
    {
      name: 'fertilizing',
      type: 'text',
      title: 'Fertilizing',
      fieldset: 'article-data',
    },
    {
      name: 'pests',
      type: 'text',
      title: 'Pests',
      fieldset: 'article-data',
    },
    {
      name: 'pruning',
      type: 'text',
      title: 'Pruning',
      fieldset: 'article-data',
    },
    {
      name: 'propagation',
      type: 'text',
      title: 'Propagation',
      fieldset: 'article-data',
    },
    {
      name: 'repotting',
      type: 'text',
      title: 'Repotting',
      fieldset: 'article-data',
    },
  ]
}