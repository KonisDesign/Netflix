import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='home-footer'>
        <p>Des questions ? Appelez le <a href='/'>(+33) 0805-543-063</a></p>
        <div className='links'>
        <div className='list'>
            <a href='/'>FAQ</a>
            <a href='/'>Presse</a>
            <a href='/'>Boutique Netflix</a>
            <a href='/'>Modes de lecture</a>
            <a href='/'>Préférences de cookies</a>
            <a href='/'>Test de vitesse</a>
            <a href='/'>Seulement sur Netflix</a>
        </div>
        <div className='list'>
            <a href='/'>Centre d'aide</a>
            <a href='/'>Relations Investisseurs</a>
            <a href='/'>Utiliser des cartes cadeaux</a>
            <a href='/'>Conditions d'utilisation</a>
            <a href='/'>Mentions légales</a>
            <a href='/'>Garantie légale</a>
        </div>
        <div className='list'>
            <a href='/'>Compte</a>
            <a href='/'>Recrutement</a>
            <a href='/'>Acheter des cartes cadeaux</a>
            <a href='/'>Confidentialité</a>
            <a href='/'>Nous contacter</a>
            <a href='/'>Informations légales</a>
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
        <p>Netflix France</p>
    </div>
  )
}
