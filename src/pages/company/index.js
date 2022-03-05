import { Link } from "gatsby"
import React from "react"

const Company = () => {
  return (
    <div>
      <h1>Hello from company</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <a href="https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md">
        react es7 snippets
      </a>
    </div>
  )
}

export default Company
