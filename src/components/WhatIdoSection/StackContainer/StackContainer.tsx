import React, { useEffect, useState } from 'react'
import './stackcontainer.css';
import cppIcon from '../../../assets/icons/cpp.svg'
import pythonIcon from '../../../assets/icons/python.svg';
import linuxIcon from '../../../assets/icons/linux.svg';
import tsIcon from '../../../assets/icons/typescript.svg';
import goIcon from '../../../assets/icons/golang.svg';
import { useInView } from 'react-intersection-observer';

interface stackProp {
  stackClassProp : string
}


function StackContainer( {stackClassProp} : stackProp) {
  const [ ref, inView] = useInView();
  
  const [stackClass, setStackState] = useState('stackContainer hidden')
  
  useEffect(() => {
    if (inView) {
      
      setStackState('stackContainer slideInRight')
    } 
  }, [inView, stackClass])
  // {stackClass}

  return (
    <div className={stackClass} ref={ref}>
        <img src={cppIcon.toString()} alt="C++ icon" />
        <img src={pythonIcon.toString()} alt="Python icon" />
        <img src={linuxIcon.toString()} alt="Linux icon" />
        <img src={tsIcon.toString()} alt="Typescript icon" />
        <img src={goIcon.toString()} alt="Go icon" />

    </div>
  )
}

export default StackContainer