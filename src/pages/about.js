import * as React from "react"
import { graphql } from "gatsby"

const AboutPage = ({data}) => {
  console.log('rendered About')

  return (
    <article>
      <h1>About</h1>
      <p>
        Minimum reproduction for my useStaticQuery bug
        </p>
    </article>
  )
}

export default AboutPage

// export const query = graphql`
//   query {
//     about: wpPage(title: {eq: "About"}) {
//       content
//     }
//   }
// `