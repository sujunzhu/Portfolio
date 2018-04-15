import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAboutContent,
         updateAboutContent } from '../../actions/get_about_content'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class AboutContent extends Component{
  constructor(props) {
    super(props);
    this.state ={
      local:""
    }
  }

  componentDidMount(){
    this.props.getAboutContent();
  }

  render(){
    const { local } = this.state
    const { aboutContent, aboutContentFetching } = this.props
    const submit = (event) => {
      this.props.updateAboutContent(local);
      event.preventDefault();
    }
    return (
      <div id="play_station_aboutContent">
        <h3>
          Here goes the old version:
        </h3>
        <button onClick={event => this.setState(updateByPropertyName('local',aboutContent[0]))}>
          Copy old version
        </button>
        <div dangerouslySetInnerHTML={{__html: aboutContent[0]}}>
        </div>
        <h3>
          You can start from scratch:
        </h3>
        <form id="aboutEditForm">
          <textarea name="aboutEditForm"
                    disabled={aboutContentFetching}
                    value={local}
                    placeholder="Start writting here..."
                    onChange={event => this.setState(updateByPropertyName('local',event.target.value))}
          ></textarea><br/><br/>
          <input type="button"
                 value="Submit"
                 onClick={ submit }/>
          <input type="button"
                 value="Clear"
                 onClick={event => this.setState(updateByPropertyName('local',""))}/>
        </form>
        <h3>
          This is how the update looks like:
        </h3>
        <div dangerouslySetInnerHTML={{__html: local}}>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
  aboutContent: state.aboutContent.data,
  aboutContentFetching: state.aboutContent.isFetching,
})};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAboutContent: getAboutContent,
    updateAboutContent: updateAboutContent,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContent);
