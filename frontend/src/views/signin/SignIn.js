import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './SignIn.scss';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8888/login', {
        Email: email,
        Password: password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/browse')
    } catch (error) {
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/browse');
    }
  });

  return (
    <div className='signin-container'>
      <div className='signin-header'>
        <img className='logo' src={process.env.PUBLIC_URL + '/assets/logo_full.png'} alt='logo' />
      </div>
      <div className='signin-section'>
        <form className='signin-panel' onSubmit={handleSubmit}>
          <h2>S'identifier</h2>
          <div className='signin-actions'>
            <input
              className='signin-input'
              type='email'
              placeholder='Adresse e-mail'
              name='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label htmlFor="email" >E-mail ou numéro de téléphone</label>
          </div>
          <div className='signin-actions'>
            <input
              className='signin-input'
              type='password'
              placeholder='Password'
              name='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label htmlFor="password" >Mot de passe</label>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button className='primary-button'>S'identifier</button>
          <div className='row'>
            <div className='check-container'>
              <input type="checkbox" name='keep' id='keep' value='keep' />
              <label htmlFor='keep'>Se souvenir de moi</label>
            </div>
            <a href='/'>Besoin d'aide ?</a>
          </div>
          <p>Première visite sur Netflix ? <a href='/'>Inscrivez-vous</a></p>
          <p>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. </p>
        </form>
      </div>
    </div>
  );
}
