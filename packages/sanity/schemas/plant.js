// plant, array, text, boolean, datetime, date, document, email, file, geopoint, image,
// number, object, reference, crossDatasetReference, slug, string, telephone, text and url

export default {
  name: 'plant',
  type: 'document',
	title: 'Plant',
  fieldsets: [
    {name: 'headerData', title: 'Header'},
    {name: 'peekData', title: 'Peek'},
    {name: 'articleData', title: 'Article'}
  ],
  fields: [
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // HEADER
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      fieldset: 'headerData'
    },
    {
      name: 'botanicalName',
      type: 'string',
      title: 'Botanical Name',
      fieldset: 'headerData'
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
      fieldset: 'headerData',
      description: 'Usually the same as the botanical name but with lowercase and a dash instead of spaces',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fieldset: 'headerData'
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
      fieldset: 'headerData'
    },
    {
      name: 'variant',
      type: 'boolean',
      title: 'Variant',
      description: 'If true, this plant is a variant and will fetch the article data from the slug defined above',
      fieldset: 'headerData'
    },
    {
      name: 'alternateNames',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Alternate Names',
      fieldset: 'headerData'
    },
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // PEEK
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
      name: 'difficulty',
      type: 'number',
      title: 'Difficulty',
      description: 'Range: 1-5. Number 5 being the hardest',
      initialValue: 1,
      fieldset: 'peekData',
    },
    {
      name: 'lightBar',
      type: 'number',
      title: 'Light',
      description: 'Range: 1-5. Number 5 being the most sun thirsty',
      fieldset: 'peekData',
    },
    {
      name: 'waterBar',
      type: 'number',
      title: 'Water',
      description: 'Range: 1-5. Number 5 being the most water thirsty',
      fieldset: 'peekData',
    },
    {
      name: 'toxicity',
      type: 'boolean',
      title: 'Toxicity',
      description: 'Range: true or false',
      fieldset: 'peekData',
    },
    {
      name: 'classification',
      type: 'string',
      title: 'Classification',
      description: 'Possible options: Succulent, Cacti, Calathea, Palm...',
      fieldset: 'peekData',
    },
    {
      name: 'zones',
      type: 'array',
      of: [{type: 'number'}],
      title: 'Zones',
      description: 'Number one is the low value, number two is the high value',
      fieldset: 'peekData',
    },
    {
      name: 'temperatures',
      type: 'array',
      of: [{type: 'number'}],
      title: 'Temperature Range',
      description: 'Number one is the cold value, number two is the hot value',
      fieldset: 'peekData',
    },
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ARTICLE
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
      name: 'light',
      type: 'text',
      title: 'Light',
      fieldset: 'articleData',
    },
    {
      name: 'water',
      type: 'text',
      title: 'Water',
      fieldset: 'articleData',
    },
    {
      name: 'humidity',
      type: 'text',
      title: 'Humidity',
      fieldset: 'articleData',
    },
    {
      name: 'fertilizing',
      type: 'text',
      title: 'Fertilizing',
      fieldset: 'articleData',
    },
    {
      name: 'pests',
      type: 'text',
      title: 'Pests',
      fieldset: 'articleData',
    },
    {
      name: 'pruning',
      type: 'text',
      title: 'Pruning',
      fieldset: 'articleData',
    },
    {
      name: 'propagation',
      type: 'text',
      title: 'Propagation',
      fieldset: 'articleData',
    },
    {
      name: 'repotting',
      type: 'text',
      title: 'Repotting',
      fieldset: 'articleData',
    },
  ]
}