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
      <div id='body-padding'>
        <Profile username={user}/>
        <Repos username={user}/>
        <Gists username={user}/>
      </div>
      <Footer/>
    </div>
  );
}