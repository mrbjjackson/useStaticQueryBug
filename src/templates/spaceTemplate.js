import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { spacePageHolder } from "./styles/spacePage.module.scss"
import SpaceCalendar from '../components/calendars/SpaceCalendar'
import { prependSpaceTitle, capitalize } from '../components/SpaceTitle'

export default function SpaceTemplate({ data }) {
  console.log('rendered spacePage')

  const s = data.allWpSpace.nodes[0]
  const calendar = data.allCalendarEvent?.nodes
  const spaceName = prependSpaceTitle(s.title, s.spaceMetadata.prepend)

  const featuredImage = getImage(s.featuredImage?.node.localFile)
  return (
    <article className={spacePageHolder}>
      <h1>{capitalize(spaceName)}</h1>
      <section>
        { featuredImage && <GatsbyImage image={featuredImage} alt={capitalize(spaceName)} /> }
        <div dangerouslySetInnerHTML={{ __html: s.spaceInformation.description }} />
      </section>
      
      { calendar.length > 0 &&
        <section>
          <SpaceCalendar calendar={calendar} spaceName={spaceName}/>
        </section>
      }
    </article>
  )
}
export const query = graphql`
  query($id: String!, $calendarId: String!) { 
    allWpSpace(filter: { id: { eq: $id } }) {
      nodes {
        spaceInformation {
          description
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
          prepend
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
    allCalendarEvent(filter: {organizer: {email: {eq: $calendarId}}}) {
      nodes {
        organizer {
          displayName
          self
          email
        }
        id
        summary
        start {
          dateTime
        }
        end {
          dateTime
        }
        description
      }
    }
  }
`