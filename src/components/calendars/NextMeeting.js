import React from 'react'
import { useCalendar } from '../../hooks/useCalendar'
import getDate from '../utilities/getDate'

export default function NextMeeting({activity}) {
  const nextMeeting = useCalendar(1, activity.title)
  let dates = {}
  let eventOrSession = (activity.activityMetadata.activityType==='Event') ? 'event' : 'session'

  if(nextMeeting.length > 0) {
    dates.start = getDate(nextMeeting[0].start.dateTime)
    dates.end = getDate(nextMeeting[0].end.dateTime)
  }

  return (
    <> 
      { nextMeeting.length > 0 && 
      <div>
        <h4>Next {eventOrSession}:</h4>
        <div>{dates.start.displayDateLong} ({dates.start.displayTime}-{dates.end.displayTime})</div>
      </div>
      }
    </>
  )
}
