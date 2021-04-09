import React from 'react'
import { Link } from 'gatsby'
import {ul} from './styles/MainNav.module.scss'

export default function MainNav() {

  return (
    <ul className={ul}>
        <li><Link to="/about" title="About">About</Link></li>
        <li><Link to="/activities" title="Activities">Activities</Link></li>
    </ul>
  )
}
