import React from 'react';
import './App.css';
import { Footer , IntroductionSection, WhatIdoSection} from './components';


function App() {
  return (
    <>
      
      <div className='appContainer'> 
        <IntroductionSection></IntroductionSection>
        <WhatIdoSection></WhatIdoSection>
        <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
