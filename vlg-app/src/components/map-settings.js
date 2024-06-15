import React, { useContext, useState } from 'react';


import PropTypes from 'prop-types'
import {RouteContext} from '../contexts/geocodeContext'
import './map-settings.css'

const MapSettings = (props) => {
  const apiKey = '59e2dcbb-0312-4a54-96be-6b683a17331d';
  const apiUrl = 'http://routing.api.2gis.com/routing/7.0.0/global';
  const [firstPoint, setFirstPoint] = useState({ lon: 37.582591, lat: 55.775364 });
  const [secondPoint, setSecondPoint] = useState({ lon: 37.579206, lat: 55.774362 });




  const handleBuildRoute = () => {
    console.log('Start')
    const requestBody = {
      points: [
        { type: 'stop', lon: firstPoint.lon, lat: firstPoint.lat },
        { type: 'stop', lon: secondPoint.lon, lat: secondPoint.lat },
      ],
      locale: 'ru',
      transport: 'car',
      route_mode: 'fastest',
      traffic_mode: 'jam',
    };

    fetch(`${apiUrl}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
   .then(data => {
      console.log('Response data:', data); // Add this line
    })
      .catch(error => console.error(error));
  
  };

  return (
    <div className="map-settings-contact11 thq-section-padding">
      <div className="map-settings-max-width thq-section-max-width">
        <div className="map-settings-section-title thq-card">
          <div className="map-settings-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="map-settings-content1">
          <form className="map-settings-form thq-card">
            <div className="map-settings-input">
              <input 
                type="text"
                id="contact-form-9-email"
                required="true"
                placeholder="Введите пункт назначения"
                className="thq-input"
              />
              <button type="button" className="button map-settings-button">
                {props.button}
              </button>
            </div>
            <div className="map-settings-container">
              <div className="map-settings-input1">
                <label
                  htmlFor="contact-form-9-options"
                  className="thq-body-small map-settings-text2"
                >
                  <span>Инвалидность</span>
                  <br></br>
                </label>
                <select
                  id="contact-form-9-options"
                  placeholder="Select one"
                  className="thq-select map-settings-select"
                >
                  <option value="Option1">по Слуху</option>
                  <option value="Option 1">по Зрению</option>
                  <option value="Option 1">на кресле-коляске</option>
                  <option value="Option 2">с нарушением ОДА</option>
                  <option value="Option 3">с умственными нарушениями</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="thq-button-filled map-settings-button1"
              onClick={handleBuildRoute}
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

MapSettings.defaultProps = {
  content1: 'Постройте свой маршрут на интерактивной карте города',
  heading1: 'Ваш маршрут',
  action: 'Построить',
  button: 'Добавить пункт',
}

MapSettings.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action: PropTypes.string,
  button: PropTypes.string,
}

export default MapSettings
