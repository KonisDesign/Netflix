import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Hero.scss'

export default function Hero() {

  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:8888/signup");
    const userExist = response.data.find((post) => post.Email === newEmail);
    if (userExist) {
      navigate("/login", { state: { User: newEmail } });
      return;
    } else {
      navigate("/signup", { state: { User: newEmail } });
    }
  }

  return (
    <div className='hero-container'>
      <div className='home-header'>
        <img className='logo' src={process.env.PUBLIC_URL + '/assets/logo_full.png'} alt='logo' />
        <div className='actions-header'>
          <i className="fa-solid fa-earth-europe"></i>
          <i className="fa-solid fa-sort-down"></i>
          <select className='languages' name='language'>
            <option value="french">Français</option>
            <option value="english">English</option>
          </select>
          <button className='primary-button' onClick={() => navigate('/login')}>S'identifier</button>
        </div>
      </div>
      <div className='get-start'>
        <h1>Films, séries et bien plus en illimité.</h1>
        <h3>Où que vous soyez. Annulez à tout moment.</h3>
        <h4>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h4>
        <form className='subscribe-actions' onSubmit={handleSubmit}>
          <input type='email' className='get-start-input' placeholder='Adresse e-mail' name='email' onChange={(e) => setNewEmail(e.target.value)} required />
          <label htmlFor="email" >Adresse e-mail</label>
          <button type='submit' className='primary-button'>Commencer <i className="fa-solid fa-chevron-right"></i></button>
        </form>
      </div>
    </div>
  )
}
