import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Tag from '../components/Tag'
import Header from '../components/Header'
import Container from '../components/Container'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Header />
        <Container>
          <div className="grid-container">
            {
              posts.map(({node: post}) => (
                <Link to={post.fields.slug}  className="post">
                  <div className="content">
                    <p className="post-timestamp">{ post.frontmatter.date }</p>
                    <p className="post-title">{ post.frontmatter.title }</p>
                    <div className="tag-list">
                      {
                        post.frontmatter.tags.map(tag => <Tag name={tag} />)
                      }
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </Container>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: { 
          templateKey: { eq: "blog-post" }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            featuredImage
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
