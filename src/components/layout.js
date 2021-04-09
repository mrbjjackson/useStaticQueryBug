import React from "react"

import "./styles/styles.scss"

import Header from "./header"
import MainNav from './MainNav'

import {  mainHolder } from "./styles/layout.module.scss"



const Layout = ({ children}) => {


  console.log('Rendered layout')

  return (
    <div className={mainHolder}>
      <Header siteTitle='useStaticQueryIssue' />
      <MainNav />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
