import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import MapComp from '../components/map-comp'
import MapSettings from '../components/map-settings'
import './map.css'
import {RouteProvider} from "../contexts/geocodeContext";

const Map = (props) => {

  return (
    <div className="map-container">
      <Helmet>
        <title>Путешествие по Волгограду</title>
        <meta property="og:title" content="Путешествие по Волгограду" />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name"></Navbar1>

      <RouteProvider>
        <MapSettings></MapSettings>
        <MapComp></MapComp>
      </RouteProvider>

    </div>
  )
}

export default Map
