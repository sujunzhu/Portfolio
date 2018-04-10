import React from 'react'
import { Component } from 'react'
import { PropTypes} from 'prop-types'
import { TopicGrid } from './TopicGrid'
import "../stylesheets/topicGrid.css"

export const TopicGridContainer = ({grids,handler}) => {
  return (
    <div id="topicGridContainer">
      {grids.map((grid, i) =>
        <TopicGrid key={i}
                   text={grid.text}
                   img={grid.img}
                   url={grid.url}
                   type={grid.type}
                   handler={handler}/>
        )}
    </div>
  )
}

TopicGridContainer.defaultProps = {
  grids : [
    {
      text: "Blank",
      img: "#",
      url: "#",
      type: "small"
    }
  ]
}

TopicGridContainer.propTypes = {
  grids: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     img: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired
   })).isRequired,
}
