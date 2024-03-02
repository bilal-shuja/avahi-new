import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isVisible, toggleSidebar }) => {

  const [activeItem, setActiveItem] = useState('');

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };


  return (
    <div>
      {
        isVisible && (
          <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${isVisible ? 'sidebar-open' : false}`}

          >
            <div className="app-brand demo">
              <a href="#" className="app-brand-link">
                <i className="fa-brands fa-squarespace fs-2" />
                <span className="app-brand-text demo menu-text text-uppercase fw-bolder ms-2">Avahi AI</span>
              </a>
              <a href="#" className='layout-menu-toggle menu-link  ms-auto' onClick={toggleSidebar}>
                <i className="bx bx-chevron-left bx-sm align-middle" />
              </a>

            </div>
            <div className="scroll-view scrollbar-secondary">

              <ul className="menu-inner">
                <li className={`mt-2 menu-item ${activeItem === 'GenericAI' ? 'active' : ''}`} onClick={() => handleMenuItemClick('GenericAI')}>
                  <Link to="/" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Generic AI</div>
                  </Link>
                </li>


                <li className={`mt-2 menu-item ${activeItem === 'Stability' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Stability')}>
                  <Link to="/GenerateImageArt" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-magnifying-glass" />
                    <div data-i18n="Home">Stability AI</div>
                  </Link>
                </li>


                <li className={`mt-2 menu-item ${activeItem === 'Tabular' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Tabular')}>
                  <Link to="/TabularCsvIntro" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-compass" />
                    <div data-i18n="Explore">Tabular AI</div>
                  </Link>
                </li>

                <li className={`mt-2 menu-item ${activeItem === 'Chatbot' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Chatbot')}>
                  <Link to="/AIChat" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-headphones" />
                    <div data-i18n="AI Chat">AI ChatBot</div>
                  </Link>
                </li>


                <li className="menu-header small text-uppercase" ><span className="menu-header-text">Up Comings</span></li>



                <li className={`mt-2 menu-item ${activeItem === 'Summarizer' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Summarizer')}>
                  <Link to="/Summarizer" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-paperclip" />
                    <div data-i18n="AI Advisor">Summarizer</div>
                  </Link>
                </li>


                <li className={`mt-2 menu-item ${activeItem === 'Meetings' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Meetings')}>
                  <Link to="/MeetingInsight" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-paper-plane" />
                    <div data-i18n="AI Snapshot">Meeting Insights</div>
                  </Link>
                </li>

                <li className={`mt-2 menu-item ${activeItem === 'TextToVideo' ? 'active' : ''}`} onClick={() => handleMenuItemClick('TextToVideo')}>
                  <Link to="/TextToVideo" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid  fa-photo-film" />
                    <div data-i18n="AI Advisor">Text To Video</div>
                  </Link>
                </li>


                <li className={`mt-2 menu-item ${activeItem === 'Extractor' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Extractor')}>
                  <Link to="/DataExtractor" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-gears" />
                    <div data-i18n="AI Snapshot">Data Extractor</div>
                  </Link>
                </li>

                {/* Misc */}
                <li className="menu-header small text-uppercase" ><span className="menu-header-text">Misc</span></li>
                <li className="menu-item">
                  <a href="#r" target="_blank" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-support" />
                    <div data-i18n="Support">Support</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#r" target="_blank" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-file" />
                    <div data-i18n="Documentation">Documentation</div>
                  </a>
                </li>
              </ul>

            </div>
          </aside>
        )
      }

    </div>
  )
}

export default Sidebar