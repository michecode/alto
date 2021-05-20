require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: 'alto_db',
        collection: 'plants',
        connectionString: process.env.GATSBY_ATLAS_CONNECTION_STRING,
        extraParams: {
          ssl: true,
          authSource: 'admin',
          retryWrites: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#fffde7`,
        theme_color: `#111621`,
        display: `standalone`,
        icon: `assets/alto-logo.png`,
      },
    },
  ],
};
