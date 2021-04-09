import React from 'react'
import { useCalendar } from '../hooks/useCalendar'

export default function NextMeeting({activity}) {
  const nextMeeting = useCalendar(activity.title)

  return (
    <> 
      { nextMeeting.length > 0 && 
      <div>
        <h4>Next meeting:</h4>
        <div>{nextMeeting.date}</div>
      </div>
      }
    </>
  )
}
