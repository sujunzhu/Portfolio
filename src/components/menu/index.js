import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import MdChildCare from 'react-icons/lib/md/child-care'
import MdAccountBox from 'react-icons/lib/md/account-box'
import MdAccountCircle from 'react-icons/lib/md/account-circle'
import "../../stylesheets/menu.css"
import * as Routes from '../../constants/routes'
import SignOutButton from '../sign_out'
import { auth } from '../../firebase';
import { connect } from 'react-redux';

const Menu = ({ authUser }) => (
  <div>
    { authUser
      ? <LogoutMenu />
      : <LoginMenu />
    }
  </div>
)

const LoginMenu = () => (
  <div>
    <div id="menu">
      <nav id="menuContainer">
        <NavLink to={Routes.HOME} exact activeClassName="activeC" className="menuItem">
          <span className="menuItemWord">Home <HomeIcon className="menuIcon"/></span>
        </NavLink>
        <NavLink to={Routes.ABOUT} activeClassName="activeC" className="menuItem">
          <span className="menuItemWord">X.F.Ye <MdChildCare className="menuIcon"/></span>
        </NavLink>
        <NavLink to={Routes.PLAYSTATION} activeClassName="activeC" className="menuItem">
          <span className="menuItemWord">Play.S <MdAccountBox className="menuIcon"/></span>
        </NavLink>
        <NavLink to={Routes.SIGN_IN} activeClassName="activeC" className="menuItem">
          <span className="menuItemWord">Sign.I <MdAccountCircle className="menuIcon"/></span>
        </NavLink>
      </nav>
    </div>
  </div>
)

const LogoutMenu = () => (
  <div>
    <div id="menu">
      <nav id="menuContainer">
        <NavLink to={Routes.HOME} exact activeClassName="activeC" className="menuItem">
          <span className="menuItemWord">Home <HomeIcon className="menuIcon"/></span>
        </NavLink>
        <NavLink to={Routes.ABOUT} activeClassName="activeC" className="menuItem">
          <span className="menuItemWord">X.F.Ye <MdChildCare className="menuIcon"/></span>
        </NavLink>
        <NavLink to={Routes.PLAYSTATION} activeClassName="activeC" className="menuItem">
          <span className="menuItemWord">Play.S <MdAccountBox className="menuIcon"/></span>
        </NavLink>
        <NavLink to={Routes.HOME} onClick={auth.doSignOut} className="menuItem">
          <span className="menuItemWord">Sign.O <MdAccountCircle className="menuIcon"/></span>
        </NavLink>
      </nav>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return({
  authUser: state.sessionState.authUser,
})};

export default connect(mapStateToProps,null)(Menu);
