import React from 'react'

import './navbar1.css'

const Navbar1 = (props) => {
  props = Navbar1.defaultProps = {
    link5: 'Link5',
    action1: 'Action 1',
    link4: 'Link4',
    link1: 'Link1',
    rootClassName: '',
    logoAlt: 'logo',
    link2: 'Link2',
    logoSrc:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
    link3: 'Link3',
    action2: 'Action 2',
    ...props
  }

  return (
    <header className={`navbar1-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar1-navbar-interactive">
        <img alt="logo" src="/main-logo_hor.svg" className="navbar1-image1" />
      </header>
    </header>
  )
}
export default Navbar1
