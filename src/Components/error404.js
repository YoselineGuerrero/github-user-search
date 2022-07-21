import React from 'react';

export default function ErrorPage() {
  return(
    <div>
      <p>Oops! Seems like that page doesn't exist...</p>
      <a href='/' className='center-error'>
        <button className='button-repo'>Click me to go to the main page</button>
      </a>
    </div>      
  )
} 
