import './mainPage.css';
import React, { useState } from 'react';
import { getUser} from './Components/ApiCalls';
import Gists from './Components/Gists';
import Repos from './Components/Repos';
import Footer from './Components/Footer';
import Header from './Components/Header';

export default function MainPage(){
  const [user, setUser] = useState([]);
  const [disabled, setDisabled] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    let mounted = true;
    getUser(e.target.username.value).then((events) => {
      if (mounted) {
        setUser(events);
      }
    });
    document.title = e.target.username.value; 
    return () => (mounted = false);
  }

  function handleChange(event) {
    setDisabled(event.target.value === '');
  }

  return(
    <div>
      <Header/>

      <div className ='search-box'>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="username" onChange={handleChange} placeholder="Enter Username..."/>
          </label>
          <input type="submit" value="Search User" disabled={disabled}/>
        </form>
      </div>

      <h2 style={{ color: 'red', display: 'flex', justifyContent: 'center', margin:'10px' }}>{user.message}</h2>

      <img className='user-img' src={user.avatar_url} alt='GitHub user profile' style={user.avatar_url ? {} : { display: 'none' }}></img>
      <h2>{user.name}</h2>
      <p id='username'>{user.login}</p>
      <p>{user.bio}</p>
      <div className='center-f'>
        <span className='number'>{user.followers}</span>
        <span className='subtitle' style={user.login ? {} : { display: 'none' }}> follower ·</span>
        <span className='number'>{user.following}</span>
        <span className='subtitle' style={user.login ? {} : { display: 'none' }}> following</span>
      </div>
      <p className='user-info'>{user.company}</p>
      <p className='user-info'>{user.location}</p>
      <p className='user-info'><a href={user.blog} id='footer-links'  target='_blank' rel="noreferrer">{user.blog}</a></p>
      <p className='user-info'>{user.twitter_username}</p>

      <p className='user-info'>{user.email}</p>
      <p className='user-info'>{user.created_at}</p>
      <p className='user-info'>{user.updated_at}</p>
      <p className='user-info'>{user.location}</p>

      <div className='button-box'>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <button className='button-profile' disabled={user.message === 'Not Found' || user.length === 0} style={user.html_url ? {} : { display: 'none' }}>Go over to their github profile</button>
        </a>
      </div>

      <Repos username={user.login}/>
      <Gists username={user.login}/>

      <Footer/>
    </div>
  );
}