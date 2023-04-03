import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='step-footer'>
        <p>Des questions ? Appelez le <a href='/'>(+33) 0805-543-063</a></p>
        <div className='links'>
          <div className='list'>
            <a href='/'>FAQ</a>
            <a href='/'>Confidentialité</a>
          </div>
          <div className='list'>
            <a href='/'>Centre d'aide</a>
            <a href='/'>Préférences de cookies</a>
          </div>
          <div className='list'>
            <a href='/'>Boutique Netflix</a>
            <a href='/'>Mentions légales</a>
          </div>
          <div className='list'>
            <a href='/'>Conditions d'utilisation</a>
          </div>
        </div>
        <div className='actions-footer'>
          <i className="fa-solid fa-earth-europe"></i>
          <i className="fa-solid fa-sort-down"></i>
          <select className='languages' name='language'>
            <option value="french">Français</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>
  )
}
