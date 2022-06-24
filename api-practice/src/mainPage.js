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

      <div className='button-box'>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <button className='button-profile' disabled={user.message === 'Not Found' || user.length === 0}>Go over to their github profile</button>
      </a>
      </div>
      
      <h2 style={{ color: 'red', display: 'flex', justifyContent: 'center', margin:'10px' }}>{user.message}</h2>

      <div className="grid-container">
        <div className="grid-item">
          <h2>Username:</h2>
          <p>{user.login}</p>
        </div>
        <div className="grid-item">
          <h2>Name:</h2>
          <p>{user.name}</p>
        </div>
        <div className="grid-item">
          <h2>Email:</h2>
          <p>{user.email}</p>
        </div>
        <div className="grid-item">
          <h2>Location:</h2>
          <p>{user.location}</p>
        </div>
        <div className="grid-item">
          <h2>Hireable:</h2>
          <p>{user.hireable}</p>
        </div>
        <div className="grid-item">
          <h2>Bio:</h2>
          <p>{user.bio}</p>
        </div>
        <div className="grid-item">
          <h2>Public Repos:</h2>
          <p>{user.public_repos}</p>
        </div>
        <div className="grid-item">
          <h2>Following:</h2>
          <p>{user.following}</p>
        </div>
        <div className="grid-item">
          <h2>Created their account:</h2>
          <p>{user.created_at}</p>
        </div>
        <div className="grid-item">
          <h2>Public Gists:</h2>
          <p>{user.public_gists}</p>
        </div>
        <div className="grid-item">
          <h2>Followers:</h2>
          <p>{user.followers}</p>
        </div>
        <div className="grid-item">
          <h2>Updated their account:</h2>
          <p>{user.updated_at}</p>
        </div>
      </div>
      <hr/>
      <Repos username={user.login}/>
      <hr/>
      <Gists username={user.login}/>

      <Footer/>
    </div>
  );
}