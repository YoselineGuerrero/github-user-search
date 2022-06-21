import '../mainPage.css';
import React, { useEffect, useState } from 'react';
import {getGists } from './ApiCalls';

export default function Gists(user){
  const [gists, setGists] = useState([]);

  useEffect(() =>{
    getGists(user.username).then((events) => {
      setGists(events);
    });
  }, [user.username]);

  return(
    <div>
      <h2 style={{ display: 'flex', justifyContent: 'center', margin:'10px' }}>Gists</h2>
      <div className="grid-container-repo">
        {gists.map((gist) => (
          <div className="grid-item-repo">
            <div className='subtitle'>
              <p>Created: {gist.created_at.substring(0, 10)}</p>
              <p>Updated: {gist.updated_at.substring(0, 10)}</p>
            </div>
            <p>Description: {gist.description}</p>
            <div>
              <a href={gist.html_url} target="_blank" rel="noreferrer">
                <button className='button-repo'>Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
