import React, { Component } from 'react'
import Menu from '../menu'
import { Footer } from '../footer'
import HomePage from '../home'
import SpecificTopicPage from "../specific_topic"
import PlayStationPage from "../play_station"
import { About } from "../about"
import { Landing } from "../landing"
import SignUpPage from "../sign_up"
import SignInPage from "../sign_in"
import { Whoops404 } from "../404"
import { withRouter } from 'react-router-dom'
import * as Routes from '../../constants/routes'
import "../../stylesheets/App.css"
import "../../stylesheets/hack.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withAuthentication from '../withAuthentication';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Menu authUser={this.props.authUser}/>
          <div id="app-container">
            <div id="app">
              <Switch>
                <Route exact strict path={Routes.HOME} component={()=> <HomePage />} />
                <Route exact path={Routes.TOPIC} component={()=> <SpecificTopicPage />}/>
                <Route exact path={Routes.ABOUT} render={()=><About />}/>
                <Route exact path={Routes.PLAYSTATION} render={()=><PlayStationPage />}/>
                <Route exact path={Routes.LANDING} render={()=><Landing />}/>
                <Route exact path={Routes.SIGN_UP} render={()=><SignUpPage />}/>
                <Route exact path={Routes.SIGN_IN} render={()=><SignInPage />}/>
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
