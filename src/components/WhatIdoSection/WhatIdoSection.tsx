import React, { useEffect, useState } from 'react'
import './whatidosection.css'
import {useInView} from 'react-intersection-observer';

import StackContainer  from './StackContainer/StackContainer'

import myself from './../../assets/myself.png'

function WhatIdoSection() {


  const [ ref, inView] = useInView();
  
  const [photoClass, setPhotoState] = useState('photo hidden');
  const [textClass, setTextState] = useState('whatidoContainer');

  // const []
  // let photoClass: string = 'photo hidden';

  useEffect(() => {
    if (inView) {
      // photoClass = 'photo slideInLeft';
      setPhotoState('photo slideInLeft');
      setTextState('whatidoContainer fadeIn')
    } 

  }, [inView, photoClass])

  console.log(inView)
  return (
    <>
        <section className='whatidosection'>
          <div className={textClass}>
            <div className={photoClass} ref={ref} >
              <img src={myself} alt="Myself (Jose Carlos)" /> 
            </div>
            <div className='textContainer--whatido '>
              <div className='textContainer--text '>
                <div className='textContainer--text-content '>
                  <p className='textContainer--text-whatido '>What I do</p>
                  <p className='textContainer--text-stacks' >I'm a passionate programmer who wishes to explore several tech stacks</p>

                </div>
                                {/* <div className='stackContainer' >
                </div> */}
                <StackContainer stackClassProp='class'></StackContainer>
              </div>
            </div>

            
          </div>
        </section>
    </>
  )
}

export default WhatIdoSection