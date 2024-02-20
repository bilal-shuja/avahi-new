import React from 'react'
import { Link } from 'react-router-dom'
import tabView from '../../Images/tabs.png'
import '../TabularSection.css'

const IntroGui = () => {
    return (
        <div>
            <div className="container-fluid d-flex align-items-center justify-content-center " style={{ height: "90vh" }}>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <div className='ms-3'>
                            <p style={{ fontSize: "70px", lineHeight: "70px", fontWeight: 700 }}>AI <br /> Tabular <br /> Generator</p>
                            <p style={{ fontSize: "70px", lineHeight: "70px", fontWeight: 700 }}> </p>
                            <p style={{ fontSize: "20px" }}>Generate instant tables and graphs to get instant information</p>
                            {/* <button className='try-tab-button'>TRY NOW</button> */}

                            <div style={{ width: "200px" }}>
                                <Link to="/TabularCSV" class="button-tab-intro">
                                    <div class="button__line"></div>
                                    <div class="button__line"></div>
                                    <span class="button__text">ENTRY</span>
                                    <div class="button__drow1"></div>
                                    <div class="button__drow2"></div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={tabView} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroGui