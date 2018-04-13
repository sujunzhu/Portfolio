import React from 'react';
import { Link } from 'react-router-dom'
import * as Routes from '../../constants/routes.js'

export const Landing = () => (
  <div id="landing">
    <div>
      <p>
        <Link to={Routes.SIGN_UP}>
          SIGN UP
        </Link>
      </p>
      <p>
        <Link to={Routes.SIGN_IN}>
          SIGN IN
        </Link>
      </p>
    </div>
  </div>
)
