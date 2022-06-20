import './mainPage.css';
import React, { useState } from 'react';

export function getUser(username) {
  return fetch("https://api.github.com/users/"+username).then((data) =>
    data.json()
  );
}

export function getRepos(username) {
  return fetch("https://api.github.com/users/"+username+'/repos').then((data) =>
    data.json()
  );
}

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
    return () => (mounted = false);
  }

  function handleChange(event) {
    setDisabled(event.target.value === '');
  }
  
  return(
    <div>
      <div class ='search-box'>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username:</p>
            <input type="text" name="username" onChange={handleChange}/>
          </label>
          <input type="submit" value="Search user" disabled={disabled}/>
        </form>
      </div>

      <div class ='button-box'>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <button disabled={user.message === 'Not Found' || user.length === 0}>Go over to their github profile</button>
        </a>
      </div>
      
      <h2 style={{ color: 'red' }}>{user.message}</h2>

      <div class="grid-container">
        <div class="grid-item">
          <h2>Username:</h2>
          <p>{user.login}</p>
        </div>
        <div class="grid-item">
          <h2>Name:</h2>
          <p>{user.name}</p>
        </div>
        <div class="grid-item">
          <h2>Email:</h2>
          <p>{user.email}</p>
        </div>
        <div class="grid-item">
          <h2>Location:</h2>
          <p>{user.location}</p>
        </div>
        <div class="grid-item">
          <h2>Hireable:</h2>
          <p>{user.hireable}</p>
        </div>
        <div class="grid-item">
          <h2>Bio:</h2>
          <p>{user.bio}</p>
        </div>
        <div class="grid-item">
          <h2>Public Repos:</h2>
          <p>{user.public_repos}</p>
        </div>
        <div class="grid-item">
          <h2>Following:</h2>
          <p>{user.following}</p>
        </div>
        <div class="grid-item">
          <h2>Created their account:</h2>
          <p>{user.created_at}</p>
        </div>
        <div class="grid-item">
          <h2>Public Gists:</h2>
          <p>{user.public_gists}</p>
        </div>
        <div class="grid-item">
          <h2>Followers:</h2>
          <p>{user.followers}</p>
        </div>
        <div class="grid-item">
          <h2>Updated their account:</h2>
          <p>{user.updated_at}</p>
        </div>
      </div>
    </div>
  );
}