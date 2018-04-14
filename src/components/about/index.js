import React, { Component } from 'react'
import "../../stylesheets/about.css"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FadeLoader } from 'react-spinners'
import getAboutContent from '../../actions/get_about_content'

class AboutPage extends Component {
  componentWillMount(){
    this.props.getAboutContent();
  }

  render(){
    const {aboutContent,aboutContentFetching} = this.props;
    return (
      <div className="about">
        <div>
          {
            !aboutContentFetching
            ?
              <p>
                {aboutContent}
              </p>
            :
              <div className="loader">
                <FadeLoader color={'grey'}
                            loading={true}
                />
              </div>

          }
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
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
