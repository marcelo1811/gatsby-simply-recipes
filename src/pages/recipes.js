import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"
const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
