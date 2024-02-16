import React from "react";
import "./GenerateImageArt.css";
import {Link , useNavigate} from 'react-router-dom';
import combactAi from '../Images/combatAI.png';

const GenerateImageArtSection = () => {
  const navigate = useNavigate();

  function navigateToImageArtTool(){
    navigate("/GenerateImageArtTool")
  }
  return (
    <>
         <div className="scroll-view-component scrollbar-secondary-component">
<div className="content-wrapper">
<div className="container-xxl flex-grow-1">
{/* <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Forms/</span> Horizontal Layouts</h4> */}
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-10 d-block mx-auto">
              <div className="card generate-image-card mb-3">
                <img
                  src={combactAi}
                  className="img-fluid card-img-top gen-ai-image"
                  alt="GenAi"
                />
                <div className="card-body d-flex justify-content-between me-2">
                    <div>
                    <h5 className="card-title fw-bold">Text to Image</h5>
                  <p className="card-text gen-ai-text">
                    Transform your words into stunning AI visuals with our text-to-image feature
                  </p>
                    </div>
       

                <button onClick={navigateToImageArtTool} className="btn btn-outline-dark btn-xs" style={{borderRadius:"0.7em",}}>Generate Art</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
        </div>

    </>
  )
}

export default GenerateImageArtSection