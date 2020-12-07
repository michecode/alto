require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`, 'gatsby-plugin-react-helmet',
{
  resolve: 'gatsby-source-mongodb',
  options: {
    dbName: 'alto_db',
    collection: 'plants',
    connectionString: process.env.GATSBY_ATLAS_CONNECTION_STRING,
    extraParams: {
      ssl: true,
      authSource: 'admin',
      retryWrites: true
    }
  }
}],
  
}
