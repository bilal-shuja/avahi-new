import React from 'react';
import underConstruction from '../Images/undraw_under_construction_-46-pa.svg';

const TextToVideo = () => {
    return (
        <>
            <div className="scroll-view-component scrollbar-secondary-component">
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1">
                        <h4 className="fw-bold mt-4"><span className="text-muted fw-light"></span>Text To Video Coming soon...</h4>
                        <p className='mb-3 pb-5' style={{ fontWeight: 350, marginTop: "-5px" }} >Unlock the power of visual storytelling with our innovative text-to-video AI. <br /> Transform words into captivating visuals effortlessly.</p>
                        <div className="row">
                            <div className="col-lg-6 d-block mx-auto">
                                <img className="img-fluid" src={underConstruction} alt="" width={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextToVideo