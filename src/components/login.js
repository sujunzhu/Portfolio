import React from 'react'
import "../stylesheets/login.css"

export const Login = ({onNewTopic}) => {
  const submit = () =>{
    onNewTopic({
      text:"Topic1",
      url:"/public/images/1.jpg",
      type:"small"
    })
  }
  return (
  <div className="login">
    <h1>
      <button onClick={submit}>add</button>
    </h1>
  </div>
)}
