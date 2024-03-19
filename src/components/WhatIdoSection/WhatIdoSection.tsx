import React from 'react'
import './whatidosection.css'

import StackContainer  from './StackContainer/StackContainer'

function WhatIdoSection() {
  return (
    <>
        <section className='whatidosection'>
          <div className='whatidoContainer' >
            <div className='photo' > </div>
            <div className='textContainer--whatido'>
              <div className='textContainer--text'>
                <p className='textContainer--text-whatido'>What I do</p>
                <p className='textContainer--text-stacks' >I'm a passionate programmer who wishes to explore several tech stacks</p>
                {/* <div className='stackContainer' >
                </div> */}
                <StackContainer></StackContainer>
              </div>
            </div>

            
          </div>
        </section>
    </>
  )
}

export default WhatIdoSection