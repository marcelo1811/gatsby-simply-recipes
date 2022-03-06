import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Images = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/about.jpeg" alt="food" />
      <h2>gatsby image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`
export default Images
