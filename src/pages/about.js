import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import PageSection from '../components/PageSection'

const AboutPage = ({data}) => {
  console.log('rendered About')

  return (
    <article>
      <Seo title="About the MMI" />
      <h1>About the MMI</h1>
      <PageSection section={data.about} />
      <PageSection section={data.history} />
    </article>
  )
}

export default AboutPage

export const query = graphql`
  query {
    about: wpPage(title: {eq: "About"}) {
        title
        content
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
    }
    history: wpPage(title: {eq: "History"}) {
      title
      content
      slug
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`