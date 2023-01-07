import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>SAYLANI WELFARE</h1>
      <p>Mass Training & Job Creation Program</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT US
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          FACEBOOK PAGE <i className='far fa-play-circle' />
        </Button> */}
        <a className='lBtn' target={'_blank'} rel='noreferrer' href='https://www.facebook.com/SaylaniMassTraining'>
          Facebook Page &nbsp;<i className='fab fa-facebook-f' />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
