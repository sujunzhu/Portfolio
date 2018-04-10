import React from 'react'
import "../stylesheets/login.css"

export const Login = ({onNewTopic, removeTopic}) => {
  const submit1 = () =>{
    onNewTopic({
      text:"Topic1",
      img:"/public/images/add.jpg",
      url:"/public/images/add.jpg",
      type:"big"
    })
  }
  const submit2 = () =>{
    removeTopic("/public/images/add.jpg")
  }
  return (
  <div className="login">
    <div>
      <button onClick={submit1}>add</button>
    </div>
    <div>
      <button onClick={submit2}>delete</button>
    </div>
  </div>
)}
