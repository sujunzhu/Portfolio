import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import MdChildCare from 'react-icons/lib/md/child-care'
import MdAccountBox from 'react-icons/lib/md/account-box'
import "../stylesheets/menu.css"

export const Menu = () => (
  <nav>
    <NavLink to="/" exact activeClassName="activeC">
      <HomeIcon />
    </NavLink>
    <NavLink to="/about/" activeClassName="activeC">
      <MdChildCare />
    </NavLink>
    <NavLink to="/login/" activeClassName="activeC">
      <MdAccountBox />
    </NavLink>
  </nav>
)
