import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { bindActionCreators } from 'redux'
import addTopicImage from '../../actions/add_topic_image'
import removeTopicImages from '../../actions/remove_topic_images'
import "../../stylesheets/play_station.css"
import withAuthorization from '../withAuthorization';
import { db } from '../../firebase';
import PSAboutContent from './play_station_aboutContent'
import PSTopic from './play_station_topic'
import PSTopicSpecific from './play_station_topicSpecific'

const INITIAL_STATE = {
  about:true,
  topic:false,
  topic_specific:false,
}

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class PlayStationPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    }
  }

  componentDidMount() {

  }

  render() {
    const { about, topic, topic_specific } = this.state;
    const aboutSwitch = () => {
             this.setState(updateByPropertyName('about',true));
             this.setState(updateByPropertyName('topic',false));
             this.setState(updateByPropertyName('topic_specific',false));
            }
    const topicSwitch = () => {
              this.setState(updateByPropertyName('about',false));
              this.setState(updateByPropertyName('topic',true));
              this.setState(updateByPropertyName('topic_specific',false));
            }
    const topicSpecificSwitch = () => {
              this.setState(updateByPropertyName('about',false));
              this.setState(updateByPropertyName('topic',false));
              this.setState(updateByPropertyName('topic_specific',true));
            }
    return (
      <div id="play_station_container">
        <div id="play_station_menu">
          <button onClick={ aboutSwitch }>
            Update your introduction!
          </button>
          <button onClick={ topicSwitch }>
            Update your topic!
          </button>
          <button onClick={ topicSpecificSwitch }>
            Update your topic_specific!
          </button>
        </div>
        <div id="play_station">
          {
            about
            ? <PSAboutContent />
            : topic
              ? <PSTopic />
              : topic_specific
                ? <PSTopicSpecific />
                : <div>
                    Something is wrong!
                  </div>
          }
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

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(null, mapDispatchToProps)
)(PlayStationPage);
