const path = require('path')
const { default: slugify } = require('slugify')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    const { content } = recipe
    const { tags } = content

    tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag,
        },
      })
    })
  })
}