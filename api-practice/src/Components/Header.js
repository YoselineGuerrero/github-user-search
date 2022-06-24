import '../mainPage.css';
import React from 'react';
import GitHubLogo from '../GitHub-logo-green.png';

export default function Header(){
  return(
    <div id='navbar'>
      <a href='/'>
        <img src={GitHubLogo} width="35px"  alt='Green GitHub Logo'></img>
      </a>
      <p id='navbar-title'> GitHub User Search</p>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
}
