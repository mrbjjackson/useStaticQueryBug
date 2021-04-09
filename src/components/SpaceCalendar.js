import React from 'react'
import { useActivities } from '../hooks/useActivities'
import { Wrap } from './utilities/Wrap'
import { Link } from 'gatsby'

export default function SpaceCalendar({calendar, spaceName}) {
  const allActivities = useActivities()

  const entries = calendar.slice(0, 30)

  console.log(allActivities)

  return (
    <> 
    { 
      entries.length > 0 &&
      <div>
        <h4>What's on in {spaceName}</h4>
        {entries.map(entry => {

          let activity = undefined

          activity = allActivities.find(a => {
            return entry.summary.includes(a.title)
          })

          return (
            <div key={entry.id} className="entry">
              <div className="entryTitle">
                <Wrap condition={activity}
                  wrapper={children => <Link to={activity.link} title={activity.title} children={children} />}>
                  {entry.summary}
                </Wrap>
              </div>
            </div>
          )
        }
        )}
      </div>
    }
    </>
  )
}
