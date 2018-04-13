import React from 'react'
import { Link } from 'react-router-dom'

export const SpecificTopicImage = ({text,img,url,type}) => {
  return (
    <div className={type}>
      <Link to={url} target="_blank">
        <img src={img} className="specifixImage"/>
      </Link>
    </div>
  )
}

SpecificTopicImage.defaultProps = {
      "text":"Architecture",
      "img":"/public/images/architecture.jpg",
      "url":"/public/images/architecture.jpg",
      "type":"topicItem"
    }
