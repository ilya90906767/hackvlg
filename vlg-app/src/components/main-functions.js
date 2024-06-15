import React from 'react'

import PropTypes from 'prop-types'

import './main-functions.css'
import { NavLink } from 'react-router-dom'

const MainFunctions = (props) => {
  return (
    <div className="main-functions-layout301 thq-section-padding">
      <div className="main-functions-max-width thq-section-max-width">
        <h2 className="main-functions-text thq-heading-2">
          Волгоград для всех
        </h2>
        <div className="main-functions-row thq-grid-auto-300">
          <div className="main-functions-feature1">
            <img
              alt={props.feature1ImageAlt}
              src="/alltime_volgograd_2-600w.jpg"
              className="thq-img-ratio-4-3"
            />
            <div className="main-functions-content thq-flex-column">
              <div className="main-functions-section-title thq-flex-column">
                <h3 className="main-functions-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="main-functions-description1 thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
              <div className="main-functions-action thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">{props.action1}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="main-functions-feature2">
            <img
              alt={props.feature2ImageAlt}
              src="/304151-alexfas01-600w.jpg"
              className="thq-img-ratio-4-3"
            />
            <div className="main-functions-content1 thq-flex-column">
              <div className="main-functions-section-title1 thq-flex-column">
                <strong className="main-functions-title2 thq-heading-3">
                  {props.feature2Title}
                </strong>
                <span className="main-functions-description2 thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
              <div className="main-functions-action1 thq-flex-row">
                <NavLink to="/map"> 
                  <button className="thq-button-flat">
                    <span className="thq-body-small">{props.feature2Button}</span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MainFunctions.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Title: 'Изучи уже готовые маршруты',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature3Button: 'Button',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature2Description:
    'Изучай город самостоятельно! Мы сделали для вас конструктор маршрутов, где вы сможете выбрать, что хотите посетить',
  feature3ImageAlt: 'PlaceholderImage1314',
  action1: 'Готовые маршруты',
  feature4ImageAlt: 'image 4',
  feature1ImageAlt: 'image1',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature2Title: 'Построй свой маршрут',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Description:
    'Пройдись по заранее составленным маршрутам для людей с ограниченными возможностями',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature4Button: 'Button',
  feature3Title: 'Готовые маршруты',
  feature2ImageAlt: 'image2',
  feature2Button: 'Построить маршрут',
}

MainFunctions.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3Button: PropTypes.string,
  feature4Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  action1: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4Button: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2Button: PropTypes.string,
}

export default MainFunctions
