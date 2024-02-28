import "./SearchSection.scss";
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


  const cardData = [
    {
      title: "Zero-cost Possibilities",
      description: "Hubble lets users borrow USDH for a one-time",
      icon: "fa-solid fa-user"
    },
    {
      title: "Multi-Asset Collateral",
      description: "Deposit a variety of assets on Hubble over multiple sources",
      icon: "fa-solid fa-mug-saucer"
    },
    {
      title: "Get Yield on Deposits",
      description: "While your collateral is deposited, delegate it.",
      icon: "fa-solid fa-cloud"
    },
    {
      title: "Get up to 11x Leverage",
      description: "Hubble’s capital-efficient 110% collateral ratio.",
      icon: "fa-solid fa-bookmark"
    },
  ]
  return (
    <>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="">
            <h1 className="main-heading">
              Ask data &nbsp;
              <i className="fa-solid fa-wand-magic-sparkles text-primary" />
            </h1>

            <div className="d-flex justify-content-center ">

              <div className="col-lg-7">
                <div className="row">

                  {
                    cardData.map((items) => {
                      return (
                        <>
                          <div className="col-lg-4 mb-1 p-1">
                            <div className="card">
                              <div className="d-flex">
                                <div className="icon-card  mt-3 ms-1 me-1">
                                  <i className={items.icon}></i>
                                </div>
                                <div>
                                  <p className="card-title mt-3 mb-3" style={{ fontSize: "13px", fontWeight: 600 }}>{items.title}</p>
                                  <p className="card-description" style={{ marginTop: "-15px", fontSize: "11px" }}>{items.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }

                </div>

              </div>
            </div>

            <div className="fixed-bottom">
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

              {/* {showSuggestions === true ? null : (
                <img
                  src={bulb}
                  className="img-fluid float-end"
                  alt=""
                  width={150}
                // style={{marginTop:"7em"}}
                />
              )} */}

              <div className="d-flex justify-content-center">
                {showSuggestions && (
                  <ul className="suggestion-list w-75">
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{ fontSize: "12px" }}
                      >
                        <a className="text-black">{suggestion}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>


              <div className="mb-2">
                <div className="row">
                  <div className="col-lg-6 mx-auto">
                    <div className="">
                      <div className="input-group">
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
                            style={{ cursor: "pointer" }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
