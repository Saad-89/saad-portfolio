import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import CaseStudyPage from './pages/CaseStudy/CaseStudyPage.jsx';
import './styles/globals.css';
import './styles/fonts.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
