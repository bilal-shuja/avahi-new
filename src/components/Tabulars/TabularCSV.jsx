import React, { useEffect, useState } from "react";
import './TabularSection.css'
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

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
          <div className=" col-md-6 col-xl-4">
            <div className="card  shadow bg-transparent border border-primary mb-3 ">
              <div className="card-body ">
                <h5 className="card-title text-primary">Choose CSV's</h5>
                <p className="card-text">{item}</p>


                <Link to="/TabularView" state={{ value: item }} className="btn btn-primary text-white">
                  Generate &nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-right" />
                </Link>
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
            <h4 className="fw-bold mt-5  mb-4">
              <span className="text-muted fw-light"></span>Tabular AI
            </h4>

            {/* <div className="row">
<div className="col-md-6 col-xl-4">
  <div className="card shadow-none bg-transparent border border-primary mb-3">
    <div className="card-body">
      <h5 className="card-title">Primary card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up.</p>
    </div>
  </div>
</div>

</div> */}


            <div className="row mb-5">
              <h2 className="text-center mb-5"> Choose any CSV &nbsp;&nbsp;
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
