import React from 'react';
import { downArrow, lineThickSeparator, meComputerSection } from 'src/assets';

import './aboutmesection.css';

import {StackComponent} from 'src/components';

function AboutMeSection() {
  return (
    <>
        <div className='aboutmesection'>
            <div className='aboutme--container'>
                <div className='aboutme--container-upper'> 
                    <div className='aboutme--container-upper--aboutme-texts'>
                        <div className='aboutme--container-upper--aboutme-texts-main'>
                            About me
                        </div>
                        <img className='aboutme--container-upper--aboutme-texts-divider' 
                            src={lineThickSeparator.toString()} alt="" />
                        <div className='aboutme--container-upper--aboutme-texts-text'> 
                        I’m a curious and passionate undergraduate student who is seeking oportunities to develop my capabilities of problem solving on software development. 
                        </div>
                    </div>

                    <div className='aboutme--container-upper--profile'>
                        <div className='aboutme--container-upper--profile-texts'>

                            <div className='aboutme--container-upper--profile-texts-main'>
                                Profile
                            </div>

                            <div className='aboutme--container-upper--profile-texts-text'>
                            Software developer with experience on  Python 3, C++ and Javascript. Check my resume here! I’ve worked on the development of both academics and enterprises projects, from which I gained a notable experience with stacks like:
                            </div>

                            <div className='aboutme--container-upper--profile-texts-stacks'>
                                <StackComponent content='Computer Networks'></StackComponent>
                                <StackComponent content='Github'></StackComponent>
                                <StackComponent content='Flask'></StackComponent>
                                <StackComponent content='Nodejs'></StackComponent>
                                <StackComponent content='React'></StackComponent>
                                <StackComponent content='Linux infrastructure'></StackComponent>
                            </div>

                        </div>
                        <img className='aboutme--container-upper--profile-image' 
                            src={meComputerSection} alt="An art drawing of myself" />
                    </div>
                </div>

                <div className='aboutme--container-bestprojects'>
                    <img className='aboutme--container-bestprojects-arrow' src= {downArrow.toString()} alt=''/>
                    <div className='aboutme--container-bestprojects-text'>My best projects</div>
                    <img className='aboutme--container-bestprojects-arrow' src= {downArrow.toString()} alt=''/>
                </div>

            </div>
        </div>
    </>
  )
}
  
export default AboutMeSection