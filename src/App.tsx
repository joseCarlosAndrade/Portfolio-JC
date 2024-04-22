import React from 'react';
import './App.css';
import { 
    AboutMeSection, Footer , IntroductionSection, WhatIdoSection, SnakeAISection
  } from './components';


function App() {
  return (
    <>
      
      <div className='appContainer'> 
        <IntroductionSection></IntroductionSection>
        <WhatIdoSection></WhatIdoSection>
        <AboutMeSection></AboutMeSection>
        <SnakeAISection></SnakeAISection>
        <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
