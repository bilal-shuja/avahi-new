import React from 'react'
import './ErrorStyles.scss'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    
    return (
        <div className='scroll-view-component scrollbar-secondary-component'>
            <div className='content-wrapper main'>
                <section className="wrapper" style={{overflow:"hidden"}}>
                    <div className="container">
                        <div id="scene" className="scene" data-hover-only="false">
                            <div className="circle" data-depth="1.2" />
                            <div className="one" data-depth="0.9">
                                <div className="content">
                                    <span className="piece" />
                                    <span className="piece" />
                                    <span className="piece" />
                                </div>
                            </div>
                            <div className="two" data-depth="0.60">
                                <div className="content">
                                    <span className="piece" />
                                    <span className="piece" />
                                    <span className="piece" />
                                </div>
                            </div>
                            <div className="three" data-depth="0.40">
                                <div className="content">
                                    <span className="piece" />
                                    <span className="piece" />
                                    <span className="piece" />
                                </div>
                            </div>
                            <p className="p404" data-depth="0.50">404</p>
                            <p className="p404" data-depth="0.10">404</p>
                        </div>
                        <div className="text">
                            <article>
                                <p>Uh oh! Looks like you got lost. <br />Go back to the homepage!</p>
                                <button><Link to='/'>Home</Link></button>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default ErrorPage