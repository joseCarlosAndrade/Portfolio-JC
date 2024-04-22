import React from 'react';
import './App.css';
import { 
    AboutMeSection, Footer , IntroductionSection, WhatIdoSection, SnakeAISection, EngineSection
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
        <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
