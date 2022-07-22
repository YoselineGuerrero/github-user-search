import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function ErrorPage() {
  return(
    <div id='container'>
      <Header/>
      <div style={{marginTop:'20px'}}>
        <p className='center-text'>Oops! Seems like that page doesn't exist...</p>
        <a href='/' className='center-error'>
          <button className='button-repo'>Click me to go to the main page</button>
        </a>
      </div>
      <Footer/>
    </div>      
  )
} 
