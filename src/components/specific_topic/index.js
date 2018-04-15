import React from 'react'
import { SpecificTopicImage } from '../specific_topic_image'
import { FadeLoader } from 'react-spinners'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSpecificTopicImages } from '../../actions/get_specific_topic'
import "../../stylesheets/topic.css"

class SpecificTopicPage extends React.Component {
  componentWillMount(){
    this.props.getSpecificTopicImages(this.props.match.params.name);
  }

  render() {
    const { specificTopicImageList,
            specificTopicImageListFetching } = this.props;
    return (
      !specificTopicImageListFetching
      ? <div id="topic">
          {
            specificTopicImageList.map((topicImage, i) => {
                return (
                  <SpecificTopicImage key={i}
                              text={topicImage.text}
                              img={topicImage.img}
                              url={topicImage.url}
                              type={topicImage.type}/>
                )
              }
            )
          }
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
  specificTopicImageList: state.specificTopicImageList.data,
  specificTopicImageListFetching: state.specificTopicImageList.isFetching,
})};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSpecificTopicImages: getSpecificTopicImages,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificTopicPage);
