import React, { useEffect, useState } from "react";
import './TabularSection.css'
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import ErrorPage from "../ErrorPages/ErrorPage";

function TabularCSV() {
  const [csvData, setCsvData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ErrorPages, setErrorPage] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    marginTop: "10em",
    marginLeft: "-9em",
  };

  function Get_CSV() {
    setLoading(true)
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

    fetch("https://text.avahi-genai.com/list-files", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setErrorPage(false)
        setCsvData(result);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
        setErrorPage(true)
      });
  }

  useEffect(() => {
    Get_CSV();
  }, []);

  function CsvFolder({ item }) {

    return (
      <>
        <div className="col-lg-12">
          <div className="ag-courses_item">
            <Link to="/TabularView" state={{ value: item }} className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
                {item}
              </div>
              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  Click here to generate
                </span>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      {
        ErrorPages === false ? (
          <>
            <div className="scroll-view-component scrollbar-secondary-component">
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1">
                  {/* <h4 className="fw-bold mt-5  mb-4">
              <span className="text-muted fw-light"></span>Tabular AI
            </h4> */}

                  <div className="row mb-5">
                    {
                      loading === true ? (
                        <>
                          <div className="d-flex justify-content-center align-items-center vh-100">
                            <HashLoader
                              color={"#696cff"}
                              loading={loading}
                              // cssOverride={override}
                              size={50}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <h2 className="mb-3 mt-4"> Select any CSV &nbsp;&nbsp;
                            <i className="fa-solid fa-file text-primary" />
                          </h2>
                          {csvData?.map((item) => {
                            return (
                              <CsvFolder item={item} />
                            );
                          })}
                        </>
                      )
                    }

                  </div>
                </div>
              </div>
            </div>
          </>
        ) : <ErrorPage />
      }

    </div>
  );
}

export default TabularCSV;
