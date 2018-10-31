import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="grid-container">
          <p class="section-title">Featured</p>

          {
            posts.slice(0, 1).map(({node: post}) => (
              <Link to={post.fields.slug} class="post primary" style={{ backgroundImage: `url('${post.frontmatter.featuredImage}')` }}>
                <div class="content">
                  <p className="post-timestamp">{ post.frontmatter.date }</p>
                  <p className="post-title">{ post.frontmatter.title }</p>
                </div>
              </Link>
            ))
          }

          {
            posts.slice(1, 3).map(({node: post}) => (
              <div class="post secondary" style={{ backgroundImage: `url('${post.frontmatter.featuredImage}')` }}>
                <div class="content">
                  <p className="post-timestamp">{ post.frontmatter.date }</p>
                  <p className="post-title">{ post.frontmatter.title }</p>
                </div>
              </div>
            ))
          }

          { posts.slice(3,posts.length).length > 0 && <p class="section-title">Previously</p> }

          {
            posts.slice(3, posts.length).map(({node: post}) => (
              <div class="post" style={{ backgroundImage: `url('${post.frontmatter.featuredImage}')` }}>
                <div class="content">
                  <p className="post-timestamp">{ post.frontmatter.date }</p>
                  <p className="post-title">{ post.frontmatter.title }</p>
                </div>
              </div>
            ))
          }
        </div>

        {/* <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section> */}
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
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            featuredImage
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
