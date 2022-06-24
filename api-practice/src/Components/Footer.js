import '../mainPage.css';
import React from 'react';
import GitHubLogo from '../GitHub-logo-green.png';

const footer_links = [
  {
    name:'Portfolio',
    link: 'https://yoselineguerrero.github.io/dev-portfolio/'
  }, {
    name:'Code for this Site',
    link: 'https://github.com/YoselineGuerrero/react-api-pratice'
  }, {
    name:'GitHub Profile',
    link: 'https://github.com/YoselineGuerrero'
  }, {
    name:'LinkedIn',
    link: 'https://www.linkedin.com/in/yoseline-guerrero-a78526175/'
  },
]

export default function Footer(){
  return(
    <>
    <p style={{marginTop:'24px', fontSize:'12px'}} className='subtitle'> Found a bug? Create a <a id='footer-links'  className='a-link' href='https://github.com/YoselineGuerrero/react-api-pratice/issues' target='_blank' rel="noreferrer">issue</a> or <a className='a-link' id='footer-links' href='mailto:yguerrerocs@gmail.com?subject=Bug%20Found%20in%20GitHub%20Project' target='_blank' rel="noreferrer">contact me.</a></p>
    <hr style={{marginTop:'40px', width:'90%'}}/>
    <div id='footer'>
      <div id='footer-img'>
        <img src={GitHubLogo} width="35px"  alt=''></img>
        <span id='footer-title'>© 2022 Yoseline Guerrero</span>
      </div>
      <div id='footer-a'>
        {footer_links.map((link) => (
          <a id='footer-links' key={link.name} href={link.link} target='_blank' rel="noreferrer">{link.name}</a>
        ))}
      </div>
      <div id='footer-img-small'>
        <img src={GitHubLogo} width="35px"  alt=''></img>
        <span id='footer-title'>© 2022 Yoseline Guerrero</span>
      </div>
    </div>
    </>
  );
}
