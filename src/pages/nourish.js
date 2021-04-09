import { graphql } from "gatsby"
import * as React from "react"
import PageSection from "../components/PageSection"
import Seo from "../components/seo"

const NourishPage = ({data}) => (
<article>
  <Seo title="Nourish - the MMI Café" />
  <h1>Nourish</h1>
  <h3>The MMI Café</h3>
  <PageSection section={data.nourish} showTitle={false} />
</article>
)

export default NourishPage

export const query = graphql`
  query {
    nourish: wpPage(title: {eq: "Nourish"}) {
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