export default {
  name: 'articleSection',
  type: 'object',
  title: 'Article Section',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Section Header'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
    }
  ]
}