import React from 'react'
import { rightArrow } from 'src/assets'

import './stackcomponent.css';

interface StackProps {
    content : string
}

function StackComponent( {content } : StackProps) {
  return (
    <>
    <div className='stackComponent transitionEase scaleOnHover105'>
        <img className='stackComponent--rightarrow' src={rightArrow.toString()} alt="" />
        {content}
    </div>
    </>
  )
}

export default StackComponent