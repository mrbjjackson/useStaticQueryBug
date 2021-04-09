import * as React from "react"
import Seo from "../components/seo"
import queryString from 'query-string'
import ContactForm from '../components/ContactForm'

const ContactPage = ({location:{search}}) => {
const query = queryString.parse(search)

return (
<article>
  <Seo title="Contact the St Agnes MMI" />
  <h1>Get in touch</h1>
  <p>Contact content.</p>
  <ContactForm query={query} />
</article>
)
}

export default ContactPage
