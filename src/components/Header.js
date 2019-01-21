import React from 'react'
import Container from './Container'
import avatar from '../images/sam.png'
import '../assets/Header.scss'

export default () => {
  return (
    <Container>
      <div className="header">
        <img className="avatar" alt="Sam Roth avatar" src={avatar} />
        <h1 className="name">Samuel Roth</h1>
        <p className="description">Software Engineer</p>
        <div className="header-links">
          <a href="/resume/december.2018.pdf" target="_blank">Resume</a>
          <a href="https://www.twitter.com/sjroot">Twitter</a>
          <a href="https://www.github.com/sejr">GitHub</a>
        </div>
      </div>
    </Container>
  )
}