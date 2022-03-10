import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Gallery = () => {
  const data = useStaticQuery(query)
  return <div>Gallery</div>
}

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`

export default Gallery
