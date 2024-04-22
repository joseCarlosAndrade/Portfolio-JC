import React from 'react';
import './footer.css';


import { githubIcon, linkedinIcon, instagramIcon } from 'src/assets';

function Footer() {
  return (
    <>
        <div className='footerContainer'>
          <div className='footerContainer--items'>
            <div className='footerContainer--items-social'>
              <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/jos%C3%A9-carlos-andrade-do-nascimento-71186421a/">
                <img className='transitionEase scaleOnHover105' src={linkedinIcon} alt="Linkedin icon" /> 
              </a>
              <a target='_blank' rel='noopener noreferrer' href="https://github.com/joseCarlosAndrade">
                <img className='transitionEase scaleOnHover105' src={githubIcon} alt="Github icon" />
              </a>
              <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/jc.andrade.n/">
                <img className='transitionEase scaleOnHover105' src={instagramIcon} alt="Instagram icon" />
              </a>
            </div>
            <div className='footerContainer--items--divider' ></div>
            <div className='footerContainer--items--name'>Made by Jose Carlos Andrade do Nascimento</div>
            
          </div>
        </div>
    </>
  )
}

export default Footer