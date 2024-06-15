import React from 'react'

import PropTypes from 'prop-types'

import './sign-in9.css'

const SignIn9 = (props) => {
  return (
    <div
      className={`sign-in9-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="sign-in9-max-width thq-section-max-width">
        <div className="sign-in9-container1">
          <h2 className="sign-in9-text thq-heading-2">{props.heading1}</h2>
        </div>
        <div className="sign-in9-container2">
          <div className="sign-in9-container3">
            <form className="sign-in9-form">
              <div className="sign-in9-email">
                <label htmlFor="thq-sign-in-9-email" className="thq-body-large">
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="thq-sign-in-9-email"
                  required="true"
                  placeholder="Ваша почта"
                  className="sign-in9-textinput thq-body-large thq-input"
                />
              </div>
              <div className="sign-in9-password">
                <div className="sign-in9-container4">
                  <label
                    htmlFor="thq-sign-in-9-password"
                    className="thq-body-large"
                  >
                    Пароль
                  </label>
                  <div className="sign-in9-hide-password"></div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-9-password"
                  required="true"
                  placeholder="Ваш пароль"
                  className="sign-in9-textinput1 thq-body-large thq-input"
                />
              </div>
              <button
                type="submit"
                className="sign-in9-button thq-button-filled"
              >
                <span className="sign-in9-text3 thq-body-small">
                  {props.action1}
                </span>
              </button>
            </form>
          </div>
          <div className="sign-in9-divider">
            <div className="sign-in9-container5">
              <div className="sign-in9-divider1"></div>
              <span className="thq-body-large">Или</span>
              <div className="sign-in9-divider2"></div>
            </div>
            <p className="sign-in9-text5 thq-body-large">Не можете войти?</p>
          </div>
          <div className="sign-in9-container6">
            <div className="sign-in9-container7">
              <button className="sign-in9-button1 thq-button-outline">
                <span className="thq-body-small">Войти через Госуслуги</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignIn9.defaultProps = {
  rootClassName: '',
  heading1: 'Войти',
  action1: 'Войти',
  action2: 'Create an account',
  content1: "Don't have an account?",
}

SignIn9.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
}

export default SignIn9
