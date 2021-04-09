import React from "react"
import { graphql } from "gatsby"
import Activity from '../components/Activity'

export default function EventsPage({ data }) {
  const activities = data.allWpActivity.nodes

  return (
    <article>
      <section>
        { activities.map(g => <Activity key={g.id} activity={g} /> )  }
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
        uri
        id
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