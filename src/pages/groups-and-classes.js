import React from "react"
import { graphql } from "gatsby"
import Activity from '../components/Activity'

export default function GroupsPage({ data }) {
  const activities = data.allWpActivity.nodes
  const groups = activities.filter(activity => {
    return (activity.activityMetadata.activityType === 'Group' || activity.activityMetadata.activityType === 'Class')
  })

  console.log('rendered Groups and Classes')

  return (
    <article>
      <section>
        {
          groups.map(group => <Activity key={group.id} activity={group} />)
        }
      </section>
    </article>
  )
}
export const query = graphql`
  query {
    allWpActivity {
      nodes {
        status
        slug
        id
        uri
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