import { useStaticQuery, graphql } from "gatsby"

export const useCalendar = ( count, activityName ) => {
  const data = useStaticQuery(graphql`
  query CalendarDataQuery {
    allCalendarEvent {
      nodes {
        start {
          dateTime
        }
        end {
          dateTime
        }
        description
        organizer {
          displayName
          email
        }
        id
        eventType
        summary
      }
    }
  }
  `)

  let entries = data.allCalendarEvent.nodes

  if(activityName) {
    entries = entries.filter( entry => entry.summary.includes(activityName) )
  }

  if(entries && count) {
    entries = entries.splice(0, count)
  }


  return entries
}
