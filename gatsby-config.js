module.exports = {
  siteMetadata: {
    site: 'portfolio-site',
    title: 'Pat Jacobs | Web Engineer',
    titleTemplate: '%s | Pat Jacobs | Web Engineer',
    description: 'Portolfio site for Pat Jacobs, Full-stack Web Engineer',
    siteUrl: 'https://www.patjacobs.com',
    language: 'en',
    color: '#1e1e1e',
    twitter: 'jatpacobs',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        families: ['Futura', 'Inconsolata'],
        urls: ['fonts.css'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pat Jacobs | Web Engineer',
        short_name: 'patjacobs.com',
        start_url: '/',
        background_color: '#1e1e1e',
        theme_color: '#32D2C9',
        display: 'standalone',
        icon: 'src/assets/icons/logo.png',
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: process.env.GCMS_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.GCMS_TOKEN}`,
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        codegen: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-rollbar',
      options: {
        accessToken: process.env.ROLLBAR_CLIENT_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: 'production',
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve('./src/layout/index.tsx'),
      },
    },
  ],
};
