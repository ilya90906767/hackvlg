import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import MainFunctions from '../components/main-functions'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Путешевствие по Волгограду</title>
        <meta property="og:title" content="Путешевствие по Волгограду" />
      </Helmet>
      <Navbar1></Navbar1>
      <MainFunctions></MainFunctions>
    </div>
  )
}

export default Home
