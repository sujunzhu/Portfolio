import React, { Component } from 'react'
import { Menu } from './menu'
import { Footer } from './footer'
import { TopicGridContainer } from './topicGridContainer'
import { About } from "./about"
import { Login } from "./login"
import { Topic } from "./topic"
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addTopicImage from '../actions/add_topic_image'
import getTopicImages from '../actions/get_topic_images'
import removeTopicImages from '../actions/remove_topic_images'
import getSpecificTopicImages from '../actions/get_specific_topic'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.addTopicGrid = this.addTopicGrid.bind(this)
    this.removeTopicGrid = this.removeTopicGrid.bind(this)
    this.renderTopicImages = this.renderTopicImages.bind(this)
    this.renderSpecificTopicImages = this.renderSpecificTopicImages.bind(this)
    this.getSpecificImageSetup = this.getSpecificImageSetup.bind(this)
  }

  comonnentWillMount() {
    getSpecificImageSetup(this.props.match.params.name);
  }

  componentDidMount() {
    this.props.getTopicImages();
    this.props.getSpecificTopicImages("default");
  }

  addTopicGrid(imageGrid){
    this.props.addTopicImage(imageGrid);
  }

  removeTopicGrid(url){
    this.props.removeTopicImages(url);
  }

  renderTopicImages() {
    if(this.props.topicImageList) {
      return <TopicGridContainer grids={this.props.topicImageList}
                                 handler={this.getSpecificImageSetup}/>;
    } else {
      return <div>Loading</div>;
    }
  }

  getSpecificImageSetup(topic) {
    this.props.getSpecificTopicImages(topic);
  }

  renderSpecificTopicImages() {
    if(this.props.specificTopicImageList){
      return <Topic topicImages={this.props.specificTopicImageList}/>;
    } else {
      return <div>Loading</div>;
    }
  }

  render(){
    const {pathname} = this.props.location;
    return (
      <div>
        <Menu />
        <div>
          {(pathname === "/") ?
            this.renderTopicImages() :
            (pathname === "/about/") ?
            <About /> :
            (pathname === "/login/") ?
            <Login onNewTopic={this.addTopicGrid}
                   removeTopic={this.removeTopicGrid}/> :
            this.renderSpecificTopicImages()
          }
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    specificTopicImageList: state.specificTopicImageList,
    topicImageList: state.topicImageList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTopicImage: addTopicImage,
    getTopicImages: getTopicImages,
    removeTopicImages: removeTopicImages,
    getSpecificTopicImages: getSpecificTopicImages
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
