import React from 'react';
import './App.css';
import { Footer, Header , IntroductionSection, WhatIdoSection} from './components';


function App() {
  return (
    <>
      {/* <Header></Header> */}
      <div className='appContainer'> 
        <IntroductionSection></IntroductionSection>
        <WhatIdoSection></WhatIdoSection>
        <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
