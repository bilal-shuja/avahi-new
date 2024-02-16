import React from 'react'

const SearchBarSection = () => {
    
    const getData = async () => {
        const answerObj = {
            question: "In how many sizes llama2 is available",
            username: "Alice",
            session_id: "3abc"
        };
        try {
            const response = await fetch('https://avahi-genai.com/get_answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(answerObj)
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
  return (
    <>
       <div className='search-bar-head'>
                    <div className="search-bar">
                        <div>
                            <i className='fa-solid fa-circle-plus' />
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ask to follow-up..."
                        />
                        <div className="form-check form-switch mb-3 me-4">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <p className='mt-2'>Copilot</p>
                        <button type='button' className='ms-2 me-2 arrow-btn' onClick={() => getData()}>
                            <i className='fa-solid fa-arrow-up' />
                        </button>
                    </div>
                </div>
    </>
  )
}

export default SearchBarSection