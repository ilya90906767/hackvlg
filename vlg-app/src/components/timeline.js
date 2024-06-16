import React from 'react'

import PropTypes from 'prop-types'

import './timeline.css'

const Timeline = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="timeline-max-width thq-section-max-width">
        <div className="timeline-container01">
          <h2 className="thq-heading-2">{props.title1}</h2>
          <span className="timeline-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="timeline-timeline-container">
          <div className="timeline-step1">
            <div className="timeline-container02">
              <div className="timeline-container03"></div>
              <div className="timeline-progress0"></div>
            </div>
            <div className="timeline-container04">
              <h3 className="thq-heading-3">{props.date1}</h3>
              <h3 className="timeline-text03 thq-heading-3">
                {props.card1Heading}
              </h3>
              <span className="thq-body-small">{props.card1Content}</span>
            </div>
          </div>
          <div className="timeline-step2">
            <div className="timeline-container05">
              <div className="timeline-container06"></div>
              <div className="timeline-progress01"></div>
            </div>
            <div className="timeline-container07">
              <h3 className="thq-heading-3">{props.date2}</h3>
              <h3 className="timeline-text06 thq-heading-3">
                {props.card2Heading}
              </h3>
              <span className="thq-body-small">{props.card2Content}</span>
            </div>
          </div>
          <div className="timeline-step3">
            <div className="timeline-container08">
              <div className="timeline-container09"></div>
              <div className="timeline-progress02"></div>
            </div>
            <div className="timeline-container10">
              <h3 className="thq-heading-3">{props.date3}</h3>
              <h3 className="timeline-text09 thq-heading-3">
                {props.card3Heading}
              </h3>
              <span className="thq-body-small">{props.card3Content}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline.defaultProps = {
  card3Content:
    'Волга - великая река. Каждый раз смотрю на нее и удивляюсь.... На набережной находятся прекрасные рестораны. Место удобно для тех, кто приехал на коляске. Однако есть пару мест с обильным количеством ступенек. Настоятельно рекомендую взять с собой помощника (ну или попросить людей, в Волгограде очень добрые люди)',
  title1: 'Моя первая поездка в Город Герой',
  date3: '23/04/2023',
  rootClassName: '',
  card2Content:
    'Кто не знал - это главный металлургический завод страны (по крайней мере - был им). Рядом находится поселок Металлургов. Дороги гладкие, у Завода очень приятно было перемещаться.',
  card1Heading: 'Родина Мать',
  content1:
    'Всем привет. В этот раз, я отправилась на Юг по Волге и наткнулась на чудесный город Волгоград. Путешествие было не легкое, ведь я передвигаюсь на коляске. Однако приложение Доступный Волгоград помогло мне. Сейчас я все вам расскажу...',
  date2: '23/04/2023',
  date1: '23/04/2023',
  card2Heading: 'Завод Красный Октябрь',
  card1Content:
    'Великий памятник великого народа. Это произведение не оставило меня без слез. Однако стоит учесть, что для коляски к памятнику нужно подойти со стороны ТЦ Мармелад, там находится плавный подъем.',
  card3Heading: 'Набережная',
}

Timeline.propTypes = {
  card3Content: PropTypes.string,
  title1: PropTypes.string,
  date3: PropTypes.string,
  rootClassName: PropTypes.string,
  card2Content: PropTypes.string,
  card1Heading: PropTypes.string,
  content1: PropTypes.string,
  date2: PropTypes.string,
  date1: PropTypes.string,
  card2Heading: PropTypes.string,
  card1Content: PropTypes.string,
  card3Heading: PropTypes.string,
}

export default Timeline
