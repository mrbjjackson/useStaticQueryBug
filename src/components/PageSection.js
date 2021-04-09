import React from 'react'
import {sectionHolder} from './styles/PageSection.module.scss'

export default function PageSection({section, showTitle=true}) {
  return (
    <section id={section.slug} className={sectionHolder}>
      {showTitle && <h4>{section.title}</h4>}
      <div dangerouslySetInnerHTML={{ __html: section.content }} />
    </section>
  )
}
