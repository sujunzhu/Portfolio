import React from 'react'
import { PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'
import "../stylesheets/topicGrid.css"

const TopicGrid = ({text, url, type}) => {
  const TopicGridCss = {
    backgroundImage: `url(${url})`,
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

export const TopicGridContainer = ({grids}) => (
  <div id="topicGridContainer">
    {grids.map((grid, i) =>
      <TopicGrid key={i}
                 text={grid.text}
                 url={grid.url}
                 type={grid.type}/>
      )}
  </div>
)

TopicGridContainer.defaultProps = {
  text: "Blank",
  url: "#",
  type: "small"
}

TopicGridContainer.propTypes = {
  grids: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired
   })).isRequired,
}
