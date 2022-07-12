import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>HaoNguyen</a>

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/haonguyen2199/"><FaFacebookF /> </a>
        <a href="https://www.instagram.com/crispham.21/"><FaInstagram /></a>
        <a href="https://www.youtube.com/channel/UC-VOChFuBXBi_OHOzw96lnQ"><FiYoutube /></a>
        <a href="https://twitter.com/zed690132"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; HaoNguyen. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer