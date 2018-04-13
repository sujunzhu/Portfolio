import React from 'react'
import { Component } from 'react'
import { TopicGrid } from '../topic_grid'
import { FadeLoader } from 'react-spinners'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getTopicImages from '../../actions/get_topic_images'
import getSpecificTopicImages from '../../actions/get_specific_topic'
import "../../stylesheets/topic_grid.css"

class HomePage extends Component {
  constructor(props){
    super(props)
    this.getSpecificImageSetup = this.getSpecificImageSetup.bind(this)
  }

  componentDidMount() {
    this.props.getTopicImages();
    this.props.getSpecificTopicImages("default");
  }

  getSpecificImageSetup(topic) {
    this.props.getSpecificTopicImages(topic);
  }

  render() {
    const { topicImageList }  = this.props;
    return (
      topicImageList
      ? <div id="topicGridContainer">
          {topicImageList.map((topicImage, i) =>
            <TopicGrid key={i}
                       text={topicImage.text}
                       img={topicImage.img}
                       url={topicImage.url}
                       type={topicImage.type}
                       handler={this.getSpecificImageSetup}/>
            )}
        </div>
      : <div className="loader">
          <FadeLoader color={'grey'}
                      loading={true}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
  topicImageList: state.topicImageList,
})};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopicImages: getTopicImages,
    getSpecificTopicImages: getSpecificTopicImages,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
