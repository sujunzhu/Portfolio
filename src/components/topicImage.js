import React from 'react'
import { Link } from 'react-router-dom'

export const TopicImage = ({text,img,url,type}) => {
  const TopicImageCss = {
    background: `url(${img}) no-repeat center center`,
    backgroundSize: `cover`
  }
  return (
    <div className={type} style={TopicImageCss}>
      <Link to={url} target="_blank">
        <div>
        </div>
      </Link>
    </div>
  )
}

TopicImage.defaultProps = {
      "text":"Architecture",
      "img":"/public/images/architecture.jpg",
      "url":"/public/images/architecture.jpg",
      "type":"topicItem"
    }
