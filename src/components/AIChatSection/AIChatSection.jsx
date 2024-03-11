import React, { useEffect, useRef, useState } from "react";
import './AiChatBotStyles.scss'
import BotProfile from './Assets/chat-profile.png'
import clipboard from "./Assets/clipboard.svg";

// Chatbot section
const AIChatSection = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [disableInput, setDisableInput] = useState(false);
  const [aiTyping, setAiTyping] = useState(false);
  const lastMessageRef = useRef(null);

  const staticQuestionsAndAnswers = [
    {
      question: "What services do you offer?",
      answer: "I can help you with studying, brainstorming ideas, and generating business ideas.",
    },
    {
      question: "How can I get started?",
      answer: "You can start by asking me any questions you have!",
    },
    // Add more static questions and answers here as needed
  ];

  const sendMessage = () => {
    if (message.trim() === "") return; // Don't send empty messages

    setChat(prevChat => [
      ...prevChat,
      { role: "user", content: message }
    ]);
    setMessage(""); // Clear input field

    // Simulate AI typing response
    setAiTyping(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * staticQuestionsAndAnswers.length);
      const answer = staticQuestionsAndAnswers[randomIndex].answer;

      setChat(prevChat => [
        ...prevChat,
        { role: "assistant", content: answer }
      ]);
      setAiTyping(false);
      scrollToBottom();
    }, 1000);
  };

  const scrollToBottom = () => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div>
      <div className="scroll-view-component scrollbar-secondary-component">
        <div className="content-wrapper">
          <div className='chat-bot-wrapper'>
            <div className="messageWrapper">
              <div className="chatMessage">
                {chat.map((item, index) => (
                  <div
                    key={index}
                    className={item.role === "assistant" ? "messageWrap" : "messageWrapRight"}
                  >
                    {item.role === "assistant" && (
                      <>
                        <img src={BotProfile} className="" alt="assistant profile" />
                        <div className="message">
                          {item.content}
                        </div>
                      </>
                    )}
                    {item.role === "user" && (
                      <div className="message">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
                {/* Empty div for scrolling to the bottom */}
                <div ref={lastMessageRef} />
              </div>
            </div>
            <div className='bottom-content'>
              <div className='container'>
                <hr />
                <div className='d-flex'>
                  <input
                    className="form-control pt-3 pb-3 me-1"
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Message"
                    disabled={disableInput || aiTyping}
                    style={{ borderRadius: "10px" }}
                  />
                  <button
                    className='btn btn-outline-dark ms-1 rounded-3'
                    onClick={sendMessage}
                    disabled={disableInput || aiTyping}
                  >
                    <i className="fa-solid fa-paper-plane" />
                  </button>
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
