import React, { Component } from 'react'
import Menu from '../menu'
import { Footer } from '../footer'
import HomePage from '../home'
import SpecificTopicPage from "../specific_topic"
import PlayStationPage from "../play_station"
import AboutPage from "../about"
import ProfilePage from "../profile"
import SignUpPage from "../sign_up"
import SignInPage from "../sign_in"
import PasswordForgetPage from "../password_forget"
import { Whoops404 } from "../404"
import { withRouter } from 'react-router-dom'
import * as Routes from '../../constants/routes'
import "../../stylesheets/App.css"
import "../../stylesheets/hack.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withAuthentication from '../withAuthentication';

class App extends Component {
  render(){
    const { location } = this.props
    return (
      <Router>
        <div>
          <Menu location={location}/>
          <div id="app-container">
            <div id="app">
              <Switch>
                <Route exact strict path={Routes.HOME} component={()=> <HomePage />} />
                <Route path={Routes.TOPIC} render={(props)=> <SpecificTopicPage {...props}/>}/>
                <Route exact path={Routes.ABOUT} render={()=><AboutPage />}/>
                <Route exact path={Routes.PLAYSTATION} render={()=><PlayStationPage />}/>
                <Route exact path={Routes.PROFILE} render={()=><ProfilePage />}/>
                <Route exact path={Routes.SIGN_UP} render={()=><SignUpPage />}/>
                <Route exact path={Routes.SIGN_IN} render={()=><SignInPage />}/>
                <Route exact path={Routes.PW_FORGET} render={()=><PasswordForgetPage />}/>
                <Route component={Whoops404}/>
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App);
