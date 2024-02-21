import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Notepad from '../../components/Images/Notepad.png';
import Table from '../../components/Images/table.gif'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

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
        console.log(result)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
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
              {/* Map through the values of each object */}
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
            <h4 className="fw-bold mt-3 mb-4">
              <span className="text-muted fw-light"></span>
            </h4>

            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="" className="form-label fw-bold">
                  {/* Search Tabular AI */}
                  {
                    csv_Name
                  }
                </label>
                <input
                  type="text"
                  className="form-control border-primary form-control-sm"
                  id="basic-default-name"
                  placeholder="Search query..."
                  onChange={(e) => setQuestionInput(e.target.value)}
                />
              </div>

              {
                loading === true ?

                  <div className="col-lg-3" style={{ marginTop: "2em" }}>
                    <button
                      className="btn btn-outline-primary btn-sm"
                    // onClick={get_Csv_Answer}
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

                  <div className="card mt-2 mb-2 response-text-card" style={{ borderRadius: "10px" }}>
                    <div className="card-body">
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                      />
                    </div>
                  </div>
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
