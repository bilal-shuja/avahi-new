import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [isSubMenuOneOpen, setIsSubMenuOneOpen] = useState(false);
  const [isSubMenuTwoOpen, setIsSubMenuTwoOpen] = useState(false);
  const [isSubMenuThreeOpen, setIsSubMenuThreeOpen] = useState(false);
  const [isSubMenuFourOpen, setIsSubMenuFourOpen] = useState(false);
  const [isSubMenuFiveOpen, setIsSubMenuFiveOpen] = useState(false)

  const SubMenuToggle = (menu) => {
    if (menu === 'Layouts') {
      setIsSubMenuOneOpen(!isSubMenuOneOpen)
    }
    else if (menu === 'Account') {
      setIsSubMenuTwoOpen(!isSubMenuTwoOpen)
    }
    else if (menu === 'Connection') {
      setIsSubMenuThreeOpen(!isSubMenuThreeOpen)
    }
    else if (menu === 'Misc') {
      setIsSubMenuFourOpen(!isSubMenuFourOpen)
    }
    else if (menu === 'Interface') {
      setIsSubMenuFiveOpen(!isSubMenuFiveOpen)
    }

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
                <li className="menu-item active">
                  <Link to="/" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Generic AI</div>
                  </Link>
                </li>


                <li className="menu-item mt-4">
                  <Link to="/GenerateImageArt" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-magnifying-glass" />
                    <div data-i18n="Home">Stability AI</div>
                  </Link>
                </li>


                <li className="menu-item mt-2">
                  <Link to="/TabularCsvIntro" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-compass" />
                    <div data-i18n="Explore">Tabular AI</div>
                  </Link>
                </li>


                <li className="menu-header small text-uppercase" ><span className="menu-header-text">Up Comings</span></li>



                <li className="menu-item mt-2">
                  <Link to="/AIAdvisorSection" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-paperclip" />
                    <div data-i18n="AI Advisor">AI Advisor</div>
                  </Link>
                </li>


                <li className="menu-item mt-2">
                  <Link to="/AIChat" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-headphones" />
                    <div data-i18n="AI Chat">AI Chat</div>
                  </Link>
                </li>

                <li className="menu-item mt-2">
                  <Link to="/AISnapShotSection" className="menu-link">
                    <i className="menu-icon tf-icons fa-solid fa-paper-plane" />
                    <div data-i18n="AI Snapshot">AI Snapshot</div>
                  </Link>
                </li>



                {/* Layouts */}
                {/* <li className="menu-item">
          <a href="#b" className={`menu-link menu-toggle ${isSubMenuOneOpen ? 'open' : ''}`}  
            onClick={() => SubMenuToggle('Layouts')}  style={{cursor:"pointer"}}>
            <i className="menu-icon tf-icons bx bx-layout" />
            <div data-i18n="Layouts">Layouts</div>
          </a>
          <ul className={`menu-sub ${isSubMenuOneOpen ? 'open' : 'close'}`}>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Without menu">Without menu</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Without navbar">Without navbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Container">Container</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Fluid">Fluid</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <div data-i18n="Blank">Blank</div>
              </a>
            </li>
          </ul>
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Pages</span>
        </li>


        <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
        <li className="menu-item">
          <Link to="/Forms" className="menu-link">
            <i className="menu-icon tf-icons bx bx-collection" />
            <div data-i18n="Basic">Cards</div>
          </Link>
        </li> */}
                {/* 

        <li className="menu-item">
          <a href="#h" className="menu-link menu-toggle"
          onClick={() => SubMenuToggle('Interface')} style={{cursor:"pointer"}}
          >
            <i className="menu-icon tf-icons bx bx-box" />
            <div data-i18n="User interface">User interface</div>
          </a>
          <ul className={`menu-sub ${isSubMenuFiveOpen ? 'open' : 'closeFive'}`}
          >
            <li className="menu-item">
              <a href="ui-accordion.html" className="menu-link">
                <div data-i18n="Accordion">Accordion</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-alerts.html" className="menu-link">
                <div data-i18n="Alerts">Alerts</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-badges.html" className="menu-link">
                <div data-i18n="Badges">Badges</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-buttons.html" className="menu-link">
                <div data-i18n="Buttons">Buttons</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-carousel.html" className="menu-link">
                <div data-i18n="Carousel">Carousel</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-collapse.html" className="menu-link">
                <div data-i18n="Collapse">Collapse</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-dropdowns.html" className="menu-link">
                <div data-i18n="Dropdowns">Dropdowns</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-footer.html" className="menu-link">
                <div data-i18n="Footer">Footer</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-list-groups.html" className="menu-link">
                <div data-i18n="List Groups">List groups</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-modals.html" className="menu-link">
                <div data-i18n="Modals">Modals</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-navbar.html" className="menu-link">
                <div data-i18n="Navbar">Navbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-offcanvas.html" className="menu-link">
                <div data-i18n="Offcanvas">Offcanvas</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-progress.html" className="menu-link">
                <div data-i18n="Progress">Progress</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-spinners.html" className="menu-link">
                <div data-i18n="Spinners">Spinners</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-tabs-pills.html" className="menu-link">
                <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-toasts.html" className="menu-link">
                <div data-i18n="Toasts">Toasts</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-tooltips-popovers.html" className="menu-link">
                <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="ui-typography.html" className="menu-link">
                <div data-i18n="Typography">Typography</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-copy" />
            <div data-i18n="Extended UI">Extended UI</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="extended-ui-text-divider.html" className="menu-link">
                <div data-i18n="Text Divider">Text Divider</div>
              </a>
            </li>
          </ul>
        </li> */}

                {/* <li className="menu-item">
          <a href="icons-boxicons.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-crown" />
            <div data-i18n="Boxicons">Boxicons</div>
          </a>
        </li>

        <li className="menu-item">
          <Link to="/Sheets" className="menu-link">
            <i className="menu-icon tf-icons bx bx-table" />
            <div data-i18n="Tables">Tables</div>
          </Link>
        </li> */}
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