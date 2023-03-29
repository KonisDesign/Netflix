import React from 'react'

export default function Card(props) {

  return props.Style === 1 ? (
    <div className='card'>
        <div className='infos'>
            <h1>Regardez Netflix sur votre TV.</h1>
            <h2>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus.</h2>
        </div>
        <div className='media'>
            <video width="75%" autoPlay={true} muted loop playsInline>
                <source src={process.env.PUBLIC_URL + "/assets/home-video-1.m4v"} type="video/mp4"/>
            </video>
            <img src={process.env.PUBLIC_URL + "/assets/tv.png"} alt='tv.png'/>
        </div>
    </div>
  )
  : props.Style === 2 ?
  (
    <div className='card'>
        <div className='media'>
            <video width="60%" autoPlay={true} muted loop playsInline>
                <source src={process.env.PUBLIC_URL + "/assets/home-video-2.m4v"} type="video/mp4"/>
            </video>
            <img src={process.env.PUBLIC_URL + "/assets/device-pile.png"} alt='device.png'/>
        </div>
        <div className='infos'>
            <h1>Où que vous soyez.</h1>
            <h2>Regardez des films et séries en illimité sur votre TV, smartphone, tablette et ordinateur, sans payer de supplément.</h2>
        </div>
    </div>
  )
  : props.Style === 3 ?
  (
    <div className='card'>
        <div className='infos'>
            <h1>Créez des profils pour les enfants.</h1>
            <h2>Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.</h2>
        </div>
        <div className='media'>
            <img src={process.env.PUBLIC_URL + "/assets/kids.png"} alt='kid.png'/>
        </div>
    </div>
  )
  :
  (
    <div className='card'>
        <div className='media'>
            <img src={process.env.PUBLIC_URL + "/assets/mobile.jpeg"} alt='mobile.jpeg'/>
        </div>
        <div className='infos'>
            <h1>Téléchargez vos séries préférées pour les regarder hors connexion.</h1>
            <h2>Uniquement disponible dans les offres sans pub.</h2>
        </div>
    </div>
  )
}
