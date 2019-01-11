import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Tag from '../components/Tag'
import Header from '../components/Header'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Header />
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
          
          {/* <div className="mailing-list">
            <span class="icon-at"></span>
            <div className="action">
              <p className="call-to-action">Keep in touch.</p>
              <p className="call-description">
                New posts in your email inbox.
              </p>
              <p className="call-description">
                No spam obviously.
              </p>
            </div>

            <form name="mailing-list" method="POST" className="action-form" data-netlify="true">
              <input type="hidden" name="form-name" value="mailing list" />
              <input name="email" className="action-email" placeholder="steve@apple.com" />
              <input className="action-submit" type="submit" value="Subscribe"></input>
            </form>
          </div> */}

          {/* <div className="footer">
            Built with Gatsby and hosted by Netlify.
          </div> */}
        </div>
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
