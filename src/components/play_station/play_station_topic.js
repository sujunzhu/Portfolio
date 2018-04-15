import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTopicImages, updateTopicImages } from '../../actions/get_topic_images'
import { TopicGrid } from '../topic_grid'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class PSTopic extends Component {
  constructor(props) {
    super(props);
    this.state ={
      local:'[]',
      localParsed:'[]',
      parsed: false
    }
  }

  componentDidMount() {
    this.props.getTopicImages();
  }

  render(){
    const { local, parsed, localParsed } = this.state
    const { topicImageList, topicImageListFetching }  = this.props;
    return(
      <div id="play_station_topic">
        <h3>
          Here goes the old version:
        </h3>
        <button onClick={event => {
            this.setState(updateByPropertyName('local',JSON.stringify(topicImageList)));
            this.setState(updateByPropertyName('localParsed',local));
          }}>
          Copy old version
        </button>
        <br/>
        <br/>
        <div id="topicGridContainer">
          {topicImageList.map((topicImage, i) =>
            <TopicGrid key={i}
                       text={topicImage.text}
                       img={topicImage.img}
                       url={topicImage.url}
                       type={topicImage.type}
                       /*handler={this.props.getSpecificTopicImages}*//>
            )}
        </div>
        <h3>
          You can start from scratch:
        </h3>
        <form id="topicEditForm">
          <textarea name="topicEditForm"
                    disabled={topicImageListFetching}
                    value={local}
                    placeholder="Start writting here..."
                    onChange={event => {
                      this.setState(updateByPropertyName('local',event.target.value));
                      this.setState(updateByPropertyName('parsed',false));
                    }}
          >
          </textarea>
        </form>
        <br/>
        <button onClick={event => {
            try{
              JSON.parse(local);
              this.setState(updateByPropertyName('localParsed',local));
              this.setState(updateByPropertyName('parsed',true));
            }catch(e) {
              alert(e);
            }
          }}>
          Preview
        </button>
        <button disabled={!parsed} onClick={event => {
            this.props.updateTopicImages(JSON.parse(localParsed));
            event.preventDefault();
          }}>
          Submit(Preview before submit)
        </button>
        <h3>
          This is how the update looks like:
        </h3>
        <div id="topicGridContainer">
          { parsed
            ?
              (JSON.parse(localParsed)).map((topicImage, i) =>
              <TopicGrid key={i}
                         text={topicImage.text}
                         img={topicImage.img}
                         url={topicImage.url}
                         type={topicImage.type}
                         /*handler={this.props.getSpecificTopicImages}*//>
              )
             : localParsed == []
              ?
                <p>
                  Dude, Something wrong with your input! Code is not compiling!
                </p>
              :
                <p>
                </p>
           }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    topicImageList: state.topicImageList.data,
    topicImageListFetching: state.topicImageList.isFetching,
})};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopicImages: getTopicImages,
    updateTopicImages: updateTopicImages,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PSTopic);
