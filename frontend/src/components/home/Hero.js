import React from 'react'

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className='home-header'>
          <img className='logo' src={process.env.PUBLIC_URL + '/assets/logo_full.png'} alt='logo' />
          <div className='actions'>
          <i className="fa-solid fa-earth-europe"></i>
          <i className="fa-solid fa-sort-down"></i>
            <select className='languages' name='language'>
              <option value="french">Français</option>
              <option value="english">English</option>
            </select>
            <button className='primary-button'>S'identifier</button>
          </div>
        </div>
        <div className='get-start'>
          <h1>Films, séries et bien plus en illimité.</h1>
          <h3>Où que vous soyez. Annulez à tout moment.</h3>
          <h4>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h4>
          <form className='actions'>
            <input type='email' className='get-start-input' placeholder='Adresse e-mail' name='email' required />
            <label htmlFor="email" >Adresse e-mail</label>
            <button className='primary-button'>Commencer <i className="fa-solid fa-chevron-right"></i></button>
          </form>
        </div>
      </div>
  )
}
