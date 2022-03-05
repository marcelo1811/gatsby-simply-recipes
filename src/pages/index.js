import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../examples/button"
import * as styles from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <ExampleButton>click me</ExampleButton>
      <div className={styles.page}>
        <h1>Hello from home!</h1>
        <p>asdfadsfs</p>
      </div>
    </Layout>
  )
}
