import React from "react"
import { graphql } from "gatsby"
import ActivityCalendar from '../components/ActivityCalendar'
import NextMeeting from '../components/NextMeeting'
import { useCalendar } from '../hooks/useCalendar'




export default function ActivityTemplate({ data, ...props }) {
  console.log('rendered: activityPage')

  const a = data.allDataJson.nodes[0].activities // Activity
  const calendar = useCalendar(50, a.title)
  const nextMeeting = calendar.length > 0 ? calendar[0] : null


  return (
    <article>
      <h1>{a.title}</h1>

      <section>
        <div dangerouslySetInnerHTML={{ __html: a.content }} />
      </section>

      <section>
        <NextMeeting activity={a} nextMeeting={nextMeeting} />
        {/* <ActivityCalendar activity={a} calendar={calendar}/> */}
      </section>

    </article>
  )
}
export const query = graphql`
  query($id: String!) {
    allDataJson(filter: {activities: {nodes: {elemMatch: {id: {eq: $id}}}}}) {
      nodes {
        activities {
          nodes {
            id
          }
        }
      }
    }
  }
`
