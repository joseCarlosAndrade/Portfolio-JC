import React from 'react'

import './snakeaisection.css';
import { cppIcon, snakeAiDemo } from 'src/assets';

function SnakeAiSection() {
  return (

    <section className='snakeaisection'>
        <div className='snakeaisection--container'>
            <div className='snakeaisection--container-mediainfo'>
                {/* <div className='snakeaisection--container-mediainfo-image'></div> */}
                <img className='snakeaisection--container-mediainfo-image transitionEase scaleOnHover105' src={snakeAiDemo} alt="" />
                <div className='snakeaisection--container-mediainfo-alt'>Game screenshot</div>
            </div>

            <div className='snakeaisection--container-texts'>
                <div className='snakeaisection--container-texts--header'>
                    <img className='snakeaisection--container-texts--header-cppicon transitionEase scaleOnHover120' src={cppIcon.toString()} alt="" />
                    <div className='snakeaisection--container-texts--header-title'>Snakes that plays by themselves! (solo)</div>
                </div>

                <div className='snakeaisection--container-texts--infotext'>
                A Neural Network that I’ve written entirely on C++ from scratch (using only Eigen for matrix operations and SDL2 for graphic rendering for the Snake game). It uses the Genetic Evolution Algorithm, in which each iteration selects the best fitness score from the individuals and uses them to evolve to the next generation. 
                </div>
                <div className='snakeaisection--container-texts--github'>
                    <div className='snakeaisection--container-texts--github-check'>Check it out on my &nbsp;</div>
                    <div className='snakeaisection--container-texts--github-green transitionEase scaleOnHover120'>Github</div>
                </div>
            </div>

        </div>
    </section>
    
  )
}

export default SnakeAiSection