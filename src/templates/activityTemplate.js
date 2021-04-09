import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ActivityCalendar from '../components/calendars/ActivityCalendar'
import NextMeeting from '../components/calendars/NextMeeting'
import { useCalendar } from '../hooks/useCalendar'




export default function ActivityTemplate({ data, ...props }) {
  console.log('rendered: activityPage')

  const a = data.allWpActivity.nodes[0] // Activity
  const calendar = useCalendar(50, a.title)
  const nextMeeting = calendar.length > 0 ? calendar[0] : null

  const featuredImage = getImage(a.featuredImage?.node.localFile)

  return (
    <article>
      <h1>{a.title}</h1>

      { featuredImage && <GatsbyImage image={featuredImage} alt={a.title} /> }

      <section>
        <div dangerouslySetInnerHTML={{ __html: a.activityInformation.description }} />
      </section>

      <section>
        <NextMeeting activity={a} nextMeeting={nextMeeting} />
        <ActivityCalendar activity={a} calendar={calendar}/>
      </section>

    </article>
  )
}
export const query = graphql`
  query($id: String!) {
    allWpActivity(filter: { id: { eq: $id } }) {
      nodes {
        status
        slug
        uri
        id
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
        activityMetadata {
          activityType
          contactEmail
          contactName
          contactNumber
          duration
          featuredActivity
          fieldGroupName
          price
          when
          bookingInstructions
          bookingLink
          space {
            ... on WpSpace {
              id
              slug
              title
              link
              spaceMetadata {
                floor
              }
              spaceInformation {
                tagline
              }
            }
          }
          links {
            link1 {
              link1name
              link1url
            }
            link2 {
              link2name
              link2url
            }
            link3 {
              link3name
              link3url
            }
          }
        }
        activityInformation {
          description
          tagline
        }
        title
        categories {
          nodes {
            slug
            uri
            name
          }
        }
      }
    }
  }
`
