import React from 'react';
import './App.css';
import { 
    AboutMeSection, Footer , IntroductionSection, WhatIdoSection, SnakeAISection, EngineSection,
    GORTICSection
  } from './components';


function App() {
  return (
    <>
      
      <div className='appContainer'> 
        <IntroductionSection></IntroductionSection>
        <WhatIdoSection></WhatIdoSection>
        <AboutMeSection></AboutMeSection>
        <SnakeAISection></SnakeAISection>
        <EngineSection></EngineSection>
        <GORTICSection></GORTICSection>
        <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
