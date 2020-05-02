import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <Layout>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <div>{Posts}</div>
  </Layout>
}

export default IndexPage

export const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export const pageQuery = graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
    }
`
