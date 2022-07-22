import './mainPage.css';
import React, { useState } from 'react';
import Gists from './Components/Gists';
import Repos from './Components/Repos';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';

export default function MainPage(){
  const [user, setUser] = useState();
  const [disabled, setDisabled] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setUser(event.target.username.value)
  }

  function handleChange(event) {
    setDisabled(event.target.value === '');
  }

  return(
    <div id='container'>
      <Header/>

      <div className ='search-box'>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="username" onChange={handleChange} placeholder="Enter Username..."/>
          </label>
          <input type="submit" value="Search" disabled={disabled}/>
        </form>
      </div>

      <div className='padding10' style={user != null ? { display: 'none' } : {}}>
        <p className='center-text'>Find out more information about GitHub users and what they have publish publicly.</p>
        <p className='center-text'>Come back soon to see the new features that will also show the follower/following users and a random user option.</p>
        <p className='center-text'>If you want to try an example, look up yoselineguerrero.</p>
      </div>

      <div id='body-padding'>
        <Profile username={user}/>
        <Repos username={user}/>
        <Gists username={user}/>
      </div>
      <Footer/>
    </div>
  );
}