import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header-browse/HeaderBrowse';
import './Browse.scss'
import HeroBrowse from '../../components/hero-browse/HeroBrowse';
import Section from '../../components/section-browse/Section';

const Browse = () => {
  const navigate = useNavigate();
  const [media, setMedia] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const fetchPosts = async () => {
        const result = await axios.get('http://localhost:8888/browse');
        setMedia(result.data);
      };
      fetchPosts();
    }
  }, [navigate]);

  return (
    <div className='browse-container'>
      <Header />
      <HeroBrowse />
      <div className='sections-container'>
        <Section Media={media} Genre={"Science fiction"}/>
        <Section Media={media} Genre={"Action"}/>
        <Section Media={media} Genre={"Comédie"}/>
        <Section Media={media} Genre={"Super-héros"}/>
      </div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Browse;
