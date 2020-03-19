import React from "react"
import { Link, graphql } from "gatsby"
import Nav from "../components/nav"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "../styles/styles.css"
import "../styles/cmmchub.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <>

      <SEO title="CMMCHub" />

      

      <div className="hero" id="vantajs">
      <Nav />
        <div className="intro-text" data-sal="slide-up" data-sal-duration="800">
          <div className="div-block">
            <h1 className="headline">Our goal is to help you achieve cyber security best practices.</h1>
            <div className="text-block">CMMC is a huge initiative. We would like to simplify it by providing a community that can collaborate and help each other through it. Check out articles, events, or head over to the forum to join the conversation.</div>
          </div>
        </div>
      </div>

      

      {/*{posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <Link to={node.fields.slug}><img src={node.frontmatter.image}></img></Link>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title} ↗
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>

          
        )
      })} */}

      
      <div class="article-list" >

      {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article className="article-card" key={node.fields.slug}>
                    <a href={node.frontmatter.original} target="_blank"><img className="article-card-img" src={node.frontmatter.image} /></a>
                    <a href={node.frontmatter.original} target="_blank" className="article-card-headline">
                        <div data-sal="slide-up" data-sal-duration="800"><h1 class="article-card-headline">{title} ↗</h1></div>
                    </a>
                    <div data-sal="slide-up" data-sal-duration="800" className="article-date">{node.frontmatter.date}</div>
                    <p class="article-description" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">{node.frontmatter.description}</p>
                </article>
                
              )
            })}
        </div>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
            original
          }
        }
      }
    }
  }
`
