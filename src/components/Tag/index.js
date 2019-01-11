import React from 'react'
import { Link } from 'gatsby'
import './Tag.scss'

const getTag = (tag) => {
  switch(tag) {
    case 'cpp':
      return 'c++'
    case 'typescript':
      return 'TypeScript'
    case 'ux':
      return 'UX'
    default:
      return tag
  }
}

export default ({name}) => {
  return (
    <Link class="tag-link" to={`/tags/${name}`}>
      <div className={`tag ${name}`}>{ getTag(name) }</div>
    </Link>
  )
}