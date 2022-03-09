/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
  ],
}
