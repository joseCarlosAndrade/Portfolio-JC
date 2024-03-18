import React from 'react'
import './introductionsection.css';

function IntroductionSection() {
  return (
    <>
        <section className='introductionSection'>
            <div className='textContainer'>
                <div className='textFirstLine'>
                  <p className='introductionText'>
                      Hi! I'm
                  </p>
                  <p className='textJose'> Jose</p>
                </div>

                <div className='textSecondLine'>
                  Werlcome to my portfolio.
                </div>
                
            </div>
        </section>
    </>
  )
}

export default IntroductionSection