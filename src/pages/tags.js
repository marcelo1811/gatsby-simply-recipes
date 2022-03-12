import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
    <Layout>
      <main className="page">
        <section className="tags-wrapper">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(tag, { lower: true })
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
