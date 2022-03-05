import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import * as styles from "../examples/about.module.css"

const About = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>About page</h1>
        <p className={styles.text}>asdfasdfasdf afasdfasdfs</p>
      </div>
    </Layout>
  )
}

export default About
