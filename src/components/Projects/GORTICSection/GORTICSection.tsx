import React from 'react'
import { goIcon, gorticDemo } from 'src/assets'

import './gorticsection.css';

function GORTICSection() {
  return (
    <section className='gorticsection'>
    <div className='gorticsection--container'>
        <div className='gorticsection--container-mediainfo'>
            {/* <div className='gorticsection--container-mediainfo-image'></div> */}
            <img className='gorticsection--container-mediainfo-image transitionEase scaleOnHover105' src={gorticDemo} alt="" />
            <div className='gorticsection--container-mediainfo-alt'>Game screenshot</div>
        </div>

        <div className='gorticsection--container-texts'>
            <div className='gorticsection--container-texts--header'>
                <img className='gorticsection--container-texts--header-cppicon transitionEase scaleOnHover120' src={goIcon.toString()} alt="" />
                <div className='gorticsection--container-texts--header-title'>Local Gartic GOlang Implementation (in progress)</div>
            </div>

            <div className='gorticsection--container-texts--infotext'>
            Using Golang and several networking concepts such as broadcasting, data serialization and deserialization, authentication and registration, I’m implementing locally the game Gartic using raylib for the graphical rendering.
            </div>
            <div className='gorticsection--container-texts--github'>
                <div className='gorticsection--container-texts--github-check'>Check it out on my &nbsp;</div>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/joseCarlosAndrade/GORTIC' className='gorticsection--container-texts--github-green transitionEase scaleOnHover120'>Github</a>
            </div>
        </div>

    </div>
</section>
  )
}

export default GORTICSection