import '../mainPage.css';
import React, { useEffect, useState } from 'react';
import {getRepos } from './ApiCalls';

export default function Repos(user){
  const [repos, setRepos] = useState([]);
  
  useEffect(() =>{
    getRepos(user.username).then((events) => {
        setRepos(events);
    });
  }, [user.username]);

  return(
    <div>
      <h2 style={{ display: 'flex', justifyContent: 'center', margin:'10px' }}>Repos</h2>
      <div className="grid-container-repo">
        {repos.map((repo) => (
          <div className="grid-item-repo">
            <p style={{fontSize: '1.25em', marginBottom:'4px', color:'#0969DA'}} >{repo.name}</p>
            <div className='subtitle'>
              <p >Created: {repo.created_at.substring(0, 10)}</p>
              <p >Updated: {repo.updated_at.substring(0, 10)}</p>
              <p >Pushed: {repo.pushed_at.substring(0, 10)}</p>
            </div>
            <div className='subtitle'>
              <p>Stars: {repo.stargazers_count}</p>
              <p>Watchers: {repo.watchers_count}</p>
              <p>Issues Open: {repo.open_issues}</p>
            </div>
            <p>Language: {repo.language}</p>
            <p>Description: {repo.description}</p>
            <p>Topics:</p>
            {repo.topics.map((topic) => (
              <div className='tag'><p>{topic}</p></div>
            ))}
            <div>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <button className='button-repo'>Code</button>
              </a>
              <a href={repo.homepage} target="_blank" rel="noreferrer">
                <button className='button-repo'>Homepage</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
