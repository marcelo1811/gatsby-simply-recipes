import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import * as styles from "../examples/about.module.css"

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>About page</h1>
        <p className={styles.text}>asdfasdfasdf afasdfasdfs</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: yellow;
  }

  .text {
    text-transform: capitalize;
  }
`

export default About
