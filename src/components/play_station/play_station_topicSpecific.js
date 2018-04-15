import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSpecificTopicImages,
         updateSpecificTopicImages } from '../../actions/get_specific_topic'
import { SpecificTopicImage } from '../specific_topic_image'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class PSTopicSpecific extends Component {
  constructor(props) {
    super(props);
    this.state ={
      local:'[]',
      localParsed:'[]',
      parsed: false,
      topic:"",
      topicChosen:false
    }
  }

  render(){
    const { local, parsed, localParsed, topic, topicChosen } = this.state;
    const { specificTopicImageList,
            specificTopicImageListFetching } = this.props;
    return(
      <div id="play_station_topic_specific">
        <div className="play_station_not_topic">
          <h3>
            Choose your specific Topic first: { topic }
          </h3>
          <form id="ps_specific_topic">
            <input type="text"
                   autoComplete="off"
                   onChange={event => {
                     this.setState(updateByPropertyName('topicChosen',true));
                     this.setState(updateByPropertyName('topic',event.target.value));
                   }}/>
            <input type="submit"
                   disabled={!topicChosen}
                   onClick={
                      event => {
                        this.props.getSpecificTopicImages(topic);
                        event.preventDefault();
                      }
                   }/>
          </form>
          <h3>
            Here goes the old version:
          </h3>
          <button onClick={event => {
              this.setState(updateByPropertyName('local',JSON.stringify(specificTopicImageList)));
              this.setState(updateByPropertyName('localParsed',local));
            }}>
            Copy old version
          </button>
        </div>
        <div id="topic">
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
        <div className="play_station_not_topic">
          <h3>
            You can start from scratch:
          </h3>
          <form id="topicSpecificEditForm">
            <textarea name="topicSpecificEditForm"
                      //disabled={topicImageListFetching}
                      value={local}
                      placeholder="Start writting here..."
                      onChange={event => {
                        this.setState(updateByPropertyName('local',event.target.value));
                        this.setState(updateByPropertyName('parsed',false));
                      }}
            >
            </textarea>
          </form>
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
              this.props.updateSpecificTopicImages(topic,JSON.parse(localParsed));
              event.preventDefault();
            }}>
            Submit(Preview before submit)
          </button>
          <h3>
            This is how the update looks like:
          </h3>
          <div id="topicSpecificGridContainer">
            { parsed
              ?
                (JSON.parse(localParsed).map((topicImage, i) => {
                    return (
                      <SpecificTopicImage key={i}
                                  text={topicImage.text}
                                  img={topicImage.img}
                                  url={topicImage.url}
                                  type={topicImage.type}/>
                      )
                    }
                  )
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
    updateSpecificTopicImages: updateSpecificTopicImages,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PSTopicSpecific);
