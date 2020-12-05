/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`,
{
  resolve: 'gatsby-source-mongodb',
  options: {
    dbName: 'alto_db',
    collection: ['plants', 'libraryplants'],
    connectionString: 'mongodb+srv://maddy:HvWH8SBF5nBymQLm@cluster0.dcxjt.mongodb.net',
    extraParams: {
      ssl: true,
      authSource: 'admin',
      retryWrites: true
    }
  }
}],
  
}
