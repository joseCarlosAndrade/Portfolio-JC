import React from 'react'
import './stackcontainer.css';
import cppIcon from '../../../assets/icons/cpp.svg'
import pythonIcon from '../../../assets/icons/python.svg';
import linuxIcon from '../../../assets/icons/linux.svg';
import tsIcon from '../../../assets/icons/typescript.svg';
import goIcon from '../../../assets/icons/golang.svg';




function StackContainer() {
  return (
    <div className='stackContainer'>
        <img src={cppIcon.toString()} alt="C++ icon" />
        <img src={pythonIcon.toString()} alt="Python icon" />
        <img src={linuxIcon.toString()} alt="Linux icon" />
        <img src={tsIcon.toString()} alt="Typescript icon" />
        <img src={goIcon.toString()} alt="Go icon" />

    </div>
  )
}

export default StackContainer