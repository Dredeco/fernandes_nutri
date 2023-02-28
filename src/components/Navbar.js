import React from 'react'
import {BiMenu} from 'react-icons/bi'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top bg-primary-color'>
        <div className='container py-3'>
          <a>
            <span>Fernandes Nutri</span>
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
                <a href='#' className='nav-link' aria-current='page'>Projetos</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link' aria-current='page'>Imóveis</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link' aria-current='page'>Contatos</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}
