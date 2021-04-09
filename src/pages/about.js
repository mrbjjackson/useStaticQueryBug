import * as React from "react"
import { graphql } from "gatsby"

const AboutPage = ({data}) => {
  console.log('rendered About')

  return (
    <article>
      <h1>About</h1>
      <div dangerouslySetInnerHTML={{ __html: data.about.content }} />
    </article>
  )
}

export default AboutPage

export const query = graphql`
  query {
    about: wpPage(title: {eq: "About"}) {
      content
    }
  }
`