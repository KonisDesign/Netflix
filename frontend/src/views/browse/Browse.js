import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header-browse/HeaderBrowse';
import './Browse.scss'
import HeroBrowse from '../../components/hero-browse/HeroBrowse';

const Browse = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className='browse-container'>
      <Header />
      <HeroBrowse />
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Browse;
