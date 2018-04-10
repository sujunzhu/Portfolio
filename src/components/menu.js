import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import MdChildCare from 'react-icons/lib/md/child-care'
import MdAccountBox from 'react-icons/lib/md/account-box'
import "../stylesheets/menu.css"

export const Menu = () => (
  <div id="menu">
    <nav id="menuContainer">
      <NavLink to="/" exact activeClassName="activeC" className="menuItem">
        <span className="menuItemWord">Home <HomeIcon className="menuIcon"/></span>
      </NavLink>
      <NavLink to="/about/" activeClassName="activeC" className="menuItem">
        <span className="menuItemWord">X.F.Ye <MdChildCare className="menuIcon"/></span>
      </NavLink>
      <NavLink to="/login/" activeClassName="activeC" className="menuItem">
        <span className="menuItemWord">Play.S <MdAccountBox className="menuIcon"/></span>
      </NavLink>
    </nav>
  </div>
)
