module.exports = {
  siteMetadata: {
    title: `InputOn`,
    siteUrl: `https://www.inputon.com.br`,
    description: `Renove seus conhecimentos.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#333`,
      },
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-60Q6W13W6J",
      },
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
