import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NextMeeting from './calendars/NextMeeting'

export default function Activity({activity: a}) {
  const featuredImage = getImage(a.featuredImage?.node.localFile)

  return (
    <article >
      <Link to={a.uri} title={a.title}>
        { featuredImage && <GatsbyImage image={featuredImage} alt={a.title} /> }
        <h2>{a.title}</h2>
        <NextMeeting activity={a} />
      </Link>
    </article>
  )
}
