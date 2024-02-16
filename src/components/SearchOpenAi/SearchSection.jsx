import "./SearchSection.css";
import Search from "./Search.json";
import React, { useState } from "react";
import bulb from "../Images/Lightbulb2.webp";
import { useNavigate } from "react-router-dom";
import magnifyGlass from "../Images/icons8-magnifying-glass.gif";

const SearchSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const navigateScreen = () => {
    if (searchTerm) {
      navigate("/OpenAIGUI", { state: { data: searchTerm } });
    }
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   var raw = JSON.stringify({
    //   "question": "What is the main hypothesis regarding the effect of sea lamprey nests on benthic macroinvertebrate assemblages and streambed physical heterogeneity?",
    //   "username": "Alice",
    //   "session_id": "3abc"
    //   });

    //   var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    //   // credentials: 'include',
    //   // mode: 'no-cors'

    // };

    // fetch("https://avahi-genai.com/get_answer", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
  };

  const filteredSuggestions = Search.suggestions
    .filter((suggestion) =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 4);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleImageSelection = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };
  return (
    <>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1">
            {/* <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Forms/</span> Horizontal Layouts</h4> */}
            {/* <div className="row">

  </div> */}

            <div className="">
              <h1 className="main-heading">
                Feel Free To Ask &nbsp;
                <i className="fa-solid fa-wand-magic-sparkles text-primary" />
              </h1>
              <div className="d-flex justify-content-center ">

                <div className="col-lg-7">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control search-query-input"
                      placeholder="Search anything..."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={searchTerm}
                      onChange={handleInputChange}
                      onFocus={() => setExpanded(true)}
                    />
                    <span
                      className="input-group-text search-query-input-inner"
                      id="basic-addon1"
                      onClick={navigateScreen}
                    >
                      <img
                        className="img-fluid"
                        src={magnifyGlass}
                        alt=""
                        width={23}
                        style={{cursor:"pointer"}}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={
                  selectedImages.length > 0 ? "ImageContainer mt-2" : ""
                }
              >
                {selectedImages.length > 0 && (
                  <div className="selected-images-container">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="selected-image">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Selected ${index + 1}`}
                        />
                        <span onClick={() => removeImage(index)}>&times;</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
     

              {showSuggestions === true ? null : (
                <div className="text-center mt-4 mb-4">
                  <div className="focus-btn mb-3 d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-light focus-btnn ps-3 pe-3 p-2"
                    >
                      <i className="fas fa-bullseye" /> Focus
                    </button>
                    &nbsp;&nbsp;
                    {/* <button
                      type="button"
                      className="btn btn-sm btn-light attach-btn ps-3 pe-3 p-2"
                    >
                      <i className="fas fa-plus" /> Attach
                    </button> */}
                  </div>

                  <span class="badge rounded-pill bg-light p-2 text-dark pill-one">
                    🎾 Wimbledon 2023 winners
                  </span>
                  &nbsp; &nbsp;
                  <span class="badge rounded-pill bg-light p-2 text-dark pill-two ">
                    🤖 Ai and Earning
                  </span>
                  &nbsp; &nbsp;
                  <span class="badge rounded-pill bg-light p-2 text-dark pill-three mt-3">
                    🚀 Ai and Earning
                  </span>
                </div>
              )}

              {showSuggestions === true ? null : (
                <img
                  src={bulb}
                  className="img-fluid float-end"
                  alt=""
                  width={150}
                  // style={{marginTop:"7em"}}
                />
              )}


                <div className="d-flex justify-content-center">
                {showSuggestions && (
                <ul className="suggestion-list w-75">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      style={{fontSize:"12px"}}
                    >
                      <a className="text-black">{suggestion}</a>
                    </li>
                  ))}
                </ul>
              )}
                </div>
           


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
