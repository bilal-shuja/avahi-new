import React from 'react';
import underConstruction from '../Images/undraw_under_construction_-46-pa.svg';

const Summarizer = () => {
  return (
    <>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1">
            <h4 className="fw-bold mt-4"><span className="text-muted fw-light"></span>AI Summarizer Coming soon...</h4>
            <p className='mb-3 pb-5' style={{fontWeight:350, marginTop:"-5px"}} >Revolutionize your reading experience with our AI-powered summarizer</p>
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

export default Summarizer