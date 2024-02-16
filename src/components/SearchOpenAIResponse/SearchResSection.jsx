import BarChart from "./Graphs/BarChart";
import ReadMoreReact from "read-more-react";
import NotePad from "../Images/Notepad.png";
import DonutChart from "./Graphs/DonutChart";
import wolf from "../Images/building (1).png";
import wolfTwo from "../Images/building (2).png";
import wolfThree from "../Images/building (3).png";
import React, { useState, useEffect } from "react";

const SearchResSection = ({ aiResponse, accordionData, isLoading }) => {
    const [showAllSources, setShowAllSources] = useState(false);
    const numberOfInitialSources = 3;

    const toggleShowAllSources = () => {
        setShowAllSources(prevState => !prevState);
      };

  const TypewriterEffect = ({ text }) => {
    const [visibleText, setVisibleText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

 
    const words = text.split(" ");

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (currentIndex === words.length) {
          clearInterval(intervalId);
          return;
        }

        setVisibleText((prevText) => prevText + " " + words[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100); // Adjust the interval (in milliseconds) to control the speed of typing

      return () => clearInterval(intervalId);
    }, [words, currentIndex]);

    return <p className="card-text">{visibleText}</p>;
  };
  return (
    <>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1">
            {isLoading === true ? (
              <div
                className="spinner-grow"
                style={{ width: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div className="container mt-5">
                <h4 className="fw-bold ">
                  {/* {accordionData ? accordionData : "data"} */}
                </h4>
                <div className="row">
                  <div className="col-lg-8">

                  <h4 className="fw-normal  mt-5">
                      <i
                        className="fa-solid fa-align-left"
                        style={{ color: "#696cff" }}
                      />{" "}
                      &nbsp; Answer...
                    </h4>

                    <div className="text-answer">
                      <div className="card response-text-card">
                        <div className="d-flex align-items-center card-body">
                          <img
                            src={NotePad}
                            className="img-fluid"
                            alt=""
                            width={32}
                          />
                          &nbsp;&nbsp; &nbsp;&nbsp;
                          <TypewriterEffect text={aiResponse.answer} />
                        </div>
                      </div>

                   

                      <div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight fw-bold">
                          <a
                            className="text-info"
                            href="#r"
                            style={{ textDecoration: "none"  }}
                            onClick={() => alert("share-working")}
                          >
                            <i className="fa-solid fa-share text-primary" />
                            &nbsp;
                            <span className="text-black fw-normal ">Share</span>
                          </a>
                          &nbsp;&nbsp;
                          <a
                            className="text-info"
                            href="#e"
                            style={{ textDecoration: "none" }}
                            onClick={() => alert("rewrite-working")}
                          >
                            <i className="fa-solid fa-rotate text-primary"  />
                            &nbsp;
                            <span className="text-black fw-normal">
                              Rewrite
                            </span>
                          </a>
                        </div>

                        <div class="p-2 bd-highlight">
                          <a
                            className="text-info"
                            href="#d"
                            style={{ textDecoration: "none" }}
                            onClick={() => alert("thumb btn-working")}
                          >
                            <i className="fa-solid fa-thumbs-down text-primary" />
                          </a>
                        </div>
                        <div class="p-2 bd-highlight">
                          <a
                            className="text-info"
                            href="#c"
                            style={{ textDecoration: "none" }}
                            onClick={() => alert("align btn-working")}
                          >
                            <i className="fa-solid fa-align-right text-primary"/>
                          </a>
                        </div>

                        <div class="p-2 bd-highlight">
                          <a
                            className="text-info"
                            href="#f"
                            style={{ textDecoration: "none" }}
                            onClick={() => alert("clipboard btn-working")}
                          >
                            <i className="fa-solid fa-clipboard text-primary" />
                          </a>
                        </div>

                        <div class="p-2 bd-highlight">
                          <a
                            className="text-info"
                            href="#g"
                            style={{ textDecoration: "none" }}
                            onClick={() => alert("edit  btn-working")}
                          >
                            <i className="fa-solid fa-pen-to-square text-primary" />
                          </a>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>


                    <section id="response-resources-section">
                      <h4 className="fw-normal mt-4">
                        {" "}
                        <i
                          className="fa-solid fa-list"
                          style={{ color: "#696cff" }}
                        />{" "}
                        &nbsp; &nbsp;Sources...
                      </h4>

                      {/* <div className="d-flex mt-3 mb-3"> */}
                      <div className="row">
                        {aiResponse.sources.slice(0, showAllSources ? aiResponse.sources.length : numberOfInitialSources).map((items, index) => {
                          return (
                            <div className="col-lg-4 py-1 " key={index} >
                              <div className="card sources-cards " >
                                <div className="card-body">
                                  <i
                                    className="fa-brands fa-sourcetree"
                                    style={{ color: "#696cff" }}
                                  />{" "}
                                  &nbsp;
                                  <ReadMoreReact
                                    text={items}
                                    min={15}
                                    ideal={25}
                                    max={30}
                                    readMoreText="read more..."
                                  />
                                  <br />
                                  {/* <div className="mt-2">
                                <i className="fa-solid fa-eye text-warning"/>&nbsp;
                                2 more ...</div> */}
                                </div>
                              </div>
                              {/* &nbsp;&nbsp; */}
                            </div>
                          );
                        })}

                {aiResponse.sources.length > numberOfInitialSources && (
                        <div className="col-lg-4 py-1">
                        <button className="btn btn-outline-primary mt-2" onClick={toggleShowAllSources}>
                            {showAllSources ? 'Show Less' : 'View More'}
                        </button>
                        </div>
                    )}
                      </div>

                    </section>

           

                    {/* onClick={() => setAccordionData('In how many sizes llama2 is available?')} */}
                    {/* <div className='d-flex justify-content-between align-content-center border-bottom border-5 pb-2 mt-2' style={{ cursor: "pointer" }} >
                        <h5>In how many sizes llama2 is available?</h5>
                        <i className='fa-solid fa-plus mt-2 me-2' style={{ fontSize: "20px" }} />
                    </div> */}

                    {/* onClick={() => setAccordionData('What is model architecture of the Gemini?')} */}
                    {/* <div className='d-flex justify-content-between align-content-center border-bottom border-5 pb-2 mt-2' style={{ cursor: "pointer" }} >
                        <h5>What is model architecture of the Gemini?</h5>
                        <i className='fa-solid fa-plus mt-2 me-2' style={{ fontSize: "20px" }} />
                    </div> */}

                    {/* onClick={() => setAccordionData('What is Training Hardware used & Carbon Footprint for training LLAMA2?')} */}
                    {/* <div className='d-flex justify-content-between align-content-center border-bottom border-5 pb-2 mt-2' style={{ cursor: "pointer" }} >
                        <h5>What is Training Hardware used & Carbon Footprint for training LLAMA2?</h5>
                        <i className='fa-solid fa-plus mt-2 me-2' style={{ fontSize: "20px" }} />
                    </div> */}

                <section className="mt-4 mb-5">
                      <div
                        className="accordion accordion-flush "
                        id="accordionFlushExample"
                       
                      >
                        <div className="accordion-item response-text-card rounded-3">
                          <h2
                            className="accordion-header "
                            id="flush-headingOne"
                          >
                            <button
                              className="accordion-button collapsed fw-bold related-qOne"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                              style={{ fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                             How have leisure travelers' habits changed in light of the overall economy according to the 2023 report, and what implications does this have for hoteliers?

                             <i className='fa-solid fa-plus'/>
                            </button>
                          </h2>
                        </div>

                        <div className="accordion-item response-text-card mt-2">
                          <h2
                            className="accordion-header"
                            id="flush-headingTwo"
                          >
                            <button
                              className="accordion-button collapsed fw-bold related-qOne"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                              style={{ fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                            "Considering the shift in travel planning and booking behaviors observed in 2023, what are the key opportunities for hoteliers to attract and retain guests in a post-Covid travel landscape?
                             <i className='fa-solid fa-plus'/>
                            </button>
                          </h2>
                        </div>

                        <div className="accordion-item response-text-card mt-2">
                          <h2
                            className="accordion-header"
                            id="flush-headingThree"
                          >
                            <button
                              className="accordion-button collapsed fw-bold related-qOne"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                              style={{ fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                         What are the main characteristics of the American travel market, especially in relation to outbound tourism, and how does this compare to global trends?
                            <i className='fa-solid fa-plus'/>
                            </button>
                          </h2>
                        </div>


                      </div>
                    </section>

                   
                  </div>

                  <div className="col-lg-3 mx-auto">
                    {/* <div className="card-body">
                      <img
                        className="img-fluid response-img-one w-100"
                        src={wolf}
                        alt=""
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <div className="me-3">
                        <img
                          className="response-img-two"
                          src={wolfTwo}
                          alt=""
                          width={120}
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      <div>
                        <img
                          className="response-img-three"
                          src={wolfThree}
                          alt=""
                          width={120}
                          style={{ borderRadius: "20px" }}
                        />
                      </div>
                    </div> */}

                    {/* donut chart for the right info */}

                    {/* <div className="d-flex justify-content-center mt-5">
                      <DonutChart />
                    </div> */}

                    <section className="mt-4 mb-5">
                      <div
                        className="accordion accordion-flush "
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item response-text-card">
                          <h2
                            className="accordion-header "
                            id="flush-headingOne"
                          >
                            <button
                              className="accordion-button collapsed fw-bold related-qOne"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                              style={{ fontSize: "10px",display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                              "How has the role of technology and digital transformation influenced travel behaviors and expectations of tourists worldwide?
                              <i className='fa-solid fa-plus'/>
                            </button>
                          </h2>
                        </div>

                        <div className="accordion-item response-text-card mt-2">
                          <h2
                            className="accordion-header"
                            id="flush-headingTwo"
                          >
                            <button
                              className="accordion-button collapsed fw-bold related-qOne"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                              style={{ fontSize: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                             What initial steps should international chemical scientists and their families take when planning to travel to the United States?
                              <i className='fa-solid fa-plus'/>
                            </button>
                          </h2>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResSection;
