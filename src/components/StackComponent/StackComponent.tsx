import React from 'react'
import { rightArrow } from 'src/assets'

import './stackcomponent.css';

interface StackProps {
    content : string
}

function StackComponent( {content } : StackProps) {
  return (
    <>
    <div className='stackComponent'>
        <img className='stackComponent--rightarrow' src={rightArrow.toString()} alt="" />
        {content}
    </div>
    </>
  )
}

export default StackComponent