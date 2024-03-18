import React from 'react'
import './whatidosection.css'

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
                <div className='stackContainer' >
                {/* insert stacks here */}
                </div>
              </div>
            </div>

            
          </div>
        </section>
    </>
  )
}

export default WhatIdoSection