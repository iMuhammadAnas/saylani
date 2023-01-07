import React from 'react';
import './Contact.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className='contact'>
        <div className='content'>
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit atque,
            eveniet delectus amet, ipsum laboriosam maiores magni ipsam id quia ex error
            necessitatibus ullam velit sapiente numquam quisquam expedita sequi?</p>
        </div>
        <div className='container'>
          <div className='contact-info'>
            <div className='box'>
              <div className='icon'><i className="fa-solid fa-location-dot" /></div>
              <div className='text'>
                <h3>Address</h3>
                <p>Bahadurabad Chowrangi Karachi,<br /> Sindh, Pakistan <br />74800</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><i className="fa-solid fa-phone" /></div>
              <div className='text'>
                <h3>Phone</h3>
                <p>111-729-526</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><i className="fa-solid fa-envelope" /></div>
              <div className='text'>
                <h3>Email</h3>
                <p>education@saylaniwelfare.com</p>
              </div>
            </div>
          </div>
          <div className='contactForm'>
            <form>
              <h2>Send Message</h2>
              <div className='inputBox'>
                <input type={'text'} name={''} required />
                <span>Full Name</span>
              </div>
              <div className='inputBox'>
                <input type={'email'} name={''} required />
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea required></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className='inputBox'>
                <input type={'submit'} value={'Send'} />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
