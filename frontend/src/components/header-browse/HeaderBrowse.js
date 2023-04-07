import React, {useEffect, useState} from 'react'
import './HeaderBrowse.scss'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const background = scrollPosition > 100 ? '#000' : 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 212, 255, 0) 100%)';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className='header-browse' style={{background}}>
      <div className='main'>
        <img className='logo' src={process.env.PUBLIC_URL + '/assets/logo_full.png'} alt='logo_full' />
        <button className='main-button' onClick={() => props.setMain("main")}>Accueil</button>
        <button className='main-button' onClick={() => props.setMain("Série")}>Séries</button>
        <button className='main-button' onClick={() => props.setMain("Film")}>Films</button>
        <button className='main-button' onClick={() => props.setMain("Nouveautés")}>Nouveautés les plus regardés</button>
        <button className='main-button'>Ma liste</button>
        <button className='main-button'>Explorer par langue</button>
      </div>
      <div className='main'>
        <button className='main-button'><i className="fa-solid fa-magnifying-glass"></i></button>
        <button className='main-button'><i className="fa-regular fa-bell"></i></button>
        <button className='main-button'><img src={process.env.PUBLIC_URL + "/assets/profile/1.png"} alt='profile' /><i className="fa-solid fa-caret-down"></i></button>
        <div className='profile-main'>
        <i className="fa-solid fa-caret-up"></i>
          <a href='/'><i className="fa-solid fa-pen"></i> Gérer les profils</a>
          <a href='/'><i className="fa-solid fa-id-card-clip"></i> Transférer un profil</a>
          <a href='/'><i className="fa-regular fa-user"></i> Compte</a>
          <a href='/'><i className="fa-solid fa-question"></i> Centre d'aide</a>
          <button onClick={() => handleLogout()}>Se déconnecter</button>
        </div>
      </div>
    </div>
  )
}
