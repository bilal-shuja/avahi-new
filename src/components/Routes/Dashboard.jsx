import React, { useState, useEffect } from "react";
import Forms from "../Forms/Forms";
import Sheets from "../Sheets/Sheets";
import Navbar from "../Layout/Navbar";
import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";

import SearchSection from "../SearchOpenAi/SearchSection";
import SearchedSection from "../SearchOpenAIResponse/SearchedSection";
import GenerateImageArtSection from "../GenerateImageArt/GenerateImageArtSection";
import GenerateImageArtToolSection from "../GenerateImageArt/GenerateImageArtToolSection";

import TabularAISection from "../TabularAISection/TabularAISection";

import TabularCSV from '../Tabulars/TabularCSV';
import TabularView from '../Tabulars/TabularView';

import AIChatSection from "../AIChatSection/AIChatSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroGui from "../Tabulars/Components/IntroGui";
import ErrorPage from "../ErrorPages/ErrorPage";
import ChatIntroGui from "../AIChatSection/Assets/ChatIntroGui";
import Summarizer from "../SummarizeAi/Summarizer";
import MeetingsInsights from "../MeetingsAi/MeetingsInsights";
import TextToVideo from "../TextVideoAi/TextToVideo";
import DataExtractor from "../DataExtractorAi/DataExtractor";

const Dashboard = () => {

  const [sidebarVisible, setSidebarVisible] = useState(
    localStorage.getItem('sidebarVisible') === 'true'
  );

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    localStorage.setItem('sidebarVisible', sidebarVisible);
  });

  return (
    <>
      <Router>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />

            <div className="layout-page">
              <Navbar toggleSidebar={toggleSidebar} />
              <Routes>
                <Route path="/" element={<SearchSection />} />

                <Route path="/OpenAIGUI" element={<SearchedSection />} />

                <Route
                  path="/GenerateImageArt"
                  element={<GenerateImageArtSection />}
                />

                <Route
                  path="/GenerateImageArtTool"
                  element={<GenerateImageArtToolSection />}
                />

                <Route
                  path="/TabularAISection"
                  element={<TabularAISection />}
                />

                <Route
                  path="/Summarizer"
                  element={<Summarizer />}
                />

                <Route path="/AIChat" element={<ChatIntroGui />} />
                <Route path="/AIChatSection" element={<AIChatSection />} />

                <Route
                  path="/MeetingInsight"
                  element={<MeetingsInsights />}
                />

                <Route
                  path="/TextToVideo"
                  element={<TextToVideo />}
                />

                <Route
                  path="/DataExtractor"
                  element={<DataExtractor />}
                />

                <Route path="/TabularCSV" element={<TabularCSV />} />
                <Route
                  path="/TabularCsvIntro"
                  element={<IntroGui />}
                />
                <Route
                  path="/TabularView"
                  element={<TabularView />}
                />
                <Route path="/Forms" element={<Forms />} />
                <Route path="/Sheets" element={<Sheets />} />
                <Route path="/ErrorPage" element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Dashboard;
