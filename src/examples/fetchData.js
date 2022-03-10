import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  query {
    site(
      siteMetadata: {
        complexData: {}
        description: {}
        simpleData: {}
        author: {}
      }
    ) {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>hello from fetch data</h1> */}
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData
