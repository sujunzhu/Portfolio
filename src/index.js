import React from 'react'
import { render } from "react-dom"
import App from "./components/App"
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('react-container')
)
