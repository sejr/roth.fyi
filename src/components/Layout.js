import React from 'react'
import Helmet from 'react-helmet'
import '../assets/all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Samuel Roth" />
    {/* <Navbar /> */}
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
