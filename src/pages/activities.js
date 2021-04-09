import React from "react"
import { graphql } from "gatsby"
import Activity from '../components/Activity'

export default function ActivitiesPage({ data }) {
  const activities = data.allDataJson.nodes[0].activities.nodes

  console.log('Rendered Activities page')
  return (
    <article>
      <section>
        { activities.map(a => <Activity key={a.id} activity={a} /> )  }
      </section>
    </article>
  )
}
export const query = graphql`
query {
  allDataJson {
    nodes {
      activities {
        nodes {
          id
          title
          content
          slug
        }
      }
    }
  }
}
`