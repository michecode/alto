const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      plants: allMongodbAltoDbPlants {
        edges {
          node {
            mongodb_id
          }
        }
      }
    }
  `)

  for (const { node } of data.plants.edges) {
    createPage({
      path: `/plants/${node.mongodb_id}/`,
      component: path.resolve('./src/components/Plant.js'),
      context: {
        id: node.mongodb_id,
      },
    })
  }
}