import '../mainPage.css';
import React, {useEffect, useRef} from 'react';
import GitHubLogo from '../GitHub-logo-green.png';

export default function Header(){
  const ref = useRef(null);

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');   
      localStorage.setItem('theme', 'light');
    }    
  }

  useEffect(() => {
    ref.current.addEventListener('change', switchTheme, false);
  }
  ,
  [ref]);

  return(
    <div id='navbar'>
      <a href='/'>
        <img src={GitHubLogo} width="35px"  alt='Green GitHub Logo'></img>
      </a>
      <p id='navbar-title'> GitHub User Search</p>
      <label className="switch">
        <input type="checkbox" ref={ref}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
}
