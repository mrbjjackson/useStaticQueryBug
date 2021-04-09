import React from "react"
import { graphql } from "gatsby"
import Space from '../components/Space'

export default function SpacePage({ data }) {
  const spaces = data.allWpSpace.nodes

  return (
    <article>
      <section>
        { spaces.map(space => <Space key={space.id} space={space} /> )  }
      </section>
    </article>
  )
}
export const query = graphql`
  query {
    allWpSpace(filter: {spaceMetadata: {showOnSite: {eq: true}}}) {
      nodes {
        spaceInformation {
          tagline
        }
        id
        uri
        title
        spaceMetadata {
          calendarId
          floor
          showOnSite
          size
          price
          capacity
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`