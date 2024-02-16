import React from 'react';
import './SearchOpenAIResponse.css';

const SearchAccordions = ({setAccordionData}) => {
  return (
    <>
        <div className='d-flex justify-content-between align-content-center border-bottom border-5 pb-2 mt-2' style={{ cursor: "pointer" }} onClick={() => setAccordionData('In how many sizes llama2 is available?')}>
                        <h5>In how many sizes llama2 is available?</h5>
                        <i className='fa-solid fa-plus mt-2 me-2' style={{ fontSize: "20px" }} />
                    </div>
                    <div className='d-flex justify-content-between align-content-center border-bottom border-5 pb-2 mt-2' style={{ cursor: "pointer" }} onClick={() => setAccordionData('What is model architecture of the Gemini?')}>
                        <h5>What is model architecture of the Gemini?</h5>
                        <i className='fa-solid fa-plus mt-2 me-2' style={{ fontSize: "20px" }} />
                    </div>
                    <div className='d-flex justify-content-between align-content-center border-bottom border-5 pb-2 mt-2' style={{ cursor: "pointer" }} onClick={() => setAccordionData('What is Training Hardware used & Carbon Footprint for training LLAMA2?')}>
                        <h5>What is Training Hardware used & Carbon Footprint for training LLAMA2?</h5>
                        <i className='fa-solid fa-plus mt-2 me-2' style={{ fontSize: "20px" }} />
                    </div>

    </>
  )
}

export default SearchAccordions