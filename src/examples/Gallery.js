import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { nin: ["svg", "ico"] } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: false }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`
export default Gallery
