import React from "react"
import Layout from "../components/Layout"
import * as styles from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Hello from home!</h1>
        <p>asdfadsfs</p>
      </div>
    </Layout>
  )
}
