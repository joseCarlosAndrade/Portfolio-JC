import React from 'react'
import './3denginesection.css';
import { engineDemo, cppIcon } from 'src/assets';

function EngineSection() {
  return (
    <section className='engineaisection'>
        <div className='engineaisection--container'>
            <div className='engineaisection--container-mediainfo'>
                {/* <div className='engineaisection--container-mediainfo-image'></div> */}
                <img className='engineaisection--container-mediainfo-image transitionEase scaleOnHover105' src={engineDemo} alt="" />
                <div className='engineaisection--container-mediainfo-alt'>Game screenshot</div>
            </div>

            <div className='engineaisection--container-texts'>
                <div className='engineaisection--container-texts--header'>
                    <img className='engineaisection--container-texts--header-cppicon transitionEase scaleOnHover120' src={cppIcon.toString()} alt="" />
                    <div className='engineaisection--container-texts--header-title'>3D Shape rendering engine</div>
                </div>

                <div className='engineaisection--container-texts--infotext'>
                Again with C++ and SDL2, I implemented a 3D engine that renders simple geometric shapes with perspective and frame buffer, applying several computer graphics concepts.
                </div>
                <div className='engineaisection--container-texts--github'>
                    <div className='engineaisection--container-texts--github-check'>Check it out on my &nbsp;</div>
                    <div className='engineaisection--container-texts--github-green transitionEase scaleOnHover120'>Github</div>
                </div>
            </div>

        </div>
    </section>  
  )
}

export default EngineSection;