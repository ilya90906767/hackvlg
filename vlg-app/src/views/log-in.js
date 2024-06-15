import React from 'react'

import { Helmet } from 'react-helmet'

import SignIn9 from '../components/sign-in9'
import './log-in.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>LogIn - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="LogIn - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <SignIn9 rootClassName="sign-in9-root-class-name1"></SignIn9>
    </div>
  )
}

export default LogIn
