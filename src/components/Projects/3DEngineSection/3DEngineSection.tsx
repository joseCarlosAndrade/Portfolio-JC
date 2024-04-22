import React from 'react'
import './3denginesection.css';
import { engineDemo, cppIcon } from 'src/assets';

function EngineSection() {
  return (
    <section className='enginesection'>
        <div className='enginesection--container'>
            <div className='enginesection--container-mediainfo'>
                {/* <div className='enginesection--container-mediainfo-image'></div> */}
                <img className='enginesection--container-mediainfo-image transitionEase scaleOnHover105' src={engineDemo} alt="" />
                <div className='enginesection--container-mediainfo-alt'>Game screenshot</div>
            </div>

            <div className='enginesection--container-texts'>
                <div className='enginesection--container-texts--header'>
                    <img className='enginesection--container-texts--header-cppicon transitionEase scaleOnHover120' src={cppIcon.toString()} alt="" />
                    <div className='enginesection--container-texts--header-title'>3D Shape rendering engine</div>
                </div>

                <div className='enginesection--container-texts--infotext'>
                Again with C++ and SDL2, I implemented a 3D engine that renders simple geometric shapes with perspective and frame buffer, applying several computer graphics concepts.
                </div>
                <div className='enginesection--container-texts--github'>
                    <div className='enginesection--container-texts--github-check'>Check it out on my &nbsp;</div>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/joseCarlosAndrade/dev-jc/tree/main/cpp/sdl2/3drendering' className='enginesection--container-texts--github-green transitionEase scaleOnHover120'>Github</a>
                </div>
            </div>

        </div>
    </section>  
  )
}

export default EngineSection;