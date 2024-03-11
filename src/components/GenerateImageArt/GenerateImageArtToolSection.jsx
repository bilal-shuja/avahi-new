import { useState, useRef } from "react";
// import Select from "react-select";
import HashLoader from "react-spinners/HashLoader";
import SampleImg from "../Images/sampleImg.jpg";
import ErrorPage from "../ErrorPages/ErrorPage";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const GenerateImageArtToolSection = () => {

  const [showButtons, setShowButtons] = useState(false);
  const [imageInput, setImageInput] = useState([]);
  const [imageTextInput, setImageTextInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [color, setColor] = useState("#696cff");
  const [showErrorPage, setShowErrorPage] = useState(false)
  const [errorTxt,setErrorTxt]=useState("It usually takes upto 1 minute")
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const options = [
    { value: "3d-model", label: "3d-model" },
    { value: "analog-film", label: "analog-film" },
    { value: "anime", label: "anime" },
    { value: "cinematic", label: "cinematic" },
    { value: "comic-book", label: "comic-book" },
    { value: "digital-art", label: "digital-art" },
    { value: "enhance", label: "enhance" },
    { value: "fantasy-art", label: "fantasy-art" },
    { value: "isometric", label: "isometric" },
    { value: "line-art", label: "line-art" },
    { value: "low-poly", label: "low-poly" },
    { value: "modeling-compound", label: "modeling-compound" },
    { value: "neon-punk", label: "neon-punk" },
    { value: "origami", label: "origami" },
    { value: "photographic", label: "photographic" },
    { value: "pixel-art", label: "pixel-art" },
    { value: "tile-texture", label: "tile-texture" },
  ];

  const ImgStyling = {
    height: windowSize.current[1] < 700 && windowSize.current[0] > 700 ? "22em" : windowSize.current[1] > 780 && windowSize.current[0] > 700 ? "33em" : windowSize.current[1] > 850 && windowSize.current[0] > 700 ? "100em" : "30em",
    borderRadius: "1em"
  }

  const handleArtStyleOptions = (optionValue) => {
    setSelectedOption(optionValue)
  }

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  const handleDelete = (index) => {
    setImageInput((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${image}`;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function generateImage() {
    setErrorTxt("It usually takes upto 1 minute")
    setLoading(true);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://oo15wsy0ef.execute-api.us-east-1.amazonaws.com/v11/stabilityai?imageText=${imageTextInput}&style_preset=${selectedOption}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("this is response,", result)
        console.log("yay i got run")
        if(result){
          setLoading(false);

          if(result.base_64_img_str){
            setShowErrorPage(false)
            setImageInput((prevImages) => [...prevImages, result.base_64_img_str]);
          }
          else{
            setShowErrorPage(true)

          }
        }
    

      })
      .catch((error) => {
        console.error("this is error", error);
        setShowErrorPage(true)
        setLoading(false);

      });
  }

  const minuteSeconds = 60;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;

  return (
    <div>
      {
        showErrorPage === false ? (
          <div className="scroll-view-component scrollbar-secondary-component">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1">

                <h4 className="fw-bold mb-4 mt-3">
                  <span className="text-muted fw-light"></span> Turn Imaginations Into Reality
                </h4>
                {
                  windowSize.current[0] < 800 &&

                  <div className="art-style ms-3">
                    <div className="btn-group dropup">
                      <button type="button" className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {selectedOption ? selectedOption : "Art Styles"}
                      </button>
                      <ul className="dropdown-menu scrollable-menu">
                        {
                          options.map((option) => {
                            return (

                              <li key={option.value}><a className="dropdown-item" defaultValue={selectedOption} onClick={() => handleArtStyleOptions(option.value)}>{option.value}</a></li>
                            )

                          })
                        }
                      </ul>
                    </div>
                  </div>
                }
                <div className="mb-5 mt-2">
                  <div className="centered-div">
                    {loading === true ? (
                      <>
                      <div className="d-flex justify-content-center">
                        <CountdownCircleTimer
                          {...timerProps}
                          colors="#a5a6ff"
                          duration={minuteSeconds}
                          initialRemainingTime={minuteSeconds}
                          onComplete={() => {
                          setErrorTxt("Its taking more than expected please wait..")
                          }}
                        >
                          {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                              {renderTime("seconds", getTimeSeconds(elapsedTime))}
                            </span>
                          )}
                        </CountdownCircleTimer>
                        </div>
                        <p className="mt-2">{errorTxt}</p>
                      </>
                    ) : imageInput && imageInput.length > 0 ? (
                      <div
                        className="card mb-5" style={{ width: "400px" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={`data:image/jpeg;base64,${imageInput[imageInput.length - 1]
                            }`}
                          className="img-fluid card-img-top Image-Styling-custom"
                          alt="generated image"
                        />

                        {showButtons && (
                          <div
                            className="overlay-buttons"
                            style={{
                              position: "absolute",
                              top: 0,
                              right: 0,
                              padding: "20px",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <button
                              className="btn btn-sm btn-outline-danger mb-2"
                              onClick={() => handleDelete(imageInput.length - 1)}
                            >
                              <i className="fa-solid fa-trash" />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-info"
                              onClick={() =>
                                handleDownload(imageInput.length - 1)
                              }
                            >
                              <i className="fa-solid fa-download" />
                            </button>
                          </div>
                        )}
                      </div>

                    ) : (
                      <div className="">
                        <img
                          src={SampleImg}
                          className="img-fluid card-img-top Image-Styling-custom"
                          alt="..."
                          style={{ width: "400px" }}
                        />
                      </div>

                    )}
                  </div>
                  &nbsp;&nbsp;
                  {loading === true ? null : (
                    <div className="mt-1">
                      {/* <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              /> */}


                    </div>
                  )}
                  <div className="search-bar-head mb-3 p-2">
                    <div className="search-bar">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add prompt here"
                        value={imageTextInput}
                        onChange={(e) => setImageTextInput(e.target.value)}
                      />
                      {
                        imageTextInput && loading === false &&
                        <button
                          type="button"
                          className="ms-2 me-2 arrow-btn"
                          onClick={generateImage}
                        >
                          <i className="fa-solid fa-arrow-up" />
                        </button>
                      }

                      {
                        windowSize.current[0] > 800 &&

                        <div className="art-style ms-3">
                          <div className="btn-group dropup">
                            <button type="button" className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {selectedOption ? selectedOption : "Art Styles"}
                            </button>
                            <ul className="dropdown-menu scrollable-menu">
                              {
                                options.map((option) => {
                                  return (

                                    <li key={option.value}><a className="dropdown-item" defaultValue={selectedOption} onClick={() => handleArtStyleOptions(option.value)}>{option.value}</a></li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : <ErrorPage />
      }

    </div>
  );
};

export default GenerateImageArtToolSection;