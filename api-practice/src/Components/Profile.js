import '../mainPage.css';
import React, { useEffect, useState } from 'react';
import { getUser } from './ApiCalls';

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

      <div className='button-box'>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <button className='button-profile' disabled={user.message === 'Not Found' || user.length === 0} style={user.html_url ? {} : { display: 'none' }}>Go over to their github profile</button>
        </a>
      </div>
    </div>
  );
}
