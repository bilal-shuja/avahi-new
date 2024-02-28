import React, { useEffect, useRef, useState } from "react";
import './AiChatBotStyles.scss'
import BotProfile from './Assets/chat-profile.png'
import checkCircle from "./Assets/checkCircle.svg";
import clipboard from "./Assets/clipboard.svg";

import underConstruction from "../Images/undraw_under_construction_-46-pa.svg";
// chatbot section
const AIChatSection = () => {

  const initialMessage = {
    role: "assistant",
    content:
      "",
  };

  const [socket, setSocket] = useState(null);
  const [icon, setIcon] = useState("clipboard");
  const [clickedMessageIndex, setClickedMessageIndex] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([initialMessage]);

  const [loading, setLoading] = useState(false);
  const [aiTyping, setAiTyping] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  const lastMessegeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setChat((prev) => [...prev]);
    }, 50);

    const socket = new WebSocket(
      "wss://prod.eba-5bn4hjgy.eu-west-2.elasticbeanstalk.com/ws/socket-server/"
    );

    socket.addEventListener("open", () => {
      console.log("WebSocket connection opened.");
    });

    socket.addEventListener("error", (error) => {
      console.log("WebSocket error", error);
    });

    socket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed", event);
    });

    setSocket(socket);

    // return () => {
    //     socket.close();
    // }
  }, [])

  function handleCopyToClipboard(text, index) {
    setClickedMessageIndex(index);
    setIcon(checkCircle);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch((error) => {
        console.error("Unable to copy: " + error);
      });
    } else {
      console.error("Clipboard API is not supported in this browser.");
    }

    setTimeout(() => {
      setClickedMessageIndex(null);
      setIcon(clipboard);
    }, 1000);
  }

  const sendMessage = async () => {
    setAiTyping(true);
    const newData = {
      message: [
        ...chat,
        {
          role: "user",
          content: message,
        },
      ],
    };
    setChat(newData.message);
    setMessage("");
    try {
      if (socket) {
        setLoading(true);
        socket.send(JSON.stringify(newData));

        socket.addEventListener("message", () => {
          setAiTyping(false);
        });
      }
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong on server.😟",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      if (lastMessegeRef.current) {
        lastMessegeRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error(error)
    }
  }, [chat]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (message && !loading) {
          sendMessage();
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [message]);

  useEffect(() => {
    if (socket) {
      socket.onopen = (event) => {
        console.log("Connection established");
      };

      socket.onmessage = (e) => {
        setDisableInput(true);
        const message_ = JSON.parse(e.data);
        console.log(message_);

        setTimeout(() => {
          // setDis(false);

          setDisableInput(false);
          if (message_.message) {
            // setDis(false);
          }

          if (chat.length === 0 || chat[chat.length - 1].role === 'user') {
            // If there's no assistant message or the last message was from the user,
            // add a new response box
            setChat((prev) => [
              ...prev,
              {
                role: 'assistant',
                content: message_.message,
              },
            ]);
          } else {
            setChat((prev) => [
              ...prev.slice(0, prev.length - 1),
              {
                role: 'assistant',
                content: prev[prev.length - 1].content + message_.message,
              },
            ]);
          }
        });
      };

      socket.onerror = function (error) {
        console.log("error", error);
      };

      socket.onclose = function (event) {
        console.log(event);
      };
    }
  }, [socket, chat]);

  return (
    <div>
            <div className="scroll-view-component scrollbar-secondary-component">
            <div className="content-wrapper">
      <div className='chat-bot-wrapper'>
        <div className="messageWrapper">
          <div className="chatMessage">
            <div className="messageWrap">
              <img src={BotProfile} alt="" />
              <div className="message">
                <div className="messageHeader">
                  <span
                    style={{
                      display: "block",
                      textAlign: "right",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleCopyToClipboard(
                        "Hello! How can I assist you today?",
                        "header"
                      )
                    }
                  >
                    <img
                      src={clickedMessageIndex === "header" ? icon : clipboard}
                      alt="icon"
                      style={{ width: "17px" }}
                    />
                  </span>
                </div>
                Hello! How can I assist you today?
              </div>
            </div>


            {chat
              .filter((item, index) => index !== 0) // Exclude the initial message
              .map(
                (item, i) =>
                  item.role !== "system" && (
                    <div
                      key={i}
                      ref={
                        chat.length && chat.length - 2 <= i
                          ? lastMessegeRef
                          : null
                      }
                      className={
                        item.role === "assistant"
                          ? "messageWrap"
                          : "messageWrapRight"
                      }
                    >
                      {item.role === "assistant" ? (
                        <>
                          <img src={BotProfile} alt="assistant profile" />
                          <div className="message">
                            <span
                              style={{
                                display: "block",
                                textAlign: "right",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleCopyToClipboard(item.content, i)
                              }
                            >
                              <img
                                src={i === clickedMessageIndex ? icon : clipboard}
                                alt="icon"
                                style={{ width: "17px" }}
                              />
                            </span>

                            <div
                              id="aiMessage"
                              dangerouslySetInnerHTML={{ __html: item.content }}
                            />

                            <span
                              style={{
                                display: "block",
                                textAlign: "right",
                                fontSize: "12px",
                                color: "GrayText",
                              }}
                            >
                              {item.timestamp}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="message">
                            {item.content}
                            <span
                              style={{
                                display: "block",
                                textAlign: "right",
                                fontSize: "12px",
                                color: "GrayText",
                              }}
                            >
                              {item.timestamp}
                            </span>
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
                        </>
                      )}
                    </div>
                  )
              )}
          </div>
        </div>

        <div className='bottom-content'>
          <div className='container'>
            <hr />
            <div className='d-flex'>
              <input className="form-control pt-3 pb-3 me-1" type="search" aria-label="Search"
                disabled={disableInput || aiTyping}
                name="message"
                value={message}
                variant="outlined"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                style={{ borderRadius: "10px" }}
              />

              {
                message !== "" ? (
                  <button className='btn btn-outline-dark ms-1 rounded-3' variant="contained"
                    onClick={sendMessage}
                  > <i className="fa-solid fa-paper-plane" />
                  </button>
                ) : (
                  <button className='btn btn-outline-dark ms-1 rounded-3' variant="contained" > <i className="fa-solid fa-paper-plane" />
                  </button>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AIChatSection;
