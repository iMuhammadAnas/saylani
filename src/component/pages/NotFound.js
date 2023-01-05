import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Button } from '../Button';

export default function NotFound() {
  return (
      <div className='not-main'>
        <div className='not-text'>
          <h1 className='not'>404</h1>
        </div>
        <div className='btn-bx'>
          <Link to={'/'}>
            <button className='not-btn'>Go Back</button>
          </Link>
        </div>
      </div>
  );
}
