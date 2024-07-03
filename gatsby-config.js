/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Frontend Things`,
    description: `Front End Developer located in San Jose Ca Bay Area, passionate about transforming ideas into reality through coding, thanks for stopping by!`,
    author: 'gilbert haro',
    siteUrl: `https://gilbertaharo.com`,
    logo: `.gah`,
    person: { name: 'gilbert', age: 28 },
    simpleData: ['gatsby', 'theme ui'],
    complexData: [
      { name: 'gilbert haro', age: 29 },
      { name: 'gilberto a haro', age: 29 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rpilh1nqkh8b`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat', // 'font-family' property
              variants: ['300', '400', '500'],
            },
            {
              family: 'Inconsolata',
              variants: ['400', '500', '700'],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
