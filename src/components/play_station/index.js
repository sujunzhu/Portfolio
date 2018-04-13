import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addTopicImage from '../../actions/add_topic_image'
import removeTopicImages from '../../actions/remove_topic_images'
import "../../stylesheets/play_station.css"

class PlayStationPage extends Component{
  
  render() {
    const submit1 = () =>{
      this.props.addTopicImage({
        text:"Topic1",
        img:"/public/images/add.jpg",
        url:"/public/images/add.jpg",
        type:"big"
      })
    }

    const submit2 = () =>{
      this.props.removeTopicImages("/public/images/add.jpg")
    }

    return (
      <div className="play_station">
        <div>
          <button onClick={submit1}>add</button>
        </div>
        <div>
          <button onClick={submit2}>delete</button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTopicImage: addTopicImage,
    removeTopicImages: removeTopicImages,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayStationPage);
