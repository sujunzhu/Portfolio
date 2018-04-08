import React from 'react'
import { Menu } from './menu'
import { TopicGridContainer } from './topicGridContainer'
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
        }
      ]
    }
    this.addTopicGrid = this.addTopicGrid.bind(this)
  }

  addTopicGrid(imageGrid){
    this.setState({
        grids: [
          ...this.state.grids,
          imageGrid
        ]
    })
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
            <Login onNewTopic={this.addTopicGrid}/>
          }
        </div>
      </div>
    )
  }
}
