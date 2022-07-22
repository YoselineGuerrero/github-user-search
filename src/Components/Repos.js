import '../mainPage.css';
import React, { useEffect, useState } from 'react';
import { getRepos } from './ApiCalls';
import'./github-lang-colors.css';

export default function Repos(user){
  const [repos, setRepos] = useState([]);
  
  useEffect(() =>{
    getRepos(user.username).then((events) => {
      if(events.message !== 'Not Found')
        setRepos(events);
      else
        setRepos([])
    });
  }, [user.username]);

  return(
    <div style={repos.length > 0 ? {} : { display: 'none' }}>
      <h2 className='text-color'>Repos</h2>
      <div className="grid-container-repo">
        {repos.map((repo) => (
          <div className="grid-item-repo" key={repo.name}>
            <p id ='repo-title'><a id='footer-links' href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></p>
            <div className='subtitle'>
              <p className='padding10'>Created: {repo.created_at.substring(0, 10)}</p>
              <p className='padding10'>Updated: {repo.updated_at.substring(0, 10)}</p>
              <p className='padding10'>Pushed: {repo.pushed_at.substring(0, 10)}</p>
            </div>
            <div className='subtitle' style={{justifyContent: 'space-around'}}>
              <div className='inline-center'>
                <svg height="16" width='16' className='fill-color padding5'>
                  <path d="M 8 0.25 a 0.75 0.75 0 0 1 0.673 0.418 l 1.882 3.815 l 4.21 0.612 a 0.75 0.75 0 0 1 0.416 1.279 l -3.046 2.97 l 0.719 4.192 a 0.75 0.75 0 0 1 -1.088 0.791 L 8 12.347 l -3.766 1.98 a 0.75 0.75 0 0 1 -1.088 -0.79 l 0.72 -4.194 L 0.818 6.374 a 0.75 0.75 0 0 1 0.416 -1.28 l 4.21 -0.611 L 7.327 0.668 A 0.75 0.75 0 0 1 8 0.25 Z m 0 2.445 L 6.615 5.5 a 0.75 0.75 0 0 1 -0.564 0.41 l -3.097 0.45 l 2.24 2.184 a 0.75 0.75 0 0 1 0.216 0.664 l -0.528 3.084 l 2.769 -1.456 a 0.75 0.75 0 0 1 0.698 0 l 2.77 1.456 l -0.53 -3.084 a 0.75 0.75 0 0 1 0.216 -0.664 l 2.24 -2.183 l -3.096 -0.45 a 0.75 0.75 0 0 1 -0.564 -0.41 L 8 2.694 v 0.001 Z"/>
                </svg>
                <p>Stars: {repo.stargazers_count}</p>
              </div>
              <div className='inline-center'>
                <svg height="16" width='16' className='fill-color padding5'>
                  <path d="M 1.679 7.932 c 0.412 -0.621 1.242 -1.75 2.366 -2.717 C 5.175 4.242 6.527 3.5 8 3.5 c 1.473 0 2.824 0.742 3.955 1.715 c 1.124 0.967 1.954 2.096 2.366 2.717 a 0.119 0.119 0 0 1 0 0.136 c -0.412 0.621 -1.242 1.75 -2.366 2.717 C 10.825 11.758 9.473 12.5 8 12.5 c -1.473 0 -2.824 -0.742 -3.955 -1.715 C 2.92 9.818 2.09 8.69 1.679 8.068 a 0.119 0.119 0 0 1 0 -0.136 Z M 8 2 c -1.981 0 -3.67 0.992 -4.933 2.078 C 1.797 5.169 0.88 6.423 0.43 7.1 a 1.619 1.619 0 0 0 0 1.798 c 0.45 0.678 1.367 1.932 2.637 3.024 C 4.329 13.008 6.019 14 8 14 c 1.981 0 3.67 -0.992 4.933 -2.078 c 1.27 -1.091 2.187 -2.345 2.637 -3.023 a 1.619 1.619 0 0 0 0 -1.798 c -0.45 -0.678 -1.367 -1.932 -2.637 -3.023 C 11.671 2.992 9.981 2 8 2 Z m 0 8 a 2 2 0 1 0 0 -4 a 2 2 0 0 0 0 4 Z"/>
                </svg>
                <p>Watchers: {repo.watchers_count}</p>
              </div>
              <div className='inline-center'>
                <svg height="16" width='16' className='fill-color padding5'>
                  <path d="M8 9.5 a 1.5 1.5 0 1 0 0 -3 a 1.5 1.5 0 0 0 0 3 Z"/>
                  <path d="M8 0 a 8 8 0 1 0 0 16 A 8 8 0 0 0 8 0 Z M 1.5 8 a 6.5 6.5 0 1 1 13 0 a 6.5 6.5 0 0 1 -13 0 Z"/>
                </svg>
                <p>Issues Open: {repo.open_issues}</p>
              </div>
            </div>
            <div className='button-box'>
              <span className={repo.language} id='dot'></span>
              <span id='name'>{repo.language}</span>
            </div>
            <p className='sub-color'>{repo.description}</p>
            <div id="repo-tag">
            {repo.topics.map((topic) => (
              <span className='tag' key={topic}><b>{topic}</b></span>
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
