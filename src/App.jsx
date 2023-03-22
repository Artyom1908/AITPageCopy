import React, { useState, useContext } from 'react'
import Body from "./Body.jsx";
import Header from "./Header.jsx";
import Courses from "./Courses.jsx";
import Branches from "./Branches.jsx";
import AITPage from "./AITPage.jsx";
import LanguageProvider from './LanguageProvider';
function App() {
  return (
    <>
      <LanguageProvider>
        
        <Header />
        <Body />
        <Courses />
        <Branches />
        <AITPage />
      </LanguageProvider>
    </>

  )
}

export default App
