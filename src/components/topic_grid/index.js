import React from 'react'
import { Link } from 'react-router-dom'

export const TopicGrid = ({text, img, url, type, handler}) => {
  const TopicGridCss = {
    background: `url(${img}) no-repeat center center`,
    backgroundSize: `cover`
  }
  return (
    <div className={type} style={TopicGridCss}>
      {
        type === "big" ?
        <Link to={url} /*onClick={() => {
                                        handler(text)
                                      }
                               }*/
          className="topic">
          <div>
            {text}
          </div>
        </Link> :
        <Link to={url} target="_blank" className="topic">
          <div>
            {text}
          </div>
        </Link>
      }
    </div>
  )
}
