import React from 'react'
import { Component } from 'react'
import { PropTypes} from 'prop-types'
import { TopicGrid } from './TopicGrid'
import "../stylesheets/topicGrid.css"

export const TopicGridContainer = ({grids}) => {
  return (
    <div id="topicGridContainer">
      {grids.map((grid, i) =>
        <TopicGrid key={i}
                   text={grid.text}
                   url={grid.url}
                   type={grid.type}/>
        )}
    </div>
  )
}

TopicGridContainer.defaultProps = {
  grids : [
    {
      text: "Blank",
      url: "#",
      type: "small"
    }
  ]
}

TopicGridContainer.propTypes = {
  grids: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired
   })).isRequired,
}
