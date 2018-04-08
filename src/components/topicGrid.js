import React from 'react'
import { Link } from 'react-router-dom'

export const TopicGrid = ({text, url, type}) => {
  const TopicGridCss = {
    background: `url(${url}) no-repeat center center`,
    backgroundSize: `cover`
  }
  return (
    <div className={type} style={TopicGridCss}>
      <Link to={url} target="_blank">
        <div>Click to see large</div>
      </Link>
    </div>
  )
}
