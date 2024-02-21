import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Notepad from '../../components/Images/Notepad.png';
import Table from '../../components/Images/table.gif'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { toast } from 'react-toastify'

import suggestions from "./Components/Suggestions";

function TabularView() {
  const { state } = useLocation();
  const csv_Name = state?.value;

  const [csvRowData, setCsvRowData] = useState([]);
  const [tableHeaders, setTableHeader] = useState([]);
  const [loading, setLoading] = useState([]);

  const [questionInput, setQuestionInput] = useState("");
  const [tabularAnswer, setTabularAnswer] = useState("");

  const [chartData, setChartData] = useState(null)
  const [chartType, setChartType] = useState("bar");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    get_CSV_data();
  }, []);

  ////GETTING CSV DATA//////////////
  function get_CSV_data() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      folder_name: "CSV files",
      csv_name: csv_Name,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://avahi-genai.com/display-csv", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const Parsed = JSON.parse(result?.top_rows_data);
        setTableHeader(result.column_names);
        setCsvRowData(Parsed);
      })
      .catch((error) => console.error(error));
  }

  ///////////GETTING CSV ANSWER ////////

  function get_Csv_Answer() {
    setLoading(true)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "question": questionInput,
      "csv_name": csv_Name
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://avahi-genai.com/get_answer_tabular", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false)
        setTabularAnswer(result.answer.Answer)
        setChartType(result?.answer?.data?.chart?.type)
        setChartData(result?.answer?.data)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
        toast.warn("Something went wrong!")
      });
  }

  const options = {
    chart: { type: chartType },
    title: { text: chartData?.title?.text },
    xAxis: { categories: chartData?.xAxis?.categories },
    yAxis: { title: { text: chartData?.yAxis?.title?.text } },
    series: chartData ? chartData.series : [],
  };

  function TableHeads({ item }) {
    return <th className="text-white p-3">{item}</th>;
  }

  function TableBody() {
    return (
      <tbody className="table-border-bottom-0 ">
        {csvRowData.map((item, index) => {
          return (
            <tr key={index}>
              {Object.values(item).map((value, id) => (
                <td key={id}>{value}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }


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
      }, 100);

      return () => clearInterval(intervalId);
    }, [words, currentIndex]);

    return <p className="card-text">{visibleText}</p>;
  };

  const handleInputChange = (e) => {
    setQuestionInput(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuestionInput(suggestion);
    setShowSuggestions(false);
  };

  // const filteredSuggestions = csv_Name === "all_video_games(cleaned).csv" ? suggestions.all_video_games ? csv_Name === "AverageTimeSpendByAUserOnSocialMedia" : suggestions.average_time_social_media ?csv_Name === "Car Sales.csv" : suggestions.car_sales ? csv_Name === "mobile_price.csv" : suggestions.mobile_price ? csv_Name === "real_estate_texas_500_2024.csv" : suggestions.real_estate_texas ? csv_Name === "Youtuber.csv" : suggestions.youtuber : null
  //   .filter((suggestion) =>
  //     suggestion.toLowerCase().includes(questionInput.toLowerCase())
  //   )
  //   .slice(0, 4);

  const filteredSuggestions = csv_Name === "all_video_games(cleaned).csv" ? 
                            suggestions.all_video_games.filter(suggestion =>
                              suggestion.toLowerCase().includes(questionInput.toLowerCase())).slice(0, 4) :
                            csv_Name === "AverageTimeSpendByAUserOnSocialMedia" ? 
                            suggestions.average_time_social_media.filter(suggestion =>
                              suggestion.toLowerCase().includes(questionInput.toLowerCase())).slice(0, 4) :
                            csv_Name === "Car Sales.csv" ? 
                            suggestions.car_sales.filter(suggestion =>
                              suggestion.toLowerCase().includes(questionInput.toLowerCase())).slice(0, 4) :
                            csv_Name === "mobile_price.csv" ? 
                            suggestions.mobile_price.filter(suggestion =>
                              suggestion.toLowerCase().includes(questionInput.toLowerCase())).slice(0, 4) :
                            csv_Name === "real_estate_texas_500_2024.csv" ? 
                            suggestions.real_estate_texas.filter(suggestion =>
                              suggestion.toLowerCase().includes(questionInput.toLowerCase())).slice(0, 4) :
                            csv_Name === "Youtuber.csv" ? 
                            suggestions.youtuber.filter(suggestion =>
                              suggestion.toLowerCase().includes(questionInput.toLowerCase())).slice(0, 4) :
                            null;

  return (
    <>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1">
            <h4 className="fw-bold mt-3 mb-4">
              <span className="text-muted fw-light"></span>
            </h4>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="" className="form-label fw-bold">
                  {/* Search Tabular AI */}
                  {csv_Name}
                </label>
                <input
                  type="text"
                  className="form-control border-primary form-control-sm"
                  id="basic-default-name"
                  placeholder="Search query..."
                  onChange={handleInputChange}
                  value={questionInput}
                />
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

              {
                loading === true ?

                  <div className="col-lg-3" style={{ marginTop: "2em" }}>
                    <button
                      className="btn btn-outline-primary btn-sm"
                    >
                      {" "}
                      Loading...
                    </button>
                  </div> :

                  questionInput &&
                  <div className="col-lg-3" style={{ marginTop: "2em" }}>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={get_Csv_Answer}
                    >
                      {" "}
                      Search
                    </button>
                  </div>

              }

            </div>

            {
              tabularAnswer ?


                <div className="text-answer">
                  <label htmlFor="" className="form-label fw-bold">
                    Answer
                  </label>
                  <div className="card btn-sm response-text-card">
                    <div className="d-flex align-items-center card-body">
                      <img
                        src={Notepad}
                        className="img-fluid"
                        alt=""
                        width={32}
                      />
                      &nbsp;&nbsp; &nbsp;&nbsp;
                      <TypewriterEffect text={tabularAnswer} />
                    </div>
                  </div>
                  {

                    chartData !== "" || chartData !== null ?
                      <>
                        <div className="card mt-2 mb-2 response-text-card" style={{ borderRadius: "10px" }}>
                          <div className="card-body">
                            <HighchartsReact
                              highcharts={Highcharts}
                              options={options}
                            />
                          </div>
                        </div>
                      </> : null
                  }
                  <hr className="my-4" />
                </div>
                : null
            }



            <div className="card mb-5">
              <h5 className="card-header">
                <span className="mt-2">CSV Tabular</span> &nbsp;&nbsp;
                <img src={Table} alt="" width={25} />
              </h5>
              <div className="table-responsive text-nowrap csv-table">
                <table className="table table-striped">
                  <thead className="bg-primary text-center">
                    {tableHeaders.map((item) => {
                      return <TableHeads item={item} />;
                    })}
                  </thead>

                  <TableBody />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabularView;
