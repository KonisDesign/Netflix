import React from 'react'
import Card from '../../components/home/Card';
import Faq from '../../components/home/Faq';
import Hero from '../../components/home/Hero';
import './Home.scss'

export default function Home() {

  return (
    <div className='home-container'>
      <div className='offer-banner'>
        <h5 className='highlighted'>NOUVEAU !</h5>
        <p>Offres désormais disponibles à partir de <b>5,99€</b>.</p>
        <a className='internal-link' href='/'>En savoir plus <i className="fa-solid fa-chevron-right"></i></a>
      </div>
      <Hero />
      <Card Style={1} />
      <Card Style={2} />
      <Card Style={3} />
      <Card Style={4} />
      <Faq />
    </div>
  )
}
