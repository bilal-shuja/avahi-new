import React, { useEffect, useState } from "react";
import './TabularSection.css'
import { Link } from "react-router-dom";

function TabularCSV() {
  const [csvData, setCsvData] = useState([]);
  function Get_CSV() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      folder_name: "CSV files",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://avahi-genai.com/list-files", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCsvData(result);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    Get_CSV();
  }, []);

  function CsvFolder({ item }) {

    return (
      <>
        <>
          <div className="col-lg-12">
            {/* <div className="card  shadow bg-transparent border border-primary mb-3 ">
              <div className="card-body ">
                <h5 className="card-title text-primary">Choose CSV's</h5>
                <p className="card-text">{item}</p>
                <Link to="/TabularView" state={{ value: item }} className="btn btn-primary text-white">
                  Generate &nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div> */}

<div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        {item}
        </div>
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>
  </div>
</div>

          </div>
        </>
      </>
    );
  }

  return (
    <>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1">
            {/* <h4 className="fw-bold mt-5  mb-4">
              <span className="text-muted fw-light"></span>Tabular AI
            </h4> */}

            <div className="row mb-5">
              <h2 className="mb-3 mt-4"> Choose any CSV &nbsp;&nbsp;
                <i className="fa-solid fa-file text-primary" />
              </h2>
              {csvData?.map((item) => {
                return (
                  <CsvFolder item={item} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabularCSV;
