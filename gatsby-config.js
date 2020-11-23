/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require ('./config/metadata');
const googleAnalytics = require ('./config/googleanalytics');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#333`,
      },
    },
    googleAnalytics,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `InputOn`,
        short_name: `InputOn`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#F2F2F2`,
        display: `standalone`,
        icon: `src/assets/img/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.inputon.com.br`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options:{
        displayName: process.env.NODE_ENV !== 'production',
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`]
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
