import React from 'react'

import { Helmet } from 'react-helmet'
import {Routes, Route, useNavigate, NavLink} from 'react-router-dom';

import SignIn9 from '../components/sign-in9'
import './land.css'


const Land = (props) => {
  return (
    <div className="land-container">
      <Helmet>
        <title>Путешевствие по Волгограду</title>
        <meta property="og:title" content="Путешевствие по Волгограду" />
      </Helmet>
      <SignIn9 rootClassName="sign-in9-root-class-name"></SignIn9>
      <div className="land-container1">
        <img
          alt="image"
          src="/monument-birthplace-russia-volgograd-1500w.jpg"
          loading="lazy"
          className="land-image"
        />
        <h1 className="land-text">
          <br></br>
          <br></br>
        </h1>
        <NavLink to='/login'>
          <button type="submit" className="land-button thq-button-filled">
            <span className="land-text4 thq-body-small">Начни путешевствие</span>
          </button>
        </NavLink>
        
      </div>
    </div>
  )
}

export default Land
