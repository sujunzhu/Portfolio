import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Link } from "react-router-dom"
import { SIGN_IN as SignIn } from "../../constants/routes"
import SignOutButton from '../sign_out'
import withAuthorization from '../withAuthorization';

class ProfilePage extends Component{
  render(){
    const {authUser} = this.props;
    return (
      <div id="profile" className="hack">
        { authUser
          ?
            <div>
              <h1>Account: {authUser.email} </h1>
              <SignOutButton />
              <br/><br/>
            </div>
          :
            <div>
              <p>
                "You have logged out"
                <Link to={ SignIn }>Sign In
                </Link>
              </p>

            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
  authUser: state.sessionState.authUser,
})};

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(ProfilePage);
