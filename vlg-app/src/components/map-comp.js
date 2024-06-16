import React from 'react'

import './map-comp.css'
import Map from './2gismap'


const MapComp = ( {heading1 = 'Построение маршрута', ...restProps} ) => {

  return (
    <div className="map-comp-header5 thq-section-padding">
      <div className="map-comp-container">
        <div className="map-comp-max-width thq-section-max-width">
          <div className="map-comp-column">

            <div style={{ width: '100%', height: 600 }}> 

                <Map/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapComp
