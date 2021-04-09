import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { activityHolder } from './styles/Activities.module.scss'
import NextMeeting from './calendars/NextMeeting'

export default function Activity({activity: a}) {
  const featuredImage = getImage(a.featuredImage?.node.localFile)

  return (
    <article className={activityHolder}>
      <Link to={a.uri} title={a.title}>
        { featuredImage && <GatsbyImage image={featuredImage} alt={a.title} /> }
        <h3>{a.title}</h3>
        <NextMeeting activity={a} />
      </Link>
    </article>
  )
}
