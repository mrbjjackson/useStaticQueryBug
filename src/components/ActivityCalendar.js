import React from 'react'
import getDate from './utilities/getDate'

export default function ActivityCalendar({activity, calendar}) {

  let eventOrSession = (activity.activityMetadata.activityType==='Event') ? 'event' : 'session'
  console.log('rendered ActivityCalendar')
  return (
    <> 
      { calendar.length > 0 && 
      <section>
        <h4>Upcoming {eventOrSession}s</h4>
        <ul>
          { calendar.map((entry, index) => {
            const dates = {
              start: getDate(entry.start.dateTime),
              end: getDate(entry.end.dateTime)
            }
            return( <li key={entry.id}>{dates.start.displayDateLong} ({dates.start.displayTime}-{dates.end.displayTime})</li> )
          })}
        </ul>
      </section>
      }
    </>
  )
}
