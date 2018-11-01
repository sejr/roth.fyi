import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import avatar from '../images/sam.png'
import avatarPreview from '../images/sam.preview.png'
import ProgressiveImage from 'react-progressive-image-loading'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="header">
          <ProgressiveImage preview={avatarPreview} src={avatar} render={(src, style) => 
            <img className="avatar" alt="Sam Roth avatar" src={src} style={style} />
          }/>
          <h1 className="name">Samuel Roth</h1>
          <p className="description">Software Engineer</p>
          <div className="icons">
            <a href="https://www.twitter.com/sjroot"><i className="icon icon-twitter"></i></a>
            <a href="https://www.github.com/sejr"><i className="icon icon-github"></i></a>
            <a href="https://www.linkedin.com/in/samuelroth1"><i className="icon icon-linkedin"></i></a>
          </div>
        </div>
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
              <Link to={post.fields.slug}  class="post secondary" style={{ backgroundImage: `url('${post.frontmatter.featuredImage}')` }}>
                <div class="content">
                  <p className="post-timestamp">{ post.frontmatter.date }</p>
                  <p className="post-title">{ post.frontmatter.title }</p>
                </div>
              </Link>
            ))
          }

          { posts.slice(3,posts.length).length > 0 && <p class="section-title">Previously</p> }

          {
            posts.slice(3, posts.length).map(({node: post}) => (
              <Link to={post.fields.slug}  class="post" style={{ backgroundImage: `url('${post.frontmatter.featuredImage}')` }}>
                <div class="content">
                  <p className="post-timestamp">{ post.frontmatter.date }</p>
                  <p className="post-title">{ post.frontmatter.title }</p>
                </div>
              </Link>
            ))
          }
          
          <div className="mailing-list">
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
          </div>
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
