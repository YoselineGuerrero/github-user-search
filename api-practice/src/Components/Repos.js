import '../mainPage.css';
import React, { useEffect, useState } from 'react';
import { getRepos } from './ApiCalls';
import'./github-lang-colors.css';

export default function Repos(user){
  const [repos, setRepos] = useState([]);
  
  useEffect(() =>{
    getRepos(user.username).then((events) => {
        setRepos(events);
    });
  }, [user.username]);

  return(
    <div style={repos.length > 0 ? {} : { display: 'none' }}>
      <hr/>
      <h2>Repos</h2>
      <div className="grid-container-repo">
        {repos.map((repo) => (
          <div className="grid-item-repo" key={repo.name}>
            <p id ='repo-title'>{repo.name}</p>
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
            <div className='button-box'>
              <span className={repo.language} id='dot'></span>
              <span id='name'>{repo.language}</span>
            </div>
            <p>Description: {repo.description}</p>
            <div id="repo-tag">
            {repo.topics.map((topic) => (
              <span className='tag' key={topic}><p>{topic}</p></span>
            ))}
            </div>
            <div id='repo-button-box'>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <button className='button-repo'>Code</button>
              </a>
              <a href={repo.homepage} target="_blank" rel="noreferrer">
                <button className='button-repo' disabled={repo.homepage === '' || repo.homepage === null}>Homepage</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
