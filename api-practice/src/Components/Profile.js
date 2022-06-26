import '../mainPage.css';
import React, { useEffect, useState } from 'react';
import { getUser } from './ApiCalls';
import people from '../icons/people-icon.png';
import building from '../icons/building-icon.png';
import link from '../icons/link-icon.png';
import map from '../icons/map-icon.png';
import twitter from '../icons/twitter-icon.png';

export default function Profile(username){
  const [user, setUser] = useState([]);

  useEffect(() =>{
    if(username.username !== undefined){
      getUser(username.username).then((events) => {
        setUser(events);
      });
    }
  }, [username.username]);

  return(
    <div>
     <h2 style={{ color: 'red', display: 'flex', justifyContent: 'center', margin:'10px' }}>{user.message}</h2>

      <img className='user-img' src={user.avatar_url} alt='GitHub user profile' style={user.avatar_url ? {} : { display: 'none' }}></img>
      <h2>{user.name}</h2>
      <p id='username'>{user.login}</p>
      <p>{user.bio}</p>
      <div className='center-f'>
        <img src={people} width="16" height="16" alt='people icon' style={user.login ? {} : { display: 'none' }}></img>
        <span className='number'>{user.followers}</span>
        <span className='subtitle' style={user.login ? {} : { display: 'none' }}> follower ·</span>
        <span className='number'>{user.following}</span>
        <span className='subtitle' style={user.login ? {} : { display: 'none' }}> following</span>
      </div>
      <div className='center-f'>
        <img src={building} width="16" height="16" alt='people icon' style={user.compnay ? {} : { display: 'none' }} className='padding5'></img>
        <span className='user-info'>{user.company}</span>
      </div>
      <div className='center-f'>
        <img src={map} width="16" height="16" alt='people icon' style={user.location ? {} : { display: 'none' }} className='padding5'></img>
        <span className='user-info'>{user.location}</span>
      </div>
      <div className='center-f'>
        <img src={link} width="16" height="16" alt='people icon' style={user.blog ? {} : { display: 'none' }} className='padding5'></img>
        <span className='user-info'><a href={user.blog} id='footer-links' target='_blank' rel="noreferrer">{user.blog}</a></span>
      </div>
      <div className='center-f'>
        <img src={twitter} width="16" height="16" alt='people icon' style={user.twitter ? {} : { display: 'none' }} className='padding5'></img>
        <span className='user-info'>{user.twitter_username}</span>
      </div>
      <p className='user-info'>{user.email}</p>
      <p className='user-info' style={user.login ? {} : { display: 'none' }}>Created: {user.created_at}</p>
      <p className='user-info' style={user.login ? {} : { display: 'none' }}>Updated: {user.updated_at}</p>

      <div className='button-box'>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <button className='button-profile' disabled={user.message === 'Not Found' || user.length === 0} style={user.html_url ? {} : { display: 'none' }}>Go over to their github profile</button>
        </a>
      </div>
    </div>
  );
}
