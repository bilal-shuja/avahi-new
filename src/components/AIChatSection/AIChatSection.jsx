import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TypeAnimation } from 'react-type-animation';
import { useCallback } from 'react';
import axios from 'axios';
import './AiChatBotStyles.scss'

import clipboard from "./Assets/clipboard.svg";
import BotProfile from './Assets/chat-profile.png'
import checkCircle from './Assets/checkCircle.svg'

import Logo from './Assets/chat-profile.png';
import cross from './Assets/clipboard.svg'

const AIChatSection = () => {

  const [disable, setDisable] = useState(true);
  const [StrActive, setStrActive] = useState(true);
  const StrActiveRef = useRef(StrActive);
  const [userPrompt, setUserPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [streamON, setSteamON] = useState(false);
  const [currChat, setCurrChat] = useState(null);
  const [freeTrial, setFreeTrial] = useState(true);
  const [isPremiumUser, setPremiumUser] = useState(false);
  const [isSubscribed, setSubscribed] = useState(false);
  const [publishableKey, setPublishableKey] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [modal, setModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [open, setOpen] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [hasTouch, setHasTouch] = useState(false);
  const [isUpgradeDiv, setUpgradeDiv] = useState(false);

  const [icon, setIcon] = useState(clipboard)

  const lastMessegeRef = useRef(null);



  const introPrompt = "I'm Pine, your AI assistant. How can I help?";

  function convertDegrees(inputString) {
    // Use a regular expression to find and replace the Unicode escape sequence
    let convertedString = inputString.replace(/u00b0/g, String.fromCharCode(176));
    convertedString = convertedString.replace(/u00ba/g, String.fromCharCode(176));
    convertedString = convertedString.replace(/(\d)"°/g, "$1°");
    return convertedString;
  }

  useEffect(() => {
    const pKey = 'wss://prod.eba-5bn4hjgy.eu-west-2.elasticbeanstalk.com/ws/socket-server/';
    setPublishableKey(() => {
      return pKey;
    });
  }, [])

  const stopStreaming = () => {
    setStrActive(false);
    StrActiveRef.current = false;
    console.log('stop clicked', 'streaming: ', StrActiveRef.current);
    setLoading(false);
  };

  const postMessage = async () => {
    setLoading(true);
    try {
      const url = 'https://pineai.co/return-text/';
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
          Accept: "application/json, text/plain, /",
          "Content-Type": "application/json",
          'x-api-key': apiKey
        },
        body: JSON.stringify(data),
      });
      if (!api_response.ok) {
        throw new Error('Network response was not ok.');
      }

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
          setResponse(fullResponse);
        }
        setMessageHistory(curr => {
          // console.log('curr length', curr.length);
          if (curr.length > 0) {
            const updatedHistory = [...curr];
            // If there are existing messages, update the content of the last object
            updatedHistory[curr.length - 1] = { role: 'assistant', content: fullResponse };
            return updatedHistory;
          } else {
            // If there are no existing messages, add a new object


            return [...curr, { role: 'assistant', content: fullResponse }];
          }

        });
      }
      // console.log('message history', messageHistory);
      setSteamON(true);
      StrActiveRef.current = true;
      setLoading(false);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching data.');
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };


  useEffect(() => {
    if (streamON && currChat === null) {

      const chatHistCreate = 'https://pineai.co/api/chat/user-chatting-create';
      let accessToken = localStorage.getItem('access')
      const reqHeader = { 'Authorization': `Bearer ${accessToken}` };
      const reqBody = { 'chats': messageHistory };
      axios.post(chatHistCreate, reqBody, {
        headers: reqHeader,
      })
        .then(response => {
          // console.log('Response new:', response.data);
          let newChathist = chatHistory;
          newChathist.map((v, index) => {
            if (v.head === 'Most Recent') {
              newChatHistFunc();
              // console.log([response.data].concat(v.value));
            }
          })
          setCurrChat(response.data.id);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      setSteamON(false)
    }
    else if (streamON && currChat !== null) {
      const chatUpdate = `https://pineai.co/api/chat/user-chatting/${currChat}`;
      let accessToken = localStorage.getItem('access')
      const reqHeader = { 'Authorization': `Bearer ${accessToken}` };
      const reqBody = { 'chats': messageHistory };
      axios.put(chatUpdate, reqBody, {
        headers: reqHeader,
      })
        .then(response => {
        })
        .catch(error => {
          console.error('Error:', error);
        });
      setSteamON(false)
    }

  }, [streamON]);

  const checkIfPremium = () => {
    const checkPremium = 'https://pineai.co/api/auth/user-details';
    let accessToken = localStorage.getItem('access');
    const reqHeader = { 'Authorization': `Bearer ${accessToken}` };

    axios.get(checkPremium, {
      headers: reqHeader,
    }).then((response) => {
      const userDetails = response.data;
      const isTrial = userDetails.data.free_trail;
      const isPremium = userDetails.data.is_premium_user;
      const isSubscribed = userDetails.data.is_subscribed;
      console.log("subscribed: ", isSubscribed);
      if (isSubscribed) {
        setUpgradeDiv(false)
      } else {
        setUpgradeDiv(true)
      }
      setPremiumUser((prev) => {
        return isPremium
      });
      setFreeTrial((prev) => {
        return isTrial
      });
      setSubscribed((prev) => {
        return isSubscribed;
      })
    }).catch(error => console.log('user details error: ', error))
  }

  useState(() => {
    checkIfPremium();
  }, [])

  const unsubPremium = () => {
    const unsuburl = 'https://pineai.co/api/auth/unsubscribe/';
    const accessT = localStorage.getItem('access');
    if (!accessT) {
      console.log('access not found');
    }
    const reqHeader = {
      headers: {
        'Authorization': `Bearer ${accessT}`
      }
    };
    axios.post(unsuburl, {}, reqHeader)
      .then(response => {
        console.log('Response:', response.data);
        window.location.reload();
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.error('unsubscribe api error:', errorMessage);
        toast.error(errorMessage, {
          className: 'top-16', // Adjust the position as needed
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: 'colored', // Use the colored theme for red color
          style: {
            backgroundColor: 'red', // Set the background color to red
          },
        });
      });
  }


  const logoutPost = async () => {
    const logoutURL = 'https://pineai.co/api/auth/user_logout';
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refreshtoken');
    const reqHeader = { 'Authorization': `Bearer ${accessToken}` };
    const reqBody = { 'refresh_token': `${refreshToken}` };
    axios.post(logoutURL, reqBody, {
      headers: reqHeader,
    })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const changePayment = async () => {
    try {
      const accessToken = localStorage.getItem('access');
      const reqHeader = { 'Authorization': `Bearer ${accessToken}` };

      // Use Axios for the fetch operation
      const response = await axios.post('https://pineai.co/api/auth/update-payment-checkout', {}, {
        headers: reqHeader,
      });

      const session = response.data; // Assuming the session data is in the response data

      // Stripe object is now available, redirect to Checkout
      if (publishableKey !== '') {
        const stripe = window.Stripe(publishableKey);
        const result = await stripe.redirectToCheckout({ sessionId: session.sessionId });
        if (result.error) {
          alert(result.error.message);
        }
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogOut = () => {
    logoutPost();
    localStorage.removeItem('access');
    localStorage.removeItem('refreshtoken');
    setTimeout(() => {
      window.location.href = '/';
    }, 1800);
    toast.success('Logged out successfully! Redirecting to Home page', {
      className: 'top-16',
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
      style: {
        backgroundColor: '#F6F8FF' // Set the background color to red
      },
    });
  };

  //--------------------

  const userAddhistory = (e) => {
    e.preventDefault();
    checkIfPremium();
    if (freeTrial || isPremiumUser) {
      if (userPrompt.length > 0) {
        setDisable(false)
        setUserPrompt('');
        setMessageHistory(curr => [...curr, { role: 'user', content: userPrompt }]);
        postMessage();
      }
    }
    else {
      setUserPrompt('');
      setModal(!modal);
    }
  }

  // console.log(messageHistory);

  //------------------

  //------------------
  const newChatHistFunc = () => {
    const chattingListUrl = 'https://pineai.co/api/chat/user-chatting-list';
    let accessToken = localStorage.getItem('access')
    const reqHeader = { 'Authorization': `Bearer ${accessToken}` };
    axios.get(chattingListUrl, {
      headers: reqHeader,
    })
      .then(response => {
        setChatHistory(response.data.result);
        // console.log(response.data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    newChatHistFunc();
  }, [])


  const handleSearch = useCallback(() => {
    const query = searchQuery.toLowerCase();
    const foundItems = [];

    if (query) {
      chatHistory.forEach((object) => {
        const matchingItems = object.value.filter((item) =>
          item.title.toLowerCase().startsWith(query)
        );

        foundItems.push(
          ...matchingItems.map((matchingItem) => ({
            id: matchingItem.id,
            title: matchingItem.title,
          }))
        );
      });
    }

    setSearchResults(foundItems);
  }, [searchQuery, chatHistory]);


  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery, handleSearch]);


  const fetchChat = (chatID) => {
    setCurrChat(chatID);
    const chatHistoryUrl = `https://pineai.co/api/chat/user-chatting/${chatID}`;
    let accessToken = localStorage.getItem('access')
    const reqHeader = { 'Authorization': `Bearer ${accessToken}` };
    axios.get(chatHistoryUrl, {
      headers: reqHeader,
    })
      .then(response => {
        // console.log('Response:', response.data.chats);
        setMessageHistory(response.data.chats)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  const newChatFunc = () => {
    setMessageHistory([]);
    setCurrChat(null);
    setSelectedButton(null);
  }

  // These are  test prompt lists that describes the chat conversation for a styling purpose
  //-------Styling---------

  const ChatHistStyle = {
    scrollbarGutter: 'stable'
  }

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setShowSideBar(!showSideBar);
    }
  }
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setShowSideBar(true);
    }
  }, []);

  // Modal

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const cancelModal = () => {
    setCancel(!cancel);
  };
  if (cancel) {
    document.body.classList.add('active-cancel-modal')
  } else {
    document.body.classList.remove('active-cancel-modal')
  }

  const textareaRef = useRef(null);
  useEffect(() => {
    // Check if the ref is not null before attempting to focus
    if (textareaRef.current && !hasTouch) {
      textareaRef.current.focus();
    }
  }, [modal, hasTouch]);


  const selectedBtn = (index) => {
    setSelectedButton(index);
  }
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

  const txHeight = 30;

  useEffect(() => {
    const textareas = document.querySelectorAll('textarea');

    textareas.forEach((textarea) => {
      if (textarea.value === '') {
        textarea.style.height = `${txHeight}px`;
        textarea.style.overflowY = 'auto';
      } else {
        textarea.style.height = `${textarea.scrollHeight}px`;
        textarea.style.overflowY = 'auto';
      }

      textarea.addEventListener('input', onInput, false);
    });

    return () => {
      textareas.forEach((textarea) => {
        textarea.removeEventListener('input', onInput, false);
      });
    };
  }, []); // Run the effect only once when the component mounts

  const onInput = function () {
    this.style.height = '0';
    this.style.height = `${this.scrollHeight}px`;
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
                        return (
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
                                  onClick={() =>
                                    handleCopyToClipboard(item.content)
                                  }
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
                        )
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
                    // disabled={disableInput || aiTyping}
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
                <p className='text-center'>Be as specific as possible when framing your questions. AI technology can make mistakes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatSection;
