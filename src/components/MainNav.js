import React from 'react'
import { Link } from 'gatsby'
import './styles/hamburgers.min.css'
import {ul} from './styles/MainNav.module.scss'

export default function MainNav() {

  return (
    <ul className={ul}>
        <li><Link to="/events" title="Events" activeClassName="active">Upcoming Events</Link></li>
        <li><Link to="/groups-and-classes" title="Groups & Classes" activeClassName="active">Groups & Classes</Link></li>
        <li><Link to="/nourish" title="Nourish - the MMI Café" activeClassName="active">Our Café - "Nourish"</Link></li>
        <li><Link to="/spaces" title="Our Spaces" activeClassName="active">Our Spaces</Link></li>
        <li><Link to="/about" title="About" activeClassName="active">About</Link></li>
        <li><Link to="/contact" title="Contact the St Agnes MMI" activeClassName="active">Contact</Link></li>
    </ul>
  )
}
