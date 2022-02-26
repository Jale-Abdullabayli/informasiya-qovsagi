import React from 'react'
import './Footer.scss';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="container footerContainer">
        <h5>&copy; Made by Savadland | Bütün hüquqlar qorunur</h5>
        <div className='socialLinks'>
          <a href='https://twitter.com/IQovsaq' target="_blank">
            <BsTwitter />
          </a>
          <a href='https://www.instagram.com/iqovsaq/' target="_blank">
            <BsInstagram />
          </a>
          <a href='https://www.facebook.com/IQovsaq/' target="_blank">
            <FaFacebookF />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer