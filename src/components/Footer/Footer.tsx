import React from 'react';
import './footer.css';


import { githubIcon, linkedinIcon, instagramIcon } from 'src/assets';

function Footer() {
  return (
    <>
        <div className='footerContainer'>
          <div className='footerContainer--items'>
            {/* <div className='footerContainer--items--social' ></div> */}
            <img className='transitionEase scaleOnHover105' src={linkedinIcon} alt="Linkedin icon" />
            <img className='transitionEase scaleOnHover105' src={githubIcon} alt="Github icon" />
            <img className='transitionEase scaleOnHover105' src={instagramIcon} alt="Instagram icon" />
            <div className='footerContainer--items--divider' ></div>
            <div className='footerContainer--items--name'>Made by Jose Carlos Andrade do Nascimento</div>
            
          </div>
        </div>
    </>
  )
}

export default Footer