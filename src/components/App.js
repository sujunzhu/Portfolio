import React from 'react'
import { Menu } from './menu'
import { TopicGridContainer } from './topicGrid'
import { About } from "./about"
import { Login } from "./login"
import { withRouter } from 'react-router-dom'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grids: [
        {
          text:"Topic1",
          url:"/public/images/1.jpg",
          type:"small"
        },
        {
          text:"Topic2",
          url:"/public/images/2.jpg",
          type:"big"
        },
        {
          text:"Topic3",
          url:"/public/images/3.jpg",
          type:"small"
        },
        {
          text:"Topic4",
          url:"/public/images/4.jpg",
          type:"small"
        },
        {
          text:"Topic5",
          url:"/public/images/1.jpg",
          type:"small"
        },
        {
          text:"Topic6",
          url:"/public/images/1h.jpg",
          type:"horizontal"
        },
        {
          text:"Topic7",
          url:"/public/images/2.jpg",
          type:"small"
        },
        {
          text:"Topic8",
          url:"/public/images/1v.jpg",
          type:"vertical"
        },
        {
          text:"Topic9",
          url:"/public/images/3.jpg",
          type:"small"
        },
        {
          text:"Topic10",
          url:"/public/images/2h.jpg",
          type:"horizontal"
        },
        {
          text:"Topic11",
          url:"/public/images/4.jpg",
          type:"small"
        },
        {
          text:"Topic12",
          url:"/public/images/5.jpg",
          type:"small"
        },
        {
          text:"Topic1",
          url:"/public/images/1.jpg",
          type:"small"
        },
        {
          text:"Topic2",
          url:"/public/images/2.jpg",
          type:"big"
        },
        {
          text:"Topic3",
          url:"/public/images/3.jpg",
          type:"small"
        },
        {
          text:"Topic4",
          url:"/public/images/4.jpg",
          type:"small"
        },
        {
          text:"Topic5",
          url:"/public/images/1.jpg",
          type:"small"
        },
        {
          text:"Topic6",
          url:"/public/images/1h.jpg",
          type:"horizontal"
        },
        {
          text:"Topic7",
          url:"/public/images/2.jpg",
          type:"small"
        },
        {
          text:"Topic8",
          url:"/public/images/1v.jpg",
          type:"vertical"
        },
        {
          text:"Topic9",
          url:"/public/images/3.jpg",
          type:"small"
        },
        {
          text:"Topic10",
          url:"/public/images/2h.jpg",
          type:"horizontal"
        },
        {
          text:"Topic11",
          url:"/public/images/4.jpg",
          type:"small"
        },
        {
          text:"Topic12",
          url:"/public/images/5.jpg",
          type:"small"
        }
      ]
    }
  }
  render(){
    const {pathname} = this.props.location;
    return (
      <div>
        <div id="menu">
          <Menu />
        </div>
        <div>
          {(pathname === "/") ?
            <TopicGridContainer grids={this.state.grids}/> :
            (pathname === "/about/") ?
            <About /> :
            <Login />
          }
        </div>
      </div>
    )
  }
}
