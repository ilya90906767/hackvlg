import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>404 - Не найдено</title>
      </Helmet>
      <h3>Упс...</h3>
      <div className="not-found-container1">
        <h1 className="not-found-text1">404</h1>
      </div>
      <div className="not-found-container2">
        <h2 className="not-found-text2">
          Этой страницы не существует
        </h2>
      </div>
    </div>
  )
}

export default NotFound
