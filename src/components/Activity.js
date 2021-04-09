import React from 'react'
import { Link } from 'gatsby'
import NextMeeting from './NextMeeting'

export default function Activity({activity: a}) {

  return (
    <article >
      <Link to={`/activities/${a.slug}`} title={a.title}>
        <h2>{a.title}</h2>
        <NextMeeting activity={a} />
      </Link>
    </article>
  )
}
