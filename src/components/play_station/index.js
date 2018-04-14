import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { bindActionCreators } from 'redux'
import addTopicImage from '../../actions/add_topic_image'
import removeTopicImages from '../../actions/remove_topic_images'
import "../../stylesheets/play_station.css"
import withAuthorization from '../withAuthorization';
import { db } from '../../firebase';

class PlayStationPage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

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

    const { users } = this.state;

    return (
      <div className="play_station">
        <div>
          <button onClick={submit1}>add</button>
        </div>
        <div>
          <button onClick={submit2}>delete</button>
        </div>
        <div>
          { !!users && <UserList users={users} /> }
        </div>
      </div>
    )
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <p key={key}>{users[key].username}</p>
    )}
  </div>

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
