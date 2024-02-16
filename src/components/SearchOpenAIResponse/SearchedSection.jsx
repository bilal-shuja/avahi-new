import axios from 'axios';
import { useLocation } from 'react-router-dom';
import SearchResSection from './SearchResSection';
import SearchAccordions from './SearchAccordions';
import HashLoader from "react-spinners/HashLoader";
import React, { useState, useEffect } from 'react';

const override = {
    display: "block",
    margin: "0 auto",
    marginTop: "13em",
    // marginLeft:"-9em"
  };
const SearchedSection = () => {
  const location = useLocation()
  const { data } = location.state || {};

  const [color, setColor] = useState("#1c6373");


  const [isLoading, setIsLoading] = useState(true);
  const [aiResponse, setAiResponse] = useState([]);
  const [accordionData, setAccordionData] = useState('');

  
  useEffect(() => {
    getData()
}, [data, accordionData])


const getData = async () => {
  const answerObj = {
      question: accordionData ? accordionData : data,
      username: "Alice",
      session_id: "3abc"
  }

  await axios.post('https://avahi-genai.com/get_answer', answerObj)
      .then((res) => {
          setIsLoading(false);

          setAiResponse(prevAiResponse => {
              if (prevAiResponse === null) {
                  return [res.data];
              } else {
                  return [...prevAiResponse, res.data];
              }
          });
      })
      .catch((error) => {
          console.log(error)
          setIsLoading(true);
      })
}


  return (
    <>
          <div className="loader-container">
                {
                    isLoading ? (
                        <HashLoader
                        color={color}
                        loading={isLoading}
                        cssOverride={override}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    )
                        :
                        (
                            <div>
                                {
                                    aiResponse.filter((index) => index !== 0).map((items) => {
                                        return (
                                            <>        
                                             <SearchResSection aiResponse={items} data={data} accordionData={accordionData} isLoading={isLoading} />
                                            </>

                                        )
                                    })
                                }
                                    <SearchAccordions setAccordionData={setAccordionData} />        
                                {/* <SearchBar /> */}
                            </div>
                        )
                }
            </div>
    </>
  )
}

export default SearchedSection