const path = require('path')

module.exports = {
  siteMetadata: {
    site: `portfolio-site`,
    title: `Pat Jacobs | Web Engineer`,
    titleTemplate: `%s | Pat Jacobs | Web Engineer`,
    description: `Portolfio site for Pat Jacobs, Full-stack Web Engineer`,
    siteUrl: `https://www.patjacobs.io`,
    language: `en`,
    color: `#000`,
    twitter: 'jatpacobs',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pat Jacobs | Web Engineer`,
        short_name: `patjacobs.io`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/assets/icons/logo.png`, 
        include_favicon: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.ts`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
