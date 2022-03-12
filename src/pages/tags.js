import { graphql, Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
    <Layout>
      <SEO title='Tags' />
      <main className="page">
        <section className="tags-wrapper">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className='tag'>
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>

      </main>
      <h1>Tags page</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
