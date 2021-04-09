import { Link } from 'gatsby'
import React from 'react'
import {spaceHolder} from './styles/Spaces.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Space({space: s}) {



  const featuredImage = getImage(s.featuredImage?.node.localFile)
  return (
    <article className={spaceHolder}>
      <Link to={s.uri} title={s.title}>
        { featuredImage && <GatsbyImage image={featuredImage} alt={s.title} /> }

        <h3>{s.title}</h3>

        { s.spaceInformation.tagline &&
        <div className="tagline" dangerouslySetInnerHTML={{ __html: s.spaceInformation.tagline }} /> }

        { s.spaceMetadata.capacity &&
        <div className="capacity" dangerouslySetInnerHTML={{ __html: s.spaceMetadata.capacity }} /> }

        { s.spaceMetadata.size &&
        <div className="size" dangerouslySetInnerHTML={{ __html: s.spaceMetadata.size }} /> }
      </Link>
    </article>
  )
}
