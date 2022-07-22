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
    <>
      <div className='big-center'>
        <h2 style={{ color: 'red', display: 'flex', justifyContent: 'center', margin:'10px' }}>{user.message}</h2>

        <img className='user-img' src={user.avatar_url} alt='GitHub user profile' style={user.avatar_url ? {} : { display: 'none' }}></img>
        <div>
          <h2 className='text-color start-content'>{user.name}</h2>
          <p id='username' className='start-content'>{user.login}</p>
          <p className='text-color start-content'>{user.bio}</p>
          <div className='center-f'>
            <svg style={user.login ? {} : { display: 'none' }} height="16" width='16' className='fill-color'>
              <path d="M 5.5 3.5 a 2 2 0 1 0 0 4 a 2 2 0 0 0 0 -4 Z M 2 5.5 a 3.5 3.5 0 1 1 5.898 2.549 a 5.507 5.507 0 0 1 3.034 4.084 a 0.75 0.75 0 1 1 -1.482 0.235 a 4.001 4.001 0 0 0 -7.9 0 a 0.75 0.75 0 0 1 -1.482 -0.236 A 5.507 5.507 0 0 1 3.102 8.05 A 3.49 3.49 0 0 1 2 5.5 Z M 11 4 a 0.75 0.75 0 1 0 0 1.5 a 1.5 1.5 0 0 1 0.666 2.844 a 0.75 0.75 0 0 0 -0.416 0.672 v 0.352 a 0.75 0.75 0 0 0 0.574 0.73 c 1.2 0.289 2.162 1.2 2.522 2.372 a 0.75 0.75 0 1 0 1.434 -0.44 a 5.01 5.01 0 0 0 -2.56 -3.012 A 3 3 0 0 0 11 4 Z"/>
            </svg>
            <span className='number'>{user.followers}</span>
            <span className='subtitle' style={user.login ? {} : { display: 'none' }}> follower ·</span>
            <span className='number'>{user.following}</span>
            <span className='subtitle' style={user.login ? {} : { display: 'none' }}> following</span>
          </div>
          <div className='center-f'>
            <svg style={user.company === null || user.company === ''|| user.company === undefined ? { display: 'none'} : {}} height="16" width='16' className='fill-color'>
              <path d="M 1.5 14.25 c 0 0.138 0.112 0.25 0.25 0.25 H 4 v -1.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0.75 0.75 v 1.25 h 2.25 a 0.25 0.25 0 0 0 0.25 -0.25 V 1.75 a 0.25 0.25 0 0 0 -0.25 -0.25 h -8.5 a 0.25 0.25 0 0 0 -0.25 0.25 v 12.5 Z M 1.75 16 A 1.75 1.75 0 0 1 0 14.25 V 1.75 C 0 0.784 0.784 0 1.75 0 h 8.5 C 11.216 0 12 0.784 12 1.75 v 12.5 c 0 0.085 -0.006 0.168 -0.018 0.25 h 2.268 a 0.25 0.25 0 0 0 0.25 -0.25 V 8.285 a 0.25 0.25 0 0 0 -0.111 -0.208 l -1.055 -0.703 a 0.75 0.75 0 1 1 0.832 -1.248 l 1.055 0.703 c 0.487 0.325 0.779 0.871 0.779 1.456 v 5.965 A 1.75 1.75 0 0 1 14.25 16 h -3.5 a 0.75 0.75 0 0 1 -0.197 -0.026 c -0.099 0.017 -0.2 0.026 -0.303 0.026 h -3 a 0.75 0.75 0 0 1 -0.75 -0.75 V 14 h -1 v 1.25 a 0.75 0.75 0 0 1 -0.75 0.75 h -3 Z M 3 3.75 A 0.75 0.75 0 0 1 3.75 3 h 0.5 a 0.75 0.75 0 0 1 0 1.5 h -0.5 A 0.75 0.75 0 0 1 3 3.75 Z M 3.75 6 a 0.75 0.75 0 0 0 0 1.5 h 0.5 a 0.75 0.75 0 0 0 0 -1.5 h -0.5 Z M 3 9.75 A 0.75 0.75 0 0 1 3.75 9 h 0.5 a 0.75 0.75 0 0 1 0 1.5 h -0.5 A 0.75 0.75 0 0 1 3 9.75 Z M 7.75 9 a 0.75 0.75 0 0 0 0 1.5 h 0.5 a 0.75 0.75 0 0 0 0 -1.5 h -0.5 Z M 7 6.75 A 0.75 0.75 0 0 1 7.75 6 h 0.5 a 0.75 0.75 0 0 1 0 1.5 h -0.5 A 0.75 0.75 0 0 1 7 6.75 Z M 7.75 3 a 0.75 0.75 0 0 0 0 1.5 h 0.5 a 0.75 0.75 0 0 0 0 -1.5 h -0.5 Z"/>
            </svg>
            <span className='user-info'>{user.company}</span>
          </div>
          <div className='center-f'>
            <svg style={user.location === null || user.location === ''|| user.location === undefined ? { display: 'none'} : {}} height="16" width='16' className='fill-color padding5'>
              <path d="M 11.536 3.464 a 5 5 0 0 1 0 7.072 L 8 14.07 l -3.536 -3.535 a 5 5 0 1 1 7.072 -7.072 v 0.001 Z m 1.06 8.132 a 6.5 6.5 0 1 0 -9.192 0 l 3.535 3.536 a 1.5 1.5 0 0 0 2.122 0 l 3.535 -3.536 Z M 8 9 a 2 2 0 1 0 0 -4 a 2 2 0 0 0 0 4 Z"/>
            </svg>
            <span className='user-info'>{user.location}</span>
          </div>
          <div className='center-f'>
            <svg style={user.blog === null || user.blog === '' || user.blog === undefined ? { display: 'none'} : {}} height="16" width='16' className='fill-color padding5'>
              <path d="M 7.775 3.275 a 0.75 0.75 0 0 0 1.06 1.06 l 1.25 -1.25 a 2 2 0 1 1 2.83 2.83 l -2.5 2.5 a 2 2 0 0 1 -2.83 0 a 0.75 0.75 0 0 0 -1.06 1.06 a 3.5 3.5 0 0 0 4.95 0 l 2.5 -2.5 a 3.5 3.5 0 0 0 -4.95 -4.95 l -1.25 1.25 Z m -4.69 9.64 a 2 2 0 0 1 0 -2.83 l 2.5 -2.5 a 2 2 0 0 1 2.83 0 a 0.75 0.75 0 0 0 1.06 -1.06 a 3.5 3.5 0 0 0 -4.95 0 l -2.5 2.5 a 3.5 3.5 0 0 0 4.95 4.95 l 1.25 -1.25 a 0.75 0.75 0 0 0 -1.06 -1.06 l -1.25 1.25 a 2 2 0 0 1 -2.83 0 Z"/>
            </svg>
            <span className='user-info'><a href={user.blog} id='footer-links' target='_blank' rel="noreferrer">{user.blog}</a></span>
          </div>
          <div className='center-f'>
            <svg style={user.twitter_username === null || user.twitter_username === ''|| user.twitter_username === undefined ? { display: 'none'} : {}} height="16" width='16' viewBox="0 0 273.5 222.3" className='fill-color padding5'>
              <path d="M 273.5 26.3 a 109.77 109.77 0 0 1 -32.2 8.8 a 56.07 56.07 0 0 0 24.7 -31 a 113.39 113.39 0 0 1 -35.7 13.6 a 56.1 56.1 0 0 0 -97 38.4 a 54 54 0 0 0 1.5 12.8 A 159.68 159.68 0 0 1 19.1 10.3 a 56.12 56.12 0 0 0 17.4 74.9 a 56.06 56.06 0 0 1 -25.4 -7 v 0.7 a 56.11 56.11 0 0 0 45 55 a 55.65 55.65 0 0 1 -14.8 2 a 62.39 62.39 0 0 1 -10.6 -1 a 56.24 56.24 0 0 0 52.4 39 a 112.87 112.87 0 0 1 -69.7 24 a 119 119 0 0 1 -13.4 -0.8 a 158.83 158.83 0 0 0 86 25.2 c 103.2 0 159.6 -85.5 159.6 -159.6 c 0 -2.4 -0.1 -4.9 -0.2 -7.3 a 114.25 114.25 0 0 0 28.1 -29.1"/>
            </svg>
            <span className='user-info'>{user.twitter_username}</span>
          </div>
          <p className='user-info'><a id='footer-links' href={`mailto:`+user.email} target="_blank" rel="noreferrer">{user.email}</a></p>
          <p className='user-info' style={user.login ? {} : { display: 'none' }}>Created: {user.created_at?.substring(0, 10)}</p>
          <p className='user-info' style={user.login ? {} : { display: 'none' }}>Updated: {user.updated_at?.substring(0, 10)}</p>
        </div>
      </div>
      <div className='button-box user-button'>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <button className='button-profile' disabled={user.message === 'Not Found' || user.length === 0} style={user.html_url ? {} : { display: 'none' }}>Go over to their github profile</button>
        </a>
      </div>
    </>
  );
}
