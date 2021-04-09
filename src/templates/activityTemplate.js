import React from "react"
import { graphql } from "gatsby"
import NextMeeting from '../components/NextMeeting'
import { useCalendar } from '../hooks/useCalendar'



export default function ActivityTemplate({ data, pageContext }) {
  console.log('rendered: activityPage')

  const activity = data.allDataJson.nodes[0].activities.nodes.find(a => a.id === pageContext.id)
  const calendar = useCalendar(50, activity.title)
  const nextMeeting = calendar.length > 0 ? calendar[0] : null


  return (
    <article>
      <h1>{activity.title}</h1>

      <section>
        {activity.content}
      </section>

      <section>
        <NextMeeting activity={activity} nextMeeting={nextMeeting} />
      </section>

    </article>
  )
}
export const query = graphql`
  query{
    allDataJson {
      nodes {
        activities {
          nodes {
            id
            title
            content
          }
        }
      }
    }
  }
`
