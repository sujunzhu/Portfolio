import React from 'react'
import { TopicImage } from './topicImage'
import { PropTypes } from 'prop-types'
import "../stylesheets/topic.css"

export const Topic = ({topicImages}) => {
  return (
    <div id="topic">
      {
        topicImages.map((topicImage, i) => {
            return (
              <TopicImage key={i}
                          text={topicImage.text}
                          img={topicImage.img}
                          url={topicImage.url}
                          type={topicImage.type}/>
            )
          }
        )
      }
    </div>
  )
}

Topic.defaultProps = {
  topicImages : [
    {
      "text":"Architecture",
      "img":"/public/images/architecture.jpg",
      "url":"/public/images/architecture.jpg",
      "type":"topicItem"
    }
  ]
}

Topic.propTypes = {
  topicImages: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     img: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired
   })).isRequired,
}
