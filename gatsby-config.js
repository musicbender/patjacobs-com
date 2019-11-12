const path = require('path')

module.exports = {
  siteMetadata: {
    site: `portfolio-site`,
    title: `Pat Jacobs | Web Engineer`,
    titleTemplate: `%s | Pat Jacobs | Web Engineer`,
    description: `Portolfio site for Pat Jacobs, Full-stack Web Engineer`,
    siteUrl: `https://www.patjacobs.io`,
    language: `en`,
    color: `#003580`,
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
        name: `Gnonce`,
        short_name: `Gnonce`,
        start_url: `/`,
        background_color: `#003580`,
        theme_color: `#003580`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
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
