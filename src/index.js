import React from 'react'
import { render } from "react-dom"
import { App } from "./components/App"
import { Whoops404 } from "./components/404"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

render(
	<BrowserRouter>
    <Switch>
      <Route exact strict path="/" component={App}/>
      <Route path="/about/" component={App}/>
      <Route path="/login/" component={App}/>
      <Route component={Whoops404}/>
    </Switch>
  </BrowserRouter>,
	document.getElementById('react-container')
)
