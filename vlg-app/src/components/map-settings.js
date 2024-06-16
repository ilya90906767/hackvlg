import React, { useContext, useState } from 'react';


import {RouteContext} from '../contexts/geocodeContext'
import './map-settings.css'
import Search2GIS from "./Serch2GIS";
import {saveRoute} from "../api";

const MapSettings = ( props ) => {

  const { removeLastPoint, clearPoints, points} = useContext( RouteContext );

  props = {
    content1: 'Постройте свой маршрут на интерактивной карте города',
    heading1: 'Ваш маршрут',
    action: 'Построить',
    button: 'Добавить пункт',
    ...props
  }

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  async function handlerSaveRoute() {
    await saveRoute( points );
  }

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
            <div className="map-settings-input">
              <Search2GIS />
              <div>

                {/*<button type="button" className="button map-settings-button">*/}
                {/*  {props.button}*/}
                {/*</button>*/}

              </div>

            </div>
            {/*<div>*/}
{/*            <button
                disabled={!inputValue}
                type="button"
                className="thq-button-filled map-settings-button1"
                onClick={ addPointFromAddress }
            >
              <span className="thq-body-small">Добавить</span>
            </button>*/}
              <button
                  type="button"
                  className="thq-button-filled map-settings-button1"
                  onClick={ clearPoints }
              >
                <span className="thq-body-small">Очистить</span>
              </button>
              <button
                  type="button"
                  className="thq-button-filled map-settings-button1"
                  onClick={ removeLastPoint }
              >
                <span className="thq-body-small">Назад</span>
              </button>
            <button
                type="button"
                className="thq-button-filled map-settings-button2"
                onClick={ handlerSaveRoute }
            >
              <span className="thq-body-small">Сохранить маршрут</span>
            </button>

            {/*</div>*/}
          </form>
        </div>
      </div>
    </div>
  )
}

export default MapSettings
