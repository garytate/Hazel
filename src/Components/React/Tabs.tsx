import React, { useState, Component, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBraille, faBox, faExchangeAlt, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons'

import '../Sass/Tabs.sass'

export default function Tabs() {

  const [activeTab, setActiveTab] = useState("option-activity");

  function IsActiveComponent(component: string) {
    return (component === activeTab)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand">
        <a className="navbar-item" href="/#">
          <img src="https://camo.githubusercontent.com/33c9404f15f989e638a21f2a664a68e9b4b89b26/68747470733a2f2f692e696d6775722e636f6d2f314252423463462e706e67" alt="logo" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="buttons">
              <a href="/#"className="button is-primary stat-buttons">
                <FontAwesomeIcon icon={faUsers} />
                100
              </a>
              <a href="/#"className="button is-info stat-buttons">
              <FontAwesomeIcon icon={faFileAlt} />
                14
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="tabs is-right">
              <ul>
                <li className={IsActiveComponent("option-activity") ? "is-active" : ""}>
                  <a
                    href="/#"
                    id="option-activity"
                    onClick={() => setActiveTab("option-activity")}
                  >
                    <span><FontAwesomeIcon icon={faClock} /></span>
                    <span className="tab-text">Activity</span>
                  </a>
                </li>
                <li className={IsActiveComponent("option-keywords") ? "is-active" : ""}>
                  <a
                    href="/#"
                    id="option-keywords"
                    onClick={() => setActiveTab("option-keywords")}
                  >
                    <span><FontAwesomeIcon icon={faBraille} /></span>
                    <span className="tab-text">Keywords</span>
                  </a>
                </li>
                <li className={IsActiveComponent("option-containers") ? "is-active" : ""}>
                  <a
                    href="/#"
                    id="option-containers"
                    onClick={() => setActiveTab("option-containers")}
                  >
                    <span><FontAwesomeIcon icon={faBox} /></span>
                    <span className="tab-text">Containers</span>
                  </a>
                </li>
                <li className={IsActiveComponent("option-transfers") ? "is-active" : ""}>
                  <a
                    href="/#"
                    id="option-transfers"
                    onClick={() => setActiveTab("option-transfers")}
                  >
                    <span><FontAwesomeIcon icon={faExchangeAlt} /></span>
                    <span className="tab-text">Transfers</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
