import React from 'react'
import { SpecificTopicImage } from '../specific_topic_image'
import { FadeLoader } from 'react-spinners'
import { connect } from 'react-redux'
import "../../stylesheets/topic.css"

class SpecificTopicPage extends React.Component {
  render() {
    const { specificTopicImageList } = this.props;
    return (
      specificTopicImageList
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

const mapStateToProps = (state) => ({
  specificTopicImageList: state.specificTopicImageList,
});

export default connect(mapStateToProps, null)(SpecificTopicPage);
