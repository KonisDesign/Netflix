import React from 'react'
import './HeaderBrowse.scss'

export default function Header() {
  return (
    <div className='header-browse'>
      <div className='main'>
        <img className='logo' src={process.env.PUBLIC_URL + '/assets/logo_full.png'} alt='logo_full' />
        <button className='main-button'>Accueil</button>
        <button className='main-button'>Séries</button>
        <button className='main-button'>Films</button>
        <button className='main-button'>Nouveautés les plus regardés</button>
        <button className='main-button'>Ma liste</button>
        <button className='main-button'>Explorer par langue</button>
      </div>
      <div className='main'>
        <button className='main-button'><i className="fa-solid fa-magnifying-glass"></i></button>
        <button className='main-button'><i className="fa-regular fa-bell"></i></button>
        <button className='main-button'><img src={process.env.PUBLIC_URL + "/assets/profile/1.png"} alt='profile' /><i className="fa-solid fa-caret-down"></i></button>
      </div>
    </div>
  )
}
