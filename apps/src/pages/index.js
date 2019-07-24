import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default ({ data }) => {
    return (
        <div>
            <h1>Index page</h1>
            <h4>{data.allData.totalCount} Posts</h4>
            {data.allData.edges.map(({ node }) => (
                <div key={node.id}>
                    <h3>
                        {node.frontmatter.title} <span>—123</span>
                    </h3>
                </div>
            ))}
        </div>
    )
}
//https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/gatsby-node.js
export const query = graphql`
  {
    allPostsJson {
       id
       title
    }
  }
`
