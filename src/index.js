import React from 'react'
import { render } from "react-dom"
import App from "./components/App"
import { Whoops404 } from "./components/404"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/" component={App}/>
        <Route path="/topic/:name" component={App}/>
        <Route path="/about/" component={App}/>
        <Route path="/login/" component={App}/>
        <Route component={Whoops404}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
	document.getElementById('react-container')
)
