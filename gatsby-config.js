/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recupes site",
    author: "@marelomiyachi",
    person: {
      name: "Marcelo",
      age: 24,
    },
    simpleData: ["item 1", "item 1"],
    complexData: [
      { name: "marcelo", age: 24 },
      { name: "julia", age: 24 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `isilakx1pget`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
