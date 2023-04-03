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
    // Check if the user is logged in before allowing access to the page
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
      // Redirect the user to the login page if not logged in
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
