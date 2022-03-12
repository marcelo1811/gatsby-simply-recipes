import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(({ id, title, image, prepTime, cookTime }) => {
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true });

        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              className="recipe-img"
              image={pathToImage}
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
