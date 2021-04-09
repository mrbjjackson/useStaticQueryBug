import { useStaticQuery, graphql } from "gatsby"

export const useCalendar = ( activityName ) => {
  const data = useStaticQuery(graphql`
  query CalendarDataQuery {
    allDataJson {
      nodes {
        calendarEvents {
          nodes {
            date
            summary
          }
        }
      }
    }
  }
  `)
  console.log(data)
  let entries = data.allDataJson.nodes[1].calendarEvents.nodes

  if(activityName) {
    entries = entries.filter( entry => entry.summary.includes(activityName) )
  }

  return entries
}