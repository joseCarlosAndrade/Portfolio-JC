import React from 'react';
import './App.css';
import { AboutMeSection, Footer , IntroductionSection, WhatIdoSection} from './components';


function App() {
  return (
    <>
      
      <div className='appContainer'> 
        <IntroductionSection></IntroductionSection>
        <WhatIdoSection></WhatIdoSection>
        <AboutMeSection></AboutMeSection>
        <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
