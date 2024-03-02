import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { TypeAnimation } from 'react-type-animation';
import './AiChatBotStyles.scss'

import clipboard from "./Assets/clipboard.svg";
import BotProfile from './Assets/chat-profile.png'
import checkCircle from './Assets/checkCircle.svg'

const AIChatSection = () => {

  const [StrActive, setStrActive] = useState(true);
  const StrActiveRef = useRef(StrActive);
  const [userPrompt, setUserPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [hasTouch, setHasTouch] = useState(false);
  const [icon, setIcon] = useState(clipboard)

  const lastMessegeRef = useRef(null);
  const introPrompt = "I'm Avahi, your AI assistant. How can I help?";

  function convertDegrees(inputString) {
    let convertedString = inputString.replace(/u00b0/g, String.fromCharCode(176));
    convertedString = convertedString.replace(/u00ba/g, String.fromCharCode(176));
    convertedString = convertedString.replace(/(\d)"°/g, "$1°");
    return convertedString;
  }

  const stopStreaming = () => {
    setStrActive(false);
    StrActiveRef.current = false;
    console.log('stop clicked', 'streaming: ', StrActiveRef.current);
    setLoading(false);
  };

  const postMessage = async () => {
    setLoading(true);
    try {
      const url = 'https://text.avahi-genai.com/return-text/';
      const apiKey = '123tyrhgtydhs';
      // const userMessage = 'what is density level required for GAB';

      const data = {
        single_message: userPrompt,
        list_of_messages: messageHistory,
      };
      // console.log(data.single_message)
      const api_response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          'X-Api-Key': apiKey
        },
        body: JSON.stringify(data),
      });
      if (!api_response.ok) {
        throw new Error('Network response was not ok.');
      }
      setLoading(false);

      const reader = api_response.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';
      setMessageHistory(curr => [...curr, { role: 'assistant', content: fullResponse }])
      while (true) {
        console.log('streaming: ', StrActive);
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        if (StrActiveRef.current) {
          const decodedText = decoder.decode(value, { stream: true });
          for (const char of decodedText) {
            if (char != '"')
              fullResponse += char + '';
          }
          fullResponse = fullResponse.replace(/\n/g, '');
          fullResponse = fullResponse.replace(/\\n/g, '<br>');
          fullResponse = fullResponse.replace(/\\/g, '"');
          fullResponse = convertDegrees(fullResponse);
        }
        setMessageHistory(curr => {
          if (curr.length > 0) {
            const updatedHistory = [...curr];
            updatedHistory[curr.length - 1] = { role: 'assistant', content: fullResponse };
            return updatedHistory;
          } else {
            return [...curr, { role: 'assistant', content: fullResponse }];
          }

        });
      }
      StrActiveRef.current = true;
    } catch (error) {
      setError(error.message || 'An error occurred while fetching data.');
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };


  const userAddhistory = (e) => {
    e.preventDefault();
    if (userPrompt.length > 0) {
      setUserPrompt('');
      setMessageHistory(curr => [...curr, { role: 'user', content: userPrompt }]);
      postMessage();
    }

    else {
      setUserPrompt('');
    }
  }

  const textareaRef = useRef(null);
  useEffect(() => {
    // Check if the ref is not null before attempting to focus
    if (textareaRef.current && !hasTouch) {
      textareaRef.current.focus();
    }
  }, [hasTouch]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    setHasTouch(isTouchDevice);
  }, [])


  const handleTextareaKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !hasTouch) {
      event.preventDefault();
      userAddhistory(event);
    }
  };


  const shareFeedback = (response) => {
    if (response === "Positive") {
      toast.success("Thank you for your feedback!");
    }
    else {
      toast.warn("Thank you for your feedback!")
    }
  }

  function handleCopyToClipboard(text) {
    setIcon(checkCircle);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch((error) => {
        console.error("Unable to copy: " + error);
      });
    } else {
      console.error("Clipboard API is not supported in this browser.");
    }

    setTimeout(() => {
      setIcon(clipboard);
    }, 1000);
  }

  useEffect(() => {
    try {
      if (lastMessegeRef.current) {
        lastMessegeRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error(error)
    }
  }, [messageHistory]);

  return (
    <div>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className='chat-bot-wrapper'>
            <div className="messageWrapper">
              <div className="chatMessage">
                <div className={`messageWrap ${(messageHistory.length) ? 'hidden' : 'inline-block'}`} >
                  <img src={BotProfile} alt="assistant profile" />
                  <div className="message">
                    <div id="aiMessage" >
                      <TypeAnimation
                        splitter={(str) => str.split('')}
                        sequence={[
                          500,
                          introPrompt,
                          8500,
                        ]}
                        cursor={false}
                        speed={{ type: 'keyStrokeDelayInMs', value: 35 }}
                        omitDeletionAnimation={true}
                        repeat={1}
                      />
                    </div>
                  </div>
                </div>


                <div  >
                  {
                    messageHistory.map((item, index) => {
                      if (item.role === "user") {
                        return (
                          <>
                            <div ref={
                              messageHistory.length && messageHistory.length > 0
                                ? lastMessegeRef
                                : null} className="messageWrapRight">
                              <div className="message">
                                {item.content}
                              </div>
                              <div
                                style={{
                                  height: "30px",
                                  width: "30px",
                                  backgroundColor: "#232323",
                                  borderRadius: "25px",
                                }}
                              >
                                <i className="fa-regular fa-user text-white ms-2 mt-1" />
                              </div>
                            </div>
                          </>
                        )
                      }
                      else {
                        const isLastMessage = index === messageHistory.length - 1;
                        if (isLastMessage && loading) {
                          return (
                            <>
                            <div ref={
                              messageHistory.length && messageHistory.length > 0
                                ? lastMessegeRef
                                : null} className="messageWrap">
                              <img src={BotProfile} alt="assistant profile" />
                              <div className="message">
                                {/* <div
                                id="aiMessage"
                                dangerouslySetInnerHTML={{ __html: `${item.content}` }}
                              /> */}

                                <div className="d-flex justify-content-center">
                                  <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                  </div>
                                </div>


                              </div>
                            </div>
                          </>
                          )
                        }
                        else {
                          return (
                            <>
                              <>
                              <div ref={
                                messageHistory.length && messageHistory.length > 0
                                  ? lastMessegeRef
                                  : null} className="messageWrap">
                                <img src={BotProfile} alt="assistant profile" />
                                <div className="message">
                                  <span
                                    style={{
                                      display: "block",
                                      textAlign: "right",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleCopyToClipboard(item.content)}
                                  >
                                    <img
                                      src={icon}
                                      alt="icon"
                                      style={{ width: "17px" }}
                                    />
                                  </span>
                                  <div
                                    id="aiMessage"
                                    dangerouslySetInnerHTML={{ __html: `${item.content}` }}
                                  />
                                  {
                                    item.content.length > 20 ? (
                                      <>
                                        <div className='d-flex justify-content-end pt-1' >
                                          <div className="yes" onClick={() => shareFeedback('Positive')}>
                                            <i className='fa-solid fa-thumbs-up'></i>
                                          </div>
                                          <div className="no ms-2" onClick={() => shareFeedback('Negative')}>
                                            <i className='fa-solid fa-thumbs-down'></i>
                                          </div>
                                        </div>
                                      </>
                                    ) : null
                                  }
                                </div>
                              </div>
                            </>
                            </>
                          )
                        }
                      }
                    })
                  }
                </div>
              </div>
            </div>

            <div className='bottom-content'>
              <div className='container'>
                <hr />
                <div className='d-flex'>
                  <input className="form-control pt-3 pb-3 me-1" type="search" aria-label="Search"
                    name="message"
                    variant="outlined"
                    placeholder="Message"
                    style={{ borderRadius: "10px" }}
                    ref={textareaRef}
                    value={userPrompt}
                    onChange={(e) => { setUserPrompt(e.target.value) }}
                    onKeyDown={handleTextareaKeyDown}
                  />

                  {
                    loading === true ? (
                      <button className='btn btn-outline-dark ms-1 rounded-3' variant="contained"
                        onClick={stopStreaming}
                      > <i className="fa-solid fa-circle-stop" />
                      </button>
                    ) : (
                      <button className='btn btn-outline-dark ms-1 rounded-3' variant="contained"
                        onClick={userAddhistory}
                      > <i className="fa-solid fa-paper-plane" />
                      </button>
                    )
                  }

                </div>
                {
                  <p className='text-danger'>{error}</p>
                }

                <p className='text-center mt-0 mb-0'>Be as specific as possible when framing your questions. AI technology can make mistakes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatSection;
