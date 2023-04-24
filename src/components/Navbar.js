import Image from 'next/image';
import React, {useEffect} from 'react'
import {BiMenu} from 'react-icons/bi'
import {FaAppleAlt} from 'react-icons/fa'

import Logo from '../../public/logo.png'

export default function Navbar() {

  useEffect(() => {
    let btns = document.getElementsByClassName('nav-link');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function(){
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += ' active'
        })
    }

      console.log(btns);
  }, 2000)

  return (
    <nav id='navbar' className='navbar navbar-expand-lg fixed-top bg-primary-color'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <Image 
              src={Logo}
              width={180}
              height={60}
              alt='logo'
            />
          </a>
          <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbar-items'
          aria-controls='navbar-items'
          aria-expanded='false'
          aria-label='Toggle navigation'>
            <BiMenu />
          </button>
          <div className='collapse navbar-collapse' id='navbar-items'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a href='#' className='nav-link active' aria-current='page'>Home</a>
              </li>
              <li className='nav-item'>
                <a href='#about' className='nav-link' aria-current='page'>Sobre</a>
              </li>
              <li className='nav-item'>
                <a href='#services' className='nav-link' aria-current='page'>Serviços</a>
              </li>
              <li className='nav-item'>
                <a href='#feedback' className='nav-link' aria-current='page'>Depoimentos</a>
              </li>
              <li className='nav-item'>
                <a href='#blog' className='nav-link' aria-current='page'>Blog</a>
              </li>
              <li className='nav-item'>
                <a href='#footer' className='nav-link' aria-current='page'>Contato</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}
