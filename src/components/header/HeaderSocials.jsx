import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'
import {FiDribbble} from 'react-icons/fi'
import {FaBlogger} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Honghaonguyen/haonguyen.github.io" target="_blank"><FaGithub /></a>
        <a href="https://dribbble.com/Crispham" target="_blank"><FiDribbble /></a>
        <a href="https://gmail.com" target="_blank"><CgMail /></a>
        <a href="https://blogger.com" target="_blank"><FaBlogger /></a>
    </div>
  )
}

export default HeaderSocials