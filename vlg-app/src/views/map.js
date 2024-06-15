import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import MapComp from '../components/map-comp'
import MapSettings from '../components/map-settings'
import './map.css'

const Map = (props) => {
  return (
    <div className="map-container">
      <Helmet>
        <title>Путешевствие по Волгограду</title>
        <meta property="og:title" content="Путешевствие по Волгограду" />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name"></Navbar1>
      
      <MapSettings></MapSettings>
      
      <MapComp></MapComp>

    </div>
  )
}

export default Map
