import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className='light-banner'>
        <img className='logo' src={process.env.PUBLIC_URL + "/assets/logo_full.png"} alt='logo.png' />
        <a href='/login'>S'identifier</a>
      </div>
  )
}
