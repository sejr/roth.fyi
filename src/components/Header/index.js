import React from 'react'
import avatar from '../../images/sam.png'
import './Header.scss'

export default () => {
  return (
    <div className="header">
      <img className="avatar" alt="Sam Roth avatar" src={avatar} />
      <h1 className="name">Samuel Roth</h1>
      <p className="description">Software Engineer</p>
      <div className="header-links">
        <a href="/resume/december.2018.pdf" target="_blank">Resume</a>
        <a href="https://www.twitter.com/sjroot">Twitter</a>
        <a href="https://www.github.com/sejr">GitHub</a>
      </div>
      {/* <div className="icons">
        <a href="https://www.twitter.com/sjroot"><i className="icon icon-twitter"></i></a>
        <a href="https://www.github.com/sejr"><i className="icon icon-github"></i></a>
        <a href="https://www.linkedin.com/in/samuelroth1"><i className="icon icon-linkedin"></i></a>
      </div> */}
    </div>
  )
}